/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useCallback, useEffect, useState } from "react";
const { default: Table } = require("@/components/elements/table/table")
const { Wall, Frame, Item } = require("@/components/layout/layout")
import Style from './Page.module.css';
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { MdRadioButtonChecked } from "react-icons/md";
import { VscChecklist } from "react-icons/vsc";
import { FaTrashAlt } from "react-icons/fa";
import { Button } from "@/components/elements/button/button";
import { CiEdit } from "react-icons/ci";
import Field from "@/components/elements/form/field/field";
import { H1 } from "@/components/elements/text/text";

const MundiLead = () => {

    const [mundiLead, setMundiLead] = useState([]);
    const [openMenu, setOpenMenu] = useState(false);
    const [selectAll, setSelectAll] = useState(false);
    const [checked, setChecked] = useState([]);
    const [allIds, setAllIds] = useState([]);
    const [openEdit, setOpenEdit] = useState(false);
    const [leadId, setLeadId] = useState([]);
    const [olderName, setOlderName] = useState('');
    const [olderUsername, setOlderUsername] = useState('');
    const [olderPhone, setOlderPhone] = useState('');
    const [olderBirth, setOlderBirth] = useState('');
    const [newName, setNewName] = useState(olderName);
    const [newUsername, setNewUsername] = useState(olderUsername);
    const [newPhone, setNewPhone] = useState(olderPhone);
    const [newBirth, setNewBirth] = useState(olderBirth);

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
            alert('Vc deletou com sucesso, espere mostar na tela!');
            setOpenEdit(!openEdit);
        } catch (error) {
            console.log(error);
        }
    }

    async function editMundiLead(leadId, newName, newUsername, newPhone, newBirth) {
        try {
            const res = await fetch('/api/mundi', {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    lead: {
                        leadId,
                        newName,
                        newUsername,
                        newPhone,
                        newBirth
                    }
                })
            })
            alert('Vc Atualizou com sucesso, espere mostar na tela!');
        } catch (error) {
            console.log(error)
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

    const handleOpenEdit = (leadId, leadName, leadUsername, leadPhone, leadBirth) => {
        setOpenEdit(!openEdit);
        setLeadId(leadId);
        setNewName(leadName);
        setNewUsername(leadUsername);
        setNewPhone(leadPhone);
        setNewBirth(leadBirth);
    }

    async function handleEdit() {
        await editMundiLead(leadId, newName, newUsername, newPhone, newBirth);
    }

    return (
        <>
        
            <Wall>
                <H1 text="Tabela de Controle de Novos Leads"/>
                <br />
                <Frame style={Style.frame}>
                <table id={Style.table}>
                        <thead id={Style.tHead}>
                            <tr>  
                                <th className={Style.collum}><p>Nome</p></th>
                                <th className={Style.collum}><p>Apelido</p></th>
                                <th className={Style.collum}><p>Telemovel</p></th>
                                <th className={Style.collum}><p>Nascimento</p></th>
                                <th className={Style.collum}><p>Clique no Instagram</p></th>
                                <th className={Style.collum}><p>Clique no Facebook</p></th>
                                <th className={Style.collum}>
                                    <Frame style={Style.frameTools}>
                                        <HiOutlineAdjustmentsHorizontal size={30} onClick={(e) => setOpenMenu(!openMenu)}/>
                                        {openMenu ? (<>
                                            <FaTrashAlt size={30} onClick={() => handleDeleteMundiLeads(checked)}/>
                                            <VscChecklist size={30} onClick={handleSelectAll}/>
                                        </>) : (<></>)}
                                    </Frame>
                                </th> 
                            </tr>
                        </thead>
                            <tbody id={Style.tBody}>
                                {mundiLead.map((lead) => {
                                    return (
                                        <> 
                                                <tr className={Style.leadCell} key={lead.id}>
                                                    <Table style={Style.tableStyle} cell={lead.name}/>
                                                    <Table style={Style.tableStyle} cell={lead.userName}/>
                                                    <Table style={Style.tableStyle} cell={lead.phone}/>
                                                    <Table style={Style.tableStyle} cell={lead.birth}/>
                                                    <Table style={Style.tableStyle} cell={lead.instaTracker}/>
                                                    <Table style={Style.tableStyle} cell={lead.faceTracker}/>
                                                    {openMenu
                                                        ? (<><td id={Style.frameIcons}>{checked.includes(lead.id) ? (<>
                                                            {<MdRadioButtonChecked size={25} onClick={() => handleSelection(lead.id)} className={Style.iconItem}/>}</>)  : (<><MdRadioButtonUnchecked size={25} onClick={() => handleSelection(lead.id)} className={Style.iconItem}/></>)}
                                                            <CiEdit onClick={() => handleOpenEdit(lead.id, lead.name, lead.userName, lead.phone, lead.birth)} size={25}/>
                                                        </td></>):(<></>)
                                                    }
                                                    
                                                </tr>
                                                
                                        </>
                                    )
                                })}
                            
                            </tbody>
                    </table>
                    
                </Frame>
                {openEdit ? (<>
                    <Frame>
                        <Field type="text" label="Novo Nome" placeholder={olderName} value={newName} onChange={(e) => setNewName(e.target.value)}/>
                        <Field type="text" label="Novo Apelido" placeholder={olderUsername} value={newUsername} onChange={(e) => setNewUsername(e.target.value)}/>
                        <Field type="text" label="Novo telemovel" placeholder={olderPhone} value={newPhone} onChange={(e) => setNewPhone(e.target.value)}/>
                        <Field type="text" label="Nova data de nascimento" placeholder={olderBirth} value={newBirth} onChange={(e) => setNewBirth(e.target.value)}/>
                        <Button buttonText="Cadastrar" style={Style.button} buttonClick={handleEdit}/> 
                    </Frame>   
                </>) : (<></>)}  
            </Wall>
        
        </>
    )
}

export default MundiLead;