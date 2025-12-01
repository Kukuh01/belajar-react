
function Button(props) {

    const { text, variant, onClick= () => {}, type = "button"} = props;

    return (
    <button
      className={`h-10 px-6 font-semibold rounded-md text-white ${variant}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
    );
}

export default Button;