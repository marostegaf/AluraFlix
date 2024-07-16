import "./Titulo.css"

const Titulo = ( { titulo, corDeFundo } ) => {
    const estiloDeFundo = {
        backgroundColor: corDeFundo
    }
    
    return (
        <h1 className="titulo" style={ estiloDeFundo }>{ titulo }</h1>
    )
}

export default Titulo;