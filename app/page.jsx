'use client'
import Field from '@/components/elements/form/field/field';
import Style from './page.module.css'
import { Frame, Item, Wall } from '@/components/layout/layout'
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/elements/button/button';
import logoMundi from '../public/mundi.png';
import { H1, H3, H5, Parag } from '@/components/elements/text/text';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

export default function Home() {
  const [name, setName] = useState('');
  const [userName, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [birth, setBirth] = useState('');
  
  async function postNewMundiUser(name, userName, phone, birth){
    try {
        const res = await fetch('/api/mundi', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                leads: {
                    name,
                    userName,
                    phone,
                    birth,
                }
            })
        });
        const data = await res.json();
        console.log('deu certo');
        alert('Vc se cadastrou corretamente!');
    } catch(error) {
        console.log('Error')
    }
  }

  async function handleSubmit() {
        if(name == '' || userName == ''|| phone == '') {
            alert('O nome, apelido e telefone precisam ser preenchidos')
        } else {
            await postNewMundiUser(name, userName, phone, birth);
            location.reload();
        }
  }

  return (
    <>

      <Wall style={Style.wall}>
          <Frame style={Style.frame}>
                <Item style={Style.logoItem}>
                    <div><Image src={logoMundi} className={Style.logoImage} alt='logo mundi'/></div>
                    <Frame style={Style.instagramButton}>
                        <div><FaInstagram size={25}/></div>
                        <p className={Style.iconText}>Instagram</p>
                    </Frame>
                    <Frame style={Style.facebookButton}>
                        <div><FaFacebookSquare size={25}/></div>
                        <p className={Style.iconText}>Facebook</p>
                    </Frame>
                </Item>
                <Item style={Style.formItem}>
                    <H1 style={Style.h1Style} text="Cadastro Mundi"/>
                    <Parag text="Explore os sabores do Mundi Café e seja recompensado! Preencha o nosso formulário de registo para receber nossas ofertas exclusivas." style={Style.formParag}/>
                    <Field type="text" label="Qual seu nome?" placeholder="Joao" onChange={(e) => setName(e.target.value)}/>
                    <Field type="text" label="Qual seu apelido?" placeholder="Moreira" onChange={(e) => setUsername(e.target.value)}/>
                    <Field type="text" label="Qual seu telemovel?" placeholder="(+351) 0000-0000" onChange={(e) => setPhone(e.target.value)}/>
                    <Field type="text" label="Qual sua data de nascimento?" placeholder="14/03/1996" onChange={(e) => setBirth(e.target.value)}/>
                    <Button buttonText="Cadastrar" style={Style.button} buttonClick={handleSubmit}/>
                    <Parag style={Style.dataSecurityParag} text="Não se preocupe. Seus dados não serão compartilhados com ninguém"/>
                </Item>
          </Frame>
      </Wall>
    
    </> 
  )
}
