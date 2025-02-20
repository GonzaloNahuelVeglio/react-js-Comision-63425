import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth"; // 🔹 Importamos el hook de autenticación
import { useNavigate } from "react-router-dom";
import {
  getDoc,
  doc,
  getDocs,
  collection,
  updateDoc,
  deleteDoc,
  setDoc
} from "firebase/firestore";
import { db } from "../../services/config";
import "./AdminPanel.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import ImportarRecetas from "../importarRecetas/ImportarRecetas";

const AdminPanel = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [pedidos, setPedidos] = useState([]);
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState({});
  const { logout } = useAuth();
  const [busqueda, setBusqueda] = useState("");
  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////

  const obtenerCategorias = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "categorias"));
      const catMap = {};
      querySnapshot.docs.forEach((doc) => {
        catMap[doc.data().idCat] = doc.data().nombre;
      });
      setCategorias(catMap);
    } catch (error) {
      console.error("Error obteniendo categorías:", error);
    }
  };

  useEffect(() => {
    obtenerCategorias();
    obtenerProductos();
  }, []);

  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    precio: "",
    categoria: "",
    stock: "",
    img: "",
  });

  useEffect(() => {
    const verificarAdmin = async () => {
      try {
        const userUser = localStorage.getItem("userUser");
        if (!userUser) {
          navigate("/login");
          return;
        }

        const userDocRef = doc(db, "usuarios", "admin");
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists() && userDoc.data().user === "admin") {
          setIsAdmin(true);
          obtenerProductos();
          obtenerPedidos();
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error("Error verificando el admin:", error);
        navigate("/login");
      }
    };

    verificarAdmin();
  }, [navigate]);

  const [vista, setVista] = useState("productos");

  const obtenerProductos = async () => {
    console.log("Ejecutando obtenerProductos...");
    try {
      const querySnapshot = await getDocs(collection(db, "inventario"));
      const productosArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Productos obtenidos:", productosArray);

      setProductos(productosArray);
    } catch (error) {
      console.error("Error obteniendo productos:", error);
    }
  };

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const editarPrecio = async (id, nuevoPrecio) => {
    try {
      const productoRef = doc(db, "inventario", id);
      await updateDoc(productoRef, { precio: Number(nuevoPrecio) });
      obtenerProductos();
      Swal.fire(
        "Actualizado",
        "El precio se ha actualizado con éxito",
        "success"
      );
    } catch (error) {
      console.error("Error actualizando precio:", error);
      Swal.fire("Error", "No se pudo actualizar el precio", "error");
    }
  };

  const editarStock = async (id, nuevoStock) => {
    try {
      const productoRef = doc(db, "inventario", id);
      await updateDoc(productoRef, { stock: Number(nuevoStock) });

      setProductos((prev) =>
        prev.map((prod) =>
          prod.id === id ? { ...prod, stock: Number(nuevoStock) } : prod
        )
      );

      Swal.fire(
        "Actualizado",
        "El stock se ha actualizado con éxito",
        "success"
      );
    } catch (error) {
      console.error("Error actualizando stock:", error);
      Swal.fire("Error", "No se pudo actualizar el stock", "error");
    }
  };

  const eliminarProducto = async (id) => {
    Swal.fire({
      title: "¿Eliminar producto?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteDoc(doc(db, "inventario", id));
          obtenerProductos();
          Swal.fire("Eliminado", "El producto ha sido eliminado", "success");
        } catch (error) {
          console.error("Error eliminando producto:", error);
          Swal.fire("Error", "No se pudo eliminar el producto", "error");
        }
      }
    });
  };

  const agregarProducto = () => {
    let selectHTML = '<select id="swal-categoria" class="swal2-input">';
    Object.keys(categorias).forEach((id) => {
      selectHTML += `<option value="${id}">${categorias[id]}</option>`;
    });
    selectHTML += "</select>";

    Swal.fire({
      title: "Agregar Producto",
      html: `
        <label>Nombre</label>
        <input id="swal-nombre" class="swal2-input" placeholder="Nombre">
        <label>Precio</label>
        <input id="swal-precio" type="number" class="swal2-input" placeholder="Precio">
        <label>Categoría</label>
        ${selectHTML}
        <label>Stock</label>
        <input id="swal-stock" type="number" class="swal2-input" placeholder="Stock">
        <label>Imagen</label>
        <input id="swal-img" class="swal2-input" placeholder="URL Imagen">
        <label>Detalle</label>
        <input id="swal-detalle" class="swal2-input" placeholder="Detalle">
      `,
      showCancelButton: true,
      confirmButtonText: "Agregar",
      cancelButtonText: "Cancelar",
      preConfirm: async () => {
        const nombre = document.getElementById("swal-nombre").value;
        const precio = document.getElementById("swal-precio").value;
        const idCat = document.getElementById("swal-categoria").value;
        const stock = document.getElementById("swal-stock").value;
        const img = document.getElementById("swal-img").value;
        const detalle = document.getElementById("swal-detalle").value;

        try {
          const nuevoId = await obtenerNuevoIdProducto();
          console.log("Nuevo ID:", nuevoId);

          if (!nombre || !precio || !idCat || !stock || !img || !detalle) {
            Swal.fire("Error", "Todos los campos son requeridos", "error");
            return;
          }

          if (!nuevoId || isNaN(nuevoId)) {
            throw new Error("El ID generado es inválido.");
          }

          await setDoc(doc(db, "inventario", nuevoId.toString()), {
            nombre,
            precio: Number(precio),
            idCat,
            stock: Number(stock),
            img,
            detalle,
          });
          obtenerProductos();
          Swal.fire("Agregado", "El producto ha sido agregado", "success");
        } catch (error) {
          Swal.fire("Error", "No se pudo agregar el producto", "error");
          console.error("Error agregando producto:", error);
        }
      },
    });
  };

  const obtenerNuevoIdProducto = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "inventario"));
      let maxId = 0;

      querySnapshot.docs.forEach((doc) => {
        const idNumerico = parseInt(doc.id, 10);
        if (!isNaN(idNumerico) && idNumerico > maxId) {
          maxId = idNumerico;
        }
      });

      return maxId + 1;
    } catch (error) {
      console.error("Error obteniendo el nuevo ID:", error);
      return 1;
    }
  };

  const obtenerPedidos = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "ordenes"));
      const pedidosArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPedidos(pedidosArray);
    } catch (error) {
      console.error("Error al obtener pedidos:", error);
      Swal.fire("Error", "Hubo un problema al obtener los pedidos", "error");
    }
  };

  const handleLogout = () => {
    Swal.fire({
      title: "¿Cerrar sesión?",
      text: "¿Estás seguro de que querés salir?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, salir",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        navigate("/login");
      }
    });
  };

  const toggleDestacado = async (id, estadoActual) => {
    try {
      const productoRef = doc(db, "inventario", id);
      await updateDoc(productoRef, { destacado: !estadoActual });

      setProductos((prev) =>
        prev.map((prod) =>
          prod.id === id ? { ...prod, destacado: !estadoActual } : prod
        )
      );

      Swal.fire(
        "Actualizado",
        `El producto ha sido ${
          !estadoActual ? "destacado" : "quitado de destacados"
        }`,
        "success"
      );
    } catch (error) {
      console.error("Error actualizando destacado:", error);
      Swal.fire("Error", "No se pudo actualizar el producto", "error");
    }
  };

  const editarProducto = (producto) => {
    let selectHTML = '<select id="swal-categoria" class="swal2-input">';
    Object.keys(categorias).forEach((id) => {
      selectHTML += `<option value="${id}" ${
        id === producto.categoria ? "selected" : ""
      }>${categorias[id]}</option>`;
    });
    selectHTML += "</select>";

    Swal.fire({
      title: "Editar Producto",
      html: `
        <label>Nombre</label>
        <input id="swal-nombre" class="swal2-input" value="${producto.nombre}">
        <label>Precio</label>
        <input id="swal-precio" type="number" class="swal2-input" value="${producto.precio}">
        <label>Categoría</label>
        ${selectHTML}
        <label>Stock</label>
        <input id="swal-stock" type="number" class="swal2-input" value="${producto.stock}">
        <label>Imagen</label>
        <input id="swal-img" class="swal2-input" value="${producto.img}">
      `,
      showCancelButton: true,
      confirmButtonText: "Guardar",
      cancelButtonText: "Cancelar",
      preConfirm: async () => {
        const nombre = document.getElementById("swal-nombre").value;
        const precio = document.getElementById("swal-precio").value;
        const categoria = document.getElementById("swal-categoria").value;
        const stock = document.getElementById("swal-stock").value;
        const img = document.getElementById("swal-img").value;

        try {
          const productoRef = doc(db, "inventario", producto.id);
          await updateDoc(productoRef, {
            nombre,
            precio: Number(precio),
            categoria,
            stock: Number(stock),
            img,
          });

          setProductos((prev) =>
            prev.map((prod) =>
              prod.id === producto.id
                ? { ...prod, nombre, precio, categoria, stock, img }
                : prod
            )
          );

          Swal.fire("Actualizado", "El producto ha sido modificado", "success");
        } catch (error) {
          Swal.fire("Error", "No se pudo actualizar el producto", "error");
        }
      },
    });
  };

  return isAdmin ? (
    <div className="admin-panel">
      <div className="admin-panel--encabezado">
        <h2>Panel de Administración</h2>
        <button className="logout-btn" onClick={handleLogout}>
          Cerrar Sesión
        </button>
      </div>
      <p>Bienvenido, admin</p>
      <button onClick={ImportarRecetas}>Subir Recetas a Firebase</button>

      <div>
        <button onClick={() => setVista("productos")}>Ver Productos</button>
        <button onClick={() => setVista("pedidos")}>Ver Pedidos</button>
      </div>
      {vista === "productos" ? (
        <div>
          <h3>Productos</h3>

          <input
            type="text"
            placeholder="Buscar producto..."
            value={busqueda}
            className="swal2-input" 
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <button onClick={agregarProducto}>Nuevo Producto</button>
          <table border="1">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Categoría</th>
                <th>Stock</th>
                <th>Imagen</th>
                <th>Destacado</th>
                <th colSpan={3}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productosFiltrados.map((producto) => (
                <tr key={producto.id}>
                  <td>{producto.id}</td>
                  <td>{producto.nombre}</td>
                  <td>${producto.precio}</td>
                  <td>
                    {categorias[producto.categoria] ||
                      "Categoría no encontrada"}
                  </td>
                  <td>{producto.stock}</td>
                  <td>
                    <img src={producto.img} alt={producto.nombre} width="50" />
                  </td>
                  <td>{producto.destacado ? "✅ Sí" : "❌ No"}</td>
                  <td>
                    <button
                      onClick={() =>
                        toggleDestacado(producto.id, producto.destacado)
                      }
                    >
                      {producto.destacado ? "Quitar Destacado" : "Destacar"}
                    </button>
                  </td>
                  <td>
                    <button onClick={() => eliminarProducto(producto.id)}>
                      <MdDelete />
                    </button>
                  </td>
                  <td>
                    <button onClick={() => editarProducto(producto)}>
                      <FaEdit />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <h3>Pedidos</h3>
          {pedidos.length > 0 ? (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID Pedido</th>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Total</th>
                  <th>Fecha</th>
                  <th>Productos</th>
                </tr>
              </thead>
              <tbody>
                {pedidos.map((pedido) => (
                  <tr key={pedido.id}>
                    <td>{pedido.id}</td>
                    <td>
                      {pedido.nombre} {pedido.apellido}
                    </td>
                    <td>{pedido.email}</td>
                    <td>${pedido.total}</td>
                    <td>
                      {new Date(
                        pedido.fecha.seconds * 1000
                      ).toLocaleDateString()}
                    </td>
                    <td>
                      <div className="product-list">
                        {pedido.items.map((item) => (
                          <p key={`${pedido.id}-${item.id}`}>
                            {item.nombre} x {item.cantidad}
                          </p>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="no-orders">No hay pedidos disponibles.</p>
          )}
        </div>
      )}
    </div>
  ) : null;
};

export default AdminPanel;
