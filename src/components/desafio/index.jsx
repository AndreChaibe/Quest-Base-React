import "./index.css";

export const Desafio = ({ children, tipoTexto, corTexto }) => {
    return (<section className="desafio" style={{ textTransform: tipoTexto, color: corTexto }}>
        {children}
    </section>
    )
}