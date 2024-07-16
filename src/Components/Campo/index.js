import "./Campo.css"

const Campo = ( { titulo, placeholder, value, onChange } ) => {
    return (
        <div className="campo">
            <label>{ titulo }</label>
            <input 
                type="text" 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} 
            />
        </div>
    )
}

export default Campo;
