import Style from './Text.module.css'

export const H1 = (props) => {

    return (

        <>

            <h1 id={props.style} className={Style.h1} style={props.css}>
                {props.text}
            </h1>

        </>

    )

}

export const H2 = (props) => {

    return (

        <>

            <h1 id={props.style} className={Style.h2} style={props.css}>
                {props.text}
            </h1>

        </>

    )

}

export const H3 = (props) => {

    return (

        <>

            <h1 id={props.style} className={Style.h3} style={props.css}>
                {props.text}
            </h1>

        </>

    )

}

export const H4 = (props) => {

    return (

        <>

            <h1 id={props.style} className={Style.h4} style={props.css}>
                {props.text}
            </h1>

        </>

    )

}

export const H5 = (props) => {

    return (

        <>

            <h1 id={props.style} className={Style.h5} style={props.css}>
                {props.text}
            </h1>

        </>

    )

}

export const Parag = (props) => {

    return (

        <>

            <h1 id={props.style} className={Style.parag} style={props.css}>
                {props.text}
            </h1>

        </>

    )

}

