
function Button(props) {
    return (
    <button className={`h-10 px-6 font-semibold rounded-md text-white ${props.variant}
    `} type='submit'>
      {props.text}
    </button>
    );
}

export default Button;