'use client'
import { useCallback, useEffect, useState } from "react";
const { default: Table } = require("@/components/elements/table/table")
const { Wall, Frame } = require("@/components/layout/layout")
import Style from './Page.module.css';

const MundiLead = () => {

    const [mundiLead, setMundiLead] = useState([]);


    const getNewMundiUser = useCallback(async () => {
        try {
            const res = await fetch('http://localhost:3000/api/mundi', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const result = await res.json();
            setMundiLead(result);
            //getTasks();
            } catch (error) {
                console.log(error)
            }
        },[]  
    ) 
    
    useEffect(() => {
        getNewMundiUser();
    },[getNewMundiUser])

    return (
        <>
        
            <Wall>
                <h1>Mundi Food Cadastros Para Brenda</h1>
                <br />
                <Frame>
                    <table id={Style.table}>
                        <thead>
                            <tr>  
                                <th className={Style.collum}><p>Nome</p></th>
                                <th className={Style.collum}><p>Apelido</p></th>
                                <th className={Style.collum}><p>Telemovel</p></th>
                                <th className={Style.collum}><p>Nascimento</p></th>
                            </tr>
                        </thead>
                            <tbody>
                                {mundiLead.map((lead) => {
                                    return (
                                        <> 
                                                <tr key={lead.id}>
                                                    <Table cell={lead.name}/>
                                                    <Table cell={lead.userName}/>
                                                    <Table cell={lead.phone}/>
                                                    <Table cell={lead.birth}/>
                                                </tr>
                                                
                                        </>
                                    )
                                })}
                            </tbody>
                    </table>
                </Frame>     
            </Wall>
        
        </>
    )
}

export default MundiLead;