import imgUno from "./assets/images/imagenPequeña.jpg";
import MyButton from "./components/MyButton";
import WelcomeText from "./components/WelcomeText";
import ListProductos from "./components/productos/ListProductos";
import ButtonState from "./components/ButtonState";

const App = () => {

    const centrarTexto = "text-center"
    const valoresDescripciones = {
        descripcion1: "Imagen de alta calidad",
        descripcion2: "Imagen Open Source"
    }
    const tituloH1 = "Mi Titulo H1 de pagina"
    const extraccion = tituloH1
    const user = true
    const frutas = ["😁", "🐱‍🏍", "🐱‍🚀","👌"]
    const persons = ["🤷‍♀️", "🙌", "😆", "😍"]


    return (
        <>
            <ButtonState></ButtonState>
            <h1 className={centrarTexto}>{extraccion}</h1>
            <img src={imgUno} alt={valoresDescripciones.descripcion1} />
            <MyButton text="Boton de pagina 1"></MyButton>
            <MyButton text="Boton de pagina 2"></MyButton>
            <WelcomeText user={user}></WelcomeText>
            <ListProductos producto={frutas}></ListProductos>
            <ListProductos producto={persons}></ListProductos>

        </>

    )

};

export default App;