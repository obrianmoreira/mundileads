import Style from './Button.module.css';

export const Button = (props) => {

    return (

        <>
        
            <button id={props.style} className={Style.button} onClick={props.buttonClick} style={props.buttonStyle} disabled={props.disabled}>
                <a href={props.href}>{props.buttonText}</a>
            </button>
        
        </>

    )

}