import imgUno from "./assets/images/imagenPequeña.jpg"

const MyButton = ({text}) => {

    const handleClickButton = (titleLogButton) => (
        console.log("handle click" + titleLogButton)
    )

    return (
        <button onClick={() => (handleClickButton(text))}>{text}</button>
    )

};

const WelcomeText = ({ user }) => (user ? <h3> Online</h3> : <h3>Offline</h3>);

const ItemFruta = (props) => (<li>{props.frutica}</li>);



const App = () => {

    const centrarTexto = "text-center"
    const valoresDescripciones = {
        descripcion1: "Imagen de alta calidad",
        descripcion2: "Imagen Open Source"
    }
    const tituloH1 = "Mi Titulo H1 de pagina"
    const extraccion = tituloH1
    const user = true
    const frutas = ["😁", "🐱‍🏍", "🐱‍🚀"]


    return (
        <>
            <h1 className={centrarTexto}>{extraccion}</h1>
            <img src={imgUno} alt={valoresDescripciones.descripcion1} />
            <MyButton text="Boton de pagina 1"></MyButton>
            <MyButton text="Boton de pagina 2"></MyButton>
            <WelcomeText user={user}></WelcomeText>
            <ul>
                {
                    frutas.map((frut, index) => (
                        <ItemFruta key={index} frutica={frut}></ItemFruta>
                    ))
                }
            </ul>

        </>

    )

};

export default App;