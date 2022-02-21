import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  Typography,
  CardActions,
  IconButton,
} from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'
import Image from 'next/image'
import cardBackPlaceholder from '../../public/card_back.jpg'
import { getCardsByName as getCardsByName } from '../utils/api-util'
import styles from "../styles/Cards.module.css";

const SearchResultsDialog = (props) => {
  const { open, cardList, onSaveCard, onClose } = props
  // console.log(props)

  if (cardList.length != 0) {
    //   console.log("poop")
    // console.log(cardList[0])
    // cardList.map((element) => {

    //   console.log(element)

    // })
  }
  return (
    <Dialog
      maxWidth={false}
      open={open}
      onClose={onClose}
    >
      <div className={styles.searchResultCards}>
        {
          cardList.map(card => {
            return (
              <Card key={card.id} sx={{ maxWidth: 300, m: 1 }}>
                {<CardMedia component="img" image={card.Poster} title={card.Title} />}
                <CardContent>
                  <Box>
                    <Typography variant="subtitle1" color="textSecondary">
                      {card.name}
                    </Typography>
                    <Image
                      src={card.imageUrl || cardBackPlaceholder}
                      placeholder={cardBackPlaceholder}
                      // layout={"fill"}
                      width={223}
                      height={310}
                      alt={card.name} />
                    {/* <Typography variant="subtitle1" color="textSecondary">
                    Mana Cost: {card.manaCost}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    Colors: {card.colors}
                  </Typography> */}
                  </Box>
                </CardContent>
                <CardActions>
                  <IconButton aria-label="Save to list" onClick={onSaveCard}>
                    <SaveIcon />
                  </IconButton>
                </CardActions>
              </Card>
            )
          })
        }
      </div>
    </Dialog >
  )
}


// export async function getStaticProps(props) {
//   console.log("context = ", props)
//   let cardList = {}
//   try {
//     let response = await getCardsByName(props.cardName)
//     cardList = response.cards
//     console.log(cardList)
//   } catch (err) {
//     console.log("Failed to retrieve card by id", err)
//   }
//   return {
//     props: {
//       cardList
//     },
//   }
// }

export default SearchResultsDialog