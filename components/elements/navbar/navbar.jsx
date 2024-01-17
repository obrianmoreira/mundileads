'use client'
import { Wall, Frame, Item } from "@/components/layout/layout"
import Style from '../navbar/Navbar.module.css';
import { Button } from "../button/button";
import { H3 } from "../text/text";
import {GrMenu} from 'react-icons/gr'
import { useState } from "react";
import Image from "next/image";
import logo from './images/logo.png'

export const ClassicNavbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    return (

        <>
        
            <Wall style={Style.classicNavbar}>
                <Frame style={Style.frame}>
                    <Item style={Style.logoItem}>
                        <Frame style={Style.logoFrame}>
                            <Image
                                width={40}
                                height={40}
                                src={logo}
                                alt="logo"
                                className={Style.logoImg}
                            />
                            <H3 text="wthree" style={Style.logo}/>
                        </Frame>
                    </Item>
                    <Frame style={Style.innerFrame}>
                        <Item>
                            <Button href="#hero" text="Home" style={Style.button}/>
                        </Item>
                        <Item>
                            <Button href="#services" text="Services" style={Style.button}/>
                        </Item>
                        <Item>
                            <Button href="#benefits" text="Benefits" style={Style.button}/>
                        </Item>
                    </Frame>
                    <Frame style={Style.mobileFrame}>
                        <Item>
                            <Button text={<GrMenu/>} style={Style.button} buttonClick={(e) => setOpenMenu(!openMenu)}/>
                        </Item>
                    </Frame>
                </Frame>
                { openMenu ? 

                    <>

                        
                        <Frame style={Style.innerMobileFrame}>
                            <Item>
                                <Button href="#hero" text="Home" buttonClick={(e) => setOpenMenu(!openMenu)} style={Style.buttonInnerMobileFrame}/>
                            </Item>
                            <Item>
                                <Button href="#services" text="Services" buttonClick={(e) => setOpenMenu(!openMenu)} style={Style.buttonInnerMobileFrame}/>
                            </Item>
                            <Item>
                                <Button href="#benefits" text="Benefits" buttonClick={(e) => setOpenMenu(!openMenu)} style={Style.buttonInnerMobileFrame}/>
                            </Item>
                        </Frame>
                        

                    </>

                    : (<></> )

                }
            </Wall>
        
        </>

    )

}