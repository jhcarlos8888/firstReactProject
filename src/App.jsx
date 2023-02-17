import imgUno from "./assets/images/imagenPequeña.jpg"

const MyButton = (props) =>{
    return(
        <button>{props.text}</button>  
    )
};

const TextOnline = () =>{
    return(
    <h3> Online</h3>
    )
};

const TextOffline = () =>{
    return(
    <h3> Offline</h3>
    )
};

const ItemFruta = (props) => {
    return (
        <li>{props.text}</li>
    )
};


const App = () => {
    const title = "Mi nombre desde una constante"
    const centrarTexto = "text-center"
    const coloresTitulo = {
        titulo1: "rojito",
        titulo2: "omesito"
    }
    const footer = "Mi pie de pagina"
    const extraccion = footer
    const user = true
    const frutas = ["😁","🐱‍🏍","🐱‍🚀"]


    return(
    <>
    <h1 className={centrarTexto}>{extraccion}</h1>
    <img src={imgUno} alt={coloresTitulo.titulo1}/> 
    <MyButton text="Boton Numero 1"></MyButton>
    { user ? <TextOnline/> : <TextOffline/> }
    <ul>
        {
            frutas.map((frut,index) => (
               
                <ItemFruta key={index} text={frut}></ItemFruta>
            ))
        }
    </ul>
    
    </>

    )
       
};

export default App;