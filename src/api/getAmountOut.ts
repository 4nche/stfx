import getRoute from 'helpers/getRoute'

async function getAmountOut(input: Parameters<typeof getRoute>[0]) {
  const route = await getRoute(input)

  return route.quote
}

export default getAmountOut
