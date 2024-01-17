import Style from './Layout.module.css';

export const Wall = ({children, style, css}) => {

    return (

        <>
            <div id={style} className={Style.wall} style={css}>
                {children}
            </div>
        </>

    )

}

export const Frame = ({children, style, css}) => {

    return (

        <>
            <div id={style} className={Style.frame} style={css}>
                {children}
            </div>
        </>

    )

}

export const Item = ({children, style, css, onclick}) => {

    return (

        <>
        
            <div id={style} className={Style.item} style={css} onClick={onclick}>
                {children}
            </div>
        
        </>

    )

}

export const Card = ({children, style, css}) => {

    return (

        <>

            <div id={style} className={Style.card} style={css}>
                {children}
            </div>

        </> 

    )

}

export const Hero = ({style, children, css}, props) => {

    return (

        <>
        
                <div id={style} className={Style.hero} style={css}>
                    {children}
                </div>

                
        
        </>

    )

}