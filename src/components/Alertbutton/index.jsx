import "./index.css";

export const AlertButton = ({label}) => {
   return <button onClick={() => { alert(`A label desse botão é ${label}`)}}>{label}</button>
}