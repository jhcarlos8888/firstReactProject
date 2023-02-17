const MyButton = () =>{
    return(
        <button>Yo soy un botonsito</button>  
    )
};


const App = () => {
    const title = "Mi nombre desde una constante"
    const centrarTexto = "text-center"
    const coloresTitulo = {
        titulo1: "rojito",
        titulo2: "omesito"
    }

    const pathImagen = "https://picsum.photos/200"

    const footer = "Mi pie de pagina"

    const extraccion = footer

    return(
    <>
    <h1 className={centrarTexto}>{extraccion}</h1>
    <img src={pathImagen} alt={coloresTitulo.titulo1}/> 
    <MyButton></MyButton>
    </>
     
    )
       
};

export default App;