import './Item.css' 
 import Badge from 'react-bootstrap/Badge'; 
import { Link } from 'react-router-dom';

const Item = ({idItem, nombre, categoria, precio, img}) => {
   return (
    <div className='item'>
        <img src={img} className="product" alt={nombre} />
       <div className='d-flex flex-column '> 
         <h3>{nombre}</h3>  <Badge  bg="success">{categoria}</Badge>
        </div>
        <p>$ {precio}</p>
        <Link className='btn' to={`/item/${idItem}`}> Ver Detalles </Link>
    </div>  )
}

  
export default Item