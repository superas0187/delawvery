import React from 'react';
import { Typography, IconButton, Grid, Card } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';


const Cards = ({ cardsList, setCardsList, setEditCard, editCard }) => {

    const handleEdit = ({id}) => {
        const findCard = cardsList.find((card) => card.id === id)
        setEditCard(findCard)
    }

    const handleDelete = ({id}) => {
        setCardsList(cardsList.filter((card) => card.id !== id))
    }

    return (
        <div>
            <Grid xs={12} >
                <Grid item xs={12} >
                    <Typography align="center" variant="h5"><b>רשימת הזמנות</b></Typography>
                    <Typography align="center" name="count" variant="body2"><b>מספר הזמנות:&nbsp;  3  </b></Typography>
                </Grid>
                <Grid container  component="div" spacing={2}   >
                    {cardsList.map((card) => (
                        <Grid item xs={12} component="div" key={card.id}  >
                            <Card variant="outlined" className="paper"    >
                                <Grid xs={12}> 
                                    <Grid item align="right" className="op" justifyContent="flex-end">
                                        <Grid container align="right" justifyContent="flex-end"  >
                                            <Typography fullWidth>{card.userName}&nbsp;</Typography>
                                            <Typography fullWidth>{card.lestName}&nbsp;</Typography>
                                            <Typography ><b>:פרטים</b></Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography align="right" component="div" variant="body1"  > {card.date}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item  align="right" justifyContent="flex-end" container >
                                    <Typography className="op1" align="right" component="div" variant="body1"  ><b>הזמנה&nbsp;1</b></Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container  >
                                        <IconButton onClick={() => handleDelete(card)} aria-label="delete" size="small">
                                            <DeleteIcon  fontSize="inherit" />
                                        </IconButton>
                                        {!editCard && (
                                            <IconButton onClick={() => handleEdit(card)} aria-label="edit" size="small">
                                                <Edit  fontSize="inherit" />
                                            </IconButton>
                                        )}
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                        ))}
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards

                                   