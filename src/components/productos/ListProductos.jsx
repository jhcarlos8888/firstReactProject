import ItemProd from "./ItemProd";

const ListProductos = ({producto}) =>{

    return (
        <ul>
                {
                producto.map((element, index) => (
                    //<li>{element}</li>
                    <ItemProd key={index} productico={element}></ItemProd>
                ))
                }
         </ul>
    )

};

export default ListProductos;