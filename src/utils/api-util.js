export async function getCardByName(title) {
  const response = await fetch(
    `https://api.magicthegathering.io/v1/cards?name=${title}`,
  )
  return await response.json()
}