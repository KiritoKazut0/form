function Input ({name, title, type,  onChange, onBlur}){
    return (
        <div>
            <label htmlFor={name}> {title} </label>
            <input id={name} type={type} onChange={ onChange} onBlur={onBlur}/>

           

        </div>
    );
}

export default Input;