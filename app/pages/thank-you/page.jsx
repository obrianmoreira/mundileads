'use client'
import { H2, Parag } from '@/components/elements/text/text';
import Style from './Page.module.css';
import { Frame, Item, Wall } from '@/components/layout/layout';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { useState } from 'react';
import Image from 'next/image';
import logoMundi from '../thank-you/mundi.png';

const Page = () => {

    const [instaTracker, setInstaTracker] = useState(0);
    const [faceTracker, setFaceTracker] = useState(0);

    return (
    
        <>

            <Wall style={Style.wall}>
                <Item>
                    <div><Image src={logoMundi} className={Style.logoImage} alt='logo mundi'/></div>
                    <H2 text="Obrigado pela subscrição em nossa página"/>
                    <Parag style={Style.parag} text="Caso não tenha ido até nossas redes sociais, não percas tempo."/>
                    <Parag style={Style.parag} text="Abaixo você encontra os botões para ir até nosso Instagram e Facebook!"/>
                </Item>
                <Frame style={Style.socialMediaItem}>
                    <a onClick={() => setInstaTracker(instaTracker + 1)} href='https://www.instagram.com/mundi.cafe?next=%2F&hl=en' target='_blank'> 
                        <Frame style={Style.instagramButton}>
                            <FaInstagram size={25}/>
                            <p className={Style.socialMediaItemText}>Instagram</p>
                        </Frame>
                    </a>

                    <a onClick={() => setFaceTracker(faceTracker + 1)} href='https://www.facebook.com/mundifoodcafe/' target='_blank'> 
                        <Frame style={Style.facebookButton}>
                            <div><FaFacebookSquare size={25}/></div>
                            <p className={Style.socialMediaItemText}>Facebook</p>
                        </Frame>
                    </a>
                </Frame>
            </Wall>

        </>

    )
}

export default Page;