import React, {useState,useEffect } from "react"
import './App.css';
import Navbar from "./components/Navbar"
import Form from "./components/Form"
import Cards from "./components/Cards"
import {Divider} from '@material-ui/core';
import {Container, AppBar, Typography, Grow, Grid } from "@material-ui/core"


const App =  () => {

  const initialState = JSON.parse(localStorage.getItem('cardsList')) || [];
  const [userName, setUserName] = useState("")
  const [lestName, setLestName] = useState("")
  const [date, setDate] = useState("")
  const [cardsList, setCardsList] = useState(initialState)
  const [editCard, setEditCard] = useState(null)
  const [count, setCount] = useState(0) // todo count Dynamic

  useEffect(() => {
    localStorage.setItem("cardsList", JSON.stringify(cardsList));
  }, [cardsList])

  return (
    <Container maxidth="lg">
      <Navbar />
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" align="stretch" spacing={3} className="opp">
            <Grid item xs={12} sm={7} >
              <Form 
                userName={userName}
                setUserName={setUserName}
                lestName={lestName}
                setLestName={setLestName}
                cardsList={cardsList}
                setCardsList={setCardsList}
                date={date}
                setDate={setDate}
                editCard={editCard}
                setEditCard={setEditCard}
                
              />
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item xs={12} sm={4}>
              <Cards
                cardsList={cardsList}
                setCardsList={setCardsList} 
                date={date}
                setDate={setDate} 
                setEditCard={setEditCard}
                editCard={editCard}
                
              />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
