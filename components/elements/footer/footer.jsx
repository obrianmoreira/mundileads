import { Frame, Wall } from "@/components/layout/layout";
import { H4, Parag} from "../text/text";
import Style from './Footer.module.css';
import Image from "next/image";
import logo from '../../elements/navbar/images/logo.png'

const Footer = () => {

    return (

        <>
        
            <Wall style={Style.wall}>
                <Frame style={Style.frame}>
                    <H4 text="All rights reserved"/>
                    <Image
                        width={40}
                        height={40}
                        src={logo}
                        alt="logo"
                    />
                    <H4 text="wthree" style={Style.logo}/>
                </Frame>
                <Parag text="Website built by Brian Moreira"/>
            </Wall>

        </>

    )   

}

export default Footer;