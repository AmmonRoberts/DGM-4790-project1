export async function getCardsByName(cardName) {
  const response = await fetch(
    `https://api.magicthegathering.io/v1/cards?name=${cardName}`,
  )

  if (response.status == 200) {
    return await response.json();
  }
  else {
    return {
      status: response.status,
      message: response.message,
      cards: []
    }
  }
}

export async function getCardById(cardId) {
  const response = await fetch(`https://api.magicthegathering.io/v1/cards?id=${cardId}`)
  if (response.status == 200) {
    return await response.json();
  }
  else {
    return {
      status: response.status,
      message: response.message,
      cards: []
    }
  }
}