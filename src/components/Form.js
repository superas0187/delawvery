import React,{useEffect} from 'react'
import {v4 as uuidv4} from "uuid"
import { TextField, Typography, Button, InputLabel, Grid } from '@material-ui/core';

const Form = ({userName, setUserName, cardsList, setCardsList, editCard, setEditCard, lestName, setLestName, date, setDate }) => {

    const updateCard = ( userName, lestName, date, id, completed) => {
        const newCard = cardsList.map((card) => 
        card.id === id ? { userName, lestName, date, id, completed } : card
        );
        setCardsList(newCard)
        setEditCard("")
    }

    useEffect(() => {
        if(editCard) {
            setUserName(editCard.userName)
            setLestName(editCard.lestName)
            setDate(editCard.date)
        } else {
            setUserName("")
            setLestName("")
            setDate("")
           
        }
    }, [setUserName, editCard, setLestName, setDate])

    const onInputChange = (e) => {
        const { name, value } = e.target
        
        if(name === "userName") {
            setUserName(value)
        }
        if(name === "lestName") {
            setLestName(value)
        }
        if(name === "date") {
            setDate(value)
        }        
            
        
    };

    const onFormSubmit = (e) => {
        e.preventDefault()
        if(!editCard) {
            setCardsList([ ...cardsList, {id: uuidv4(), name: userName,lestName,date,  completed: false}])
            setUserName("")
            setLestName("")
            setDate("") 
        } else {
            updateCard(userName,lestName,date,  editCard.id, editCard.completed)
        }
        
    }

    return (
        <Grid container component="form" onSubmit={onFormSubmit} spacing={2} columns={12} justifyContent="flex-end"   >
            <Grid item xs={12}>
                <Typography 
                    align="right"  
                    variant="h5">
                    <b>{editCard ? "הזמנה: 1 " : "הזמנה חדשה"}</b>
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <InputLabel align="right" >שם פרטי</InputLabel>
                <TextField name="userName" type="text"  variant="outlined" fullWidth value={userName} onChange={onInputChange} required />
            </Grid>
            <Grid item xs={6}>
                <InputLabel align="right">שם משפחה</InputLabel>
                <TextField name="lestName" type="text"  variant="outlined" fullWidth value={lestName} onChange={onInputChange} required/>
            </Grid>
            <Grid item xs={6}   >
                <InputLabel align="right">תאריך</InputLabel>
                <TextField  name="date" type="date"  variant="outlined" fullWidth  value={date} onChange={onInputChange} required/>
            </Grid>
            <Grid container justifyContent="flex-end"  item xs={7}   >
                <button className="button" variant="contained" type="submit" color="default" fullWidth  >{editCard ? "עדכון" : "הוספה"}</button>
            </Grid>
        </Grid>
    )
}

export default Form
