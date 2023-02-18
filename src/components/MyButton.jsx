const MyButton = ({ text }) => {

    const handleClickButton = (titleLogButton) => (
        console.log("handle click" + titleLogButton)
    )

    return (
        <button onClick={() => (handleClickButton(text))}>{text}</button>
    )

};

export default MyButton;