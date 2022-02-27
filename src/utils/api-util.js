export async function getCardsByName(cardName) {
  const response = await fetch(
    `https://api.magicthegathering.io/v1/cards?name=${cardName}&contains=imageUrl&pagesize=15&orderby=name`,
  )

  if (response.status == 200) {
    return await response.json();
  }
  else {
    const errorMessage = await response.json();
    return {
      status: errorMessage.status,
      error: errorMessage.error,
    }
  }
}

export async function getRandomCards() {
  const response = await fetch(
    `https://api.magicthegathering.io/v1/cards?contains=imageUrl&pagesize=15&orderby=name&random=true`,
  )

  if (response.status == 200) {
    return await response.json();
  }
  else {
    const errorMessage = await response.json();
    return {
      status: errorMessage.status,
      error: errorMessage.error,
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
      error: response.error,
    }
  }
}