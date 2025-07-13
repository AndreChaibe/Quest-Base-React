import { Desafio } from "../desafio/index.jsx"
import { AlertButton } from "../Alertbutton/index.jsx"

const frases = [{ id: 1, texto: "Erros ensinam mais que acertos." },
{ id: 2, texto: "Pensar antes de codar é essencial." },
{ id: 3, texto: "Cada bug conta uma história." }]

export const Desafios = () => {

    return (
        <>
            <Desafio tipoTexto="uppercase" corTexto="#dd61f6">
                <h3>Desafio 1 - <br></br> Exibição de texto com estilização:</h3>
                {frases.map(frase => <p key={frase.id}>{frase.texto}</p>)}
            </Desafio>

            <Desafio tipoTexto="uppercase">
                <h3>Desafio 2 - <br></br>  Mostrar mensagem com a label do botão:</h3>
                <AlertButton label="Aviso" />
            </Desafio>
        </>
    )
}
