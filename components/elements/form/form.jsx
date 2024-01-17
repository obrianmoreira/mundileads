'use client'
import { useState } from "react";
import { Button } from "../../elements/button/button";
import { H1, H4, Parag } from "../../elements/text/text";
import { Card, Frame, Item } from "../../layout/layout";
import { updateServiceVisibility } from "@/redux/action";
import Style from './Form.module.css';
import Field from "./field/field";

const Form = (props) => {

    let labelState = props.labelState;

    const labelVisibility = {
        display: `${labelState}`,
    }

    return (

        <>

            <Card style={Style.card} css={props.css}>
                <H4 text={props.title}/>
                <Parag text={props.description} />
                <Item style={props.item}>
                    <Field css={labelVisibility} label={props.firstLabel} placeholder={props.firstField}/>
                    <Field css={labelVisibility} label={props.secondLabel} placeholder={props.secondField}/>
                    <Field css={labelVisibility} label={props.thirdLabel} placeholder={props.thirdField}/>
                    <Field css={labelVisibility} label={props.fourthLabel} placeholder={props.fourthField}/>
                    <Button text={props.button} style={Style.button}/>
                </Item>
            </Card>

        </>

    );

};



export const PriceCalculator = (props) => {

    // Deals with the name of the lead
    const [nameLead, setNameLead] = useState('');

    // Deals with the name of the lead
    const [surnameLead, setsurnameLead] = useState('');

    // Deals with the totalPrice area of the card
    const [totalPrice, setTotalPrice] = useState(0);

    // Deals with the totalDiscount area of the card
    const [totalDiscount, setTotalDiscount] = useState('€' + `${0}` + ',00 de Desconto')

    // Deals with the type of service for each class
    const [typeOption, setTypeOption] = useState('Ex: Limpeza Profunda')

    const [typePrice, setTypePrice] = useState();

    // Deals with the amount of hours for each class
    const [roomOption, setRoomOption] = useState('Ex: T4')

    // Deals with the open and close of the dropdown  type menu
    const [openTypeList, setOpenTypeList] = useState(false);

    // Deals with the open and close of the dropdown  number of rooms menu
    const [openRoomsList, setOpenRoomsList] = useState(false);

    // handleOpenHourList function: open or closes the dropdown menu
    const handleOpenTypeList = () => {

        setOpenTypeList(!openTypeList)

    }

    // handleOpenHourList function: open or closes the dropdown menu
    const handleRoomList = () => {

        setOpenRoomsList(!openRoomsList)

    }

    //const dispatch = useDispatch();
    //const visibilityOption = useSelector(state => state.serviceVisibility.visibility);
    //const cardServices = useSelector(state => state.cardReducer.name);
    //const cardPrice = useSelector(state => state.cardReducer.price);

    const handleList = (visibilityOption) => {

        setOpenTypeList(!openTypeList);
        dispatch(updateServiceVisibility(!visibilityOption));
        
    }

    // handleHour function: change the state of the input with the current hour chosen and closes the dropdown menu
    const handleType = (type, price) => {

        setTypeOption(type);
        setTypePrice(price)
        handleOpenTypeList(!openTypeList);
    }

    // handleHour function: change the state of the input with the current hour chosen and closes the dropdown menu
    const handleRoom = (room) => {

        setRoomOption(room);
        setOpenRoomsList(!openRoomsList);

    }

    // handleMath function: handles with the math of the card to give the price of the personalized plan
    const handleMath = (price) => {

        let hourPrice = price;

        let hours = roomOption * 2; //parseInt(typeOption)
        
        //let days =  // parseInt(daysOptions)

        let math = hourPrice * hours;
        
        if (math === 132){
            let discount = ((math*10)/100)
            setNameLead()
            setTotalDiscount('€' + `${discount}` + ' de Desconto');
            setTotalPrice(math - discount);
        } else if (math === 88) {
            let discount = ((math*7)/100);
            setTotalDiscount('€' + `${discount}` + ' de Desconto');
            setTotalPrice(math - discount);
        } else {
            setTotalDiscount('Sem Desconto')
            setTotalPrice(math)
        }

    }

    // WhatsApp number to send the personalized plan to our sales team
    const whatsAppNumber = '+31687721270'

    // WhatsApp text to send the personalized plan to our sales team undertands the sale oportunity
    const whatsAppText = `Olá, sou ${nameLead} ${surnameLead}. Gostaria de confirmar o horário das aulas e meu plano personalizado de: daysOptions de aulas na semana com duração de ${typeOption} cada aula pelo preço mensal de €${totalPrice},00 e ${totalDiscount}. `;

    const labelState = {
        display: `${props.labelState}`,
    }

    return (

        <Card>
            <H1 text={`€ ${totalPrice}`}/>
            <Parag text={totalDiscount}/>
            <Frame style={Style.frame}>
                <Field label="Nome" htmlFor="nome" id="nome" placeholder={'Ex: Joao'} onChange={(e) => setNameLead(e.target.value)}/>
                <Field label="Sobrenome" htmlFor="secondName" id="sobrenome" placeholder={'Ex: Manuel'} onChange={(e) => setsurnameLead(e.target.value)}/>
            </Frame>
            <Frame>
                { visibilityOption ? 
                    <>
                    
                        <Item>
                            <Frame style={Style.frame}>
                                <Field label="Tipo de Serviço" id="tipo" placeholder={typeOption} onClick={handleOpenTypeList} input={Style.input}/>
                                <Field label="Tipo de Serviço" id="tipo" placeholder={`Número de Quartos ${roomOption}`} onClick={handleRoomList}/>
                            </Frame>

                            { openTypeList ? 

                                <Item>

                                    {serviceTypeArray.serviceType.map((serviceType) => {

                                        return (
                                            <li key={serviceType.id} className='text-black hover:bg-blue-400 border-t-2 text-left pl-4' onClick={() => handleType(serviceType.name, serviceType.price)}>{serviceType.name}</li>
                                        )

                                    })}
                                    
                                </Item>
                
                            : 
                                (
                                    
                                    <>

                                    </>

                                )
                            
                            }

                            { openRoomsList ? 

                                <Item>

                                    {serviceTypeArray.roomAmount.map((room) => {

                                        return (
                                            <li key={room.id} className='text-black hover:bg-blue-400 border-t-2 text-left pl-4' onClick={() => handleRoom(room.room)}>{room.room}</li>
                                        )

                                    })}
                                    
                                </Item>
                
                            : 
                                (
                                    
                                    <>

                                    </>

                                )
                            
                            }

                            <Frame style={Style.frame}>
                                <Button text="Calcular Plano" buttonClick={() => handleMath(typePrice)} style={Style.button}/>
                                <Button text="Gerar Proposta" disabled={totalPrice === 0} href={`https://wa.me/${whatsAppNumber}?text=${whatsAppText}`} style={Style.button}/>
                            </Frame>

                        </Item> 
                    
                    </>     
                : 
                    (
                        
                        <>
                            <Item>

                                <Frame style={Style.frame}>
                                    <Field label="Tipo de Serviço" id="tipo" placeholder={cardServices} onClick={() => handleList(visibilityOption)}/>
                                    <Field label="Tipo de Serviço" id="tipo" placeholder={`Número de Quartos ${roomOption}`} onClick={handleRoomList}/>
                                </Frame>
                                { openRoomsList ? 

                                    <Item>

                                        {serviceTypeArray.roomAmount.map((room) => {

                                            return (
                                                <li key={room.id} className='text-black hover:bg-blue-400 border-t-2 text-left pl-4' onClick={() => handleRoom(room.room)}>{room.room}</li>
                                            )

                                        })}
                                        
                                    </Item>
                    
                                : 
                                    (
                                        
                                        <>

                                        </>

                                    )
                                
                                }
                                
                                <Frame style={Style.frame}>
                                    <Button text="Calcular Plano" buttonClick={() => handleMath(cardPrice)} style={Style.button}/>
                                    <a href={`https://wa.me/${whatsAppNumber}?text=${whatsAppText}`}><Button text="Gerar Proposta" disabled={totalPrice === 0} style={Style.buttonTwo}/></a>
                                </Frame>
                            </Item>
                        </>

                    )
                
                }
            </Frame>
        </Card>

    );   

};

export default Form;