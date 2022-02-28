import * as React from 'react'
import Amplify, { DataStore } from "aws-amplify"
import cardBackPlaceholder from '../../../public/card_back.jpg'
import useSWR from "swr"
import { TradingCard } from '../../models'
import { Box, Card, CardMedia, CardContent, Typography, CardActions, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import Image from 'next/image'

const MyCards = (props) => {

    const [cardList, setCardList] = React.useState([])

    const handleDeleteCard = async (card) => {
        try {
            const cardToDelete = await DataStore.query(TradingCard, card.id)

            console.log(cardToDelete)
            await DataStore.delete(cardToDelete)
        } catch (err) {
            console.log("Save delete card error: ", err)
        }
    }

    const fetcher = async () => {
        try {
            let tempList = await DataStore.query(TradingCard)
            setCardList(tempList)
        } catch (err) {
            console.log('Retrieve card list error', err)
        }
        return cardList
    }

    const { data, error } = useSWR('/movies', fetcher, {
        refreshInterval: 500
    })

    if (error) return <div>Failed to load list of cards.</div>
    if (!data) return <div>Loading...</div>


    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {cardList && cardList.map((card) => (
                <Card key={card.id} sx={{ maxWidth: 300, m: 1 }}>
                    {<CardMedia component="img" image={card.Poster} title={card.Title} />}
                    <CardContent>
                        <Box>
                            <Typography variant="subtitle1" color="textSecondary">
                                {card.name}
                            </Typography>
                            <Typography variant="subtitle2" color="textSecondary">
                                {card.setName} ({card.set})
                            </Typography>
                            <Image
                                src={card.imageUrl || cardBackPlaceholder}
                                placeholder={cardBackPlaceholder}
                                width={223}
                                height={310}
                                alt={card.name} />
                        </Box>
                    </CardContent>
                    <CardActions>
                        <IconButton aria-label="Delete card from collection"
                            onClick={() => { handleDeleteCard(card) }}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            ))}
        </Box>)


}

export default MyCards;