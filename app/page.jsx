'use client'
import Field from '@/components/elements/form/field/field';
import Style from './page.module.css'
import { Frame, Item, Wall } from '@/components/layout/layout'
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/elements/button/button';
import logoMundi from '../public/mundi.png';

export default function Home() {
  
  const [name, setName] = useState('');
  const [userName, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [birth, setBirth] = useState('');

  async function postNewMundiUser(name, userName, phone, birth){
    try {
        const res = await fetch('http://localhost:3000/api/mundi', {
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
        alert('Vc se cadastrou corretamente!')
    } catch(error) {
        console.log('Error')
    }
  }

  const handleSubmit = () => {
      postNewMundiUser(name, userName, phone, birth);
  }

  return (
    <>

      <Wall style={Style.wall}>
          <Frame>
              <Item>
                  <Image src={logoMundi} width={280} alt='logo mundi'/>
                  <h1>Cadastro Mundi</h1>
                  <p>Explore os sabores do Mundi Café e seja recompensado! Preencha o nosso formulário de registo para receber um presente exclusivo da nossa equipa.</p>
              </Item>
              <br />
              <Item>
                  <Field type="text" label="Qual seu nome?" placeholder="Joao" onChange={(e) => setName(e.target.value)}/>
                  <Field type="text" label="Qual seu apelido?" placeholder="Moreira" onChange={(e) => setUsername(e.target.value)}/>
                  <Field type="text" label="Qual seu telemovel?" placeholder="(+351) 0000-0000" onChange={(e) => setPhone(e.target.value)}/>
                  <Field type="text" label="Qual sua data de nascimento?" placeholder="14/03/1996" onChange={(e) => setBirth(e.target.value)}/>
                  <Button buttonText="Cadastrar" style={Style.button} buttonClick={handleSubmit}/>
              </Item>
          </Frame>
      </Wall>
    
    </> 
  )
}
