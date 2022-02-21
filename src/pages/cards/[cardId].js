// import Image from "next/image"
// import { useRouter } from "next/router"
// import { getCardById } from "../../utils/api-util"

const CardId = (props) => {

    //     const router = useRouter()

    //     const { card } = props

    //     console.log(card)

    return (
        // <>
        //     <h1>{card.name}</h1>
        //     <Image alt="" src={card.imageUrl} />
        // </>
        <p>placeholder</p>
    )
}

// export async function getStaticProps(params) {
//     let card = {}
//     try {
//         let response = await getCardById(params.params.cardId)
//         card = response.cards[0]
//         // console.log(cardDetails)
//     } catch (err) {
//         console.log("Failed to retrieve card by id", err)
//     }
//     // console.log("butt", cardDetails)
//     return {
//         props: {
//             card
//         },
//     }
// }

// export const getStaticPaths = async () => {
//     return { paths: [], fallback: true };
//     };

// function getManaLogo(color) {
//     switch (color) {
//         case 'W':
//             return "public/W.png"
//         case 'B':
//             return "public/B.png"
//         case 'G':
//             return "public/G.png"
//         case 'U':
//             return "public/U.png"
//         case 'R':
//             return "public/R.png"
//         case 'C':
//             return "public/C.png"

//     }

// }

export default CardId;