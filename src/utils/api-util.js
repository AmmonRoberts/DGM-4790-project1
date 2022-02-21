export async function getCardsByName(cardName) {
  const response = await fetch(
    `https://api.magicthegathering.io/v1/cards?name=${cardName}`,
  )
  return await response.json()
}

export async function getCardById(cardId) {
  const response = await fetch(`https://api.magicthegathering.io/v1/cards?id=${cardId}`)
  return await response.json()
}