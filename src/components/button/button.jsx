import "./button.css";

export const Button = ({label}) => {
   return <button onClick={() => { alert(`A label desse botão é ${label}`)}}>{label}</button>
}