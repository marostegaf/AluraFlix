import "./Botao.css"

const Botao = ( { text, onClick } ) => {
    return (
        <button className="botao" onClick={ onClick }>{ text }</button>
    )
}

export default Botao;
