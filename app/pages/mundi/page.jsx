/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useCallback, useEffect, useState } from "react";
const { default: Table } = require("@/components/elements/table/table")
const { Wall, Frame, Item } = require("@/components/layout/layout")
import Style from './Page.module.css';
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { MdRadioButtonChecked } from "react-icons/md";
import { Button } from "@/components/elements/button/button";
import { CiEdit } from "react-icons/ci";

const MundiLead = () => {

    const [mundiLead, setMundiLead] = useState([]);
    const [openMenu, setOpenMenu] = useState(false);
    const [selectAll, setSelectAll] = useState(false);
    const [checked, setChecked] = useState([]);
    const [allIds, setAllIds] = useState([]);

    const getNewMundiLead = useCallback( async () => {
        try {
            const res = await fetch('/api/mundi', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const result = await res.json();
            setMundiLead(result);
            const taskId = mundiLead.map(lead => lead.id);
            setAllIds(taskId);
            } catch (error) {
                console.log(error)
        }
    });

    useEffect(() => {
        getNewMundiLead();
    },[getNewMundiLead])

    async function deleteMundiLead(mundiLeadsId) {
        try {
            const res = await fetch('/api/mundi', {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    mundiLeadsId,
                })
            })
        } catch (error) {
            console.log(error);
        }
    }

    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        if(!selectAll) {
            setChecked(allIds);
        } else {
            setChecked([]);
        }
    }
    
    const handleSelection = (taskId) => {
        if(checked.includes(taskId)){
            setChecked(checked.filter(id => id !== taskId));
        } else {
            setChecked([...checked, taskId]);
        }
    }

    const handleDeleteMundiLeads = (mundiLeadsId) => {
        deleteMundiLead(mundiLeadsId);
    }

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
                                <th className={Style.collum}><HiOutlineAdjustmentsHorizontal size={30} onClick={(e) => setOpenMenu(!openMenu)}/></th>     
                                {openMenu ? (<>
                                    <button id={Style.deleteButton} onClick={() => handleDeleteMundiLeads(checked)}>Deletar</button>
                                    <button id={Style.deleteButton} onClick={handleSelectAll}>Select All</button> 
                                </>) : (<></>)}
                            </tr>
                        </thead>
                            <tbody>
                                {mundiLead.map((lead) => {
                                    return (
                                        <> 
                                                <tr className={Style.leadCell} key={lead.id}>
                                                    <Table style={Style.tableStyle} cell={lead.name}/>
                                                    <Table style={Style.tableStyle} cell={lead.userName}/>
                                                    <Table style={Style.tableStyle} cell={lead.phone}/>
                                                    <Table style={Style.tableStyle} cell={lead.birth}/>
                                                    {openMenu
                                                        ? (<><td>{checked.includes(lead.id) ? (<>
                                                            {<MdRadioButtonChecked size={25} onClick={() => handleSelection(lead.id)} className={Style.iconItem}/>}</>)  : (<><MdRadioButtonUnchecked size={25} onClick={() => handleSelection(lead.id)} className={Style.iconItem}/></>)}
                                                            <CiEdit size={25}/>
                                                        </td></>):(<></>)
                                                    }
                                                    
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