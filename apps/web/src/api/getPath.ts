import { getPathFromRoute } from 'api/helpers/routeSelectors'
import getRoute from './helpers/getRoute'

/**
 * as per the requirements of the assignment, this pure function can be called to retrieve
 * the optimal swap path of token A -> token B
 */
async function getPath(input: Parameters<typeof getRoute>[0]): Promise<string[]> {
  const route = await getRoute(input)

  return getPathFromRoute(route)
}

export default getPath
