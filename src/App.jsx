import imgUno from "./assets/images/imagenPequeña.jpg"

const MyButton = () =>{
    return(
        <button>Yo soy un botonsito</button>  
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
    

    return(
    <>
    <h1 className={centrarTexto}>{extraccion}</h1>
    <img src={imgUno} alt={coloresTitulo.titulo1}/> 
    <MyButton></MyButton>
    {
        user ? <TextOnline></TextOnline> : <TextOffline></TextOffline> 
    }
    </>
     
    )
       
};

export default App;