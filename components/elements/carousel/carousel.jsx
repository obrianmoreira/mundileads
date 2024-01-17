'use client'
import { Item, Frame } from "@/components/layout/layout"
import { useState } from "react";
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs';
import Style from './Carousel.module.css'

export const Carousel = (props) => {

    return (

        <>
        
            <Item>

                { props.firstImage ? 

                    <Item>
                        { props.firstResultImage ? 

                            <div id={Style.imgFrame} className={props.beforeFirstImage}>
                                <Frame style={Style.iconFrame}>
                                    <BsFillArrowLeftCircleFill className={Style.iconButton} onClick={props.handleResultBtn}/>
                                    <BsFillArrowRightCircleFill className={Style.iconButton} onClick={props.handleResultBtn}/>
                                </Frame>
                            </div>

                            : 
                            (

                                <div id={Style.imgFrame} className={props.afterFirstImage}>
                                    <Frame style={Style.iconFrame}>
                                        <BsFillArrowLeftCircleFill className={Style.iconButton} onClick={props.handleResultBtn}/>
                                        <BsFillArrowRightCircleFill className={Style.iconButton} onClick={props.handleResultBtn}/>
                                    </Frame>
                                </div>
                            )

                        }
                    </Item>

                    : (<></>)

                }

                { props.secondImage ? 

                    <Item>
                        { props.secondResultImage ? 

                            <div id={Style.imgFrame} className={props.beforeSecondImage}>
                                <Frame style={Style.iconFrame}>
                                    <BsFillArrowLeftCircleFill className={Style.iconButton} onClick={props.handleSecondResultBtn}/>
                                    <BsFillArrowRightCircleFill className={Style.iconButton} onClick={props.handleSecondResultBtn}/>
                                </Frame>
                            </div>

                            : 
                            (
                                <div id={Style.imgFrame} className={props.afterSecondImage}>
                                    <Frame style={Style.iconFrame}>
                                        <BsFillArrowLeftCircleFill className={Style.iconButton} onClick={props.handleSecondResultBtn}/>
                                        <BsFillArrowRightCircleFill className={Style.iconButton} onClick={props.handleSecondResultBtn}/>
                                    </Frame>
                                </div>

                            )

                        }
                    </Item>

                    : (<></>)

                }

                { props.thirdImage ? 

                    <Item>

                        { props.thridResultImage ? 
                            
                            <div id={Style.imgFrame} className={props.beforeThirdImage}>
                                <Frame style={Style.iconFrame}>
                                    <BsFillArrowLeftCircleFill className={Style.iconButton} onClick={props.handleThirdResultBtn}/>
                                    <BsFillArrowRightCircleFill className={Style.iconButton} onClick={props.handleThirdResultBtn}/>
                                </Frame>
                            </div>
                            

                            : 
                            (
                                
                                <div id={Style.imgFrame} className={props.afterThirdImage}>
                                    <Frame style={Style.iconFrame}>
                                        <BsFillArrowLeftCircleFill className={Style.iconButton} onClick={props.handleThirdResultBtn}/>
                                        <BsFillArrowRightCircleFill className={Style.iconButton} onClick={props.handleThirdResultBtn}/>
                                    </Frame>
                                </div>

                            )

                        }
                    </Item>

                    : (<></>)

                }
            </Item>
        
        </>


    )

}