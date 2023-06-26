const Button = (props) => {
    return (
      <button
        type="button"
        className={`px-5 py-2.5
          ${props.className}
          rounded`}
      >
        {props.children}
      </button>
    );
  };
  export default Button;