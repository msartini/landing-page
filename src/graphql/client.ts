import { GraphQLClient } from 'graphql-request'
import { getImageUrl } from 'utils/getImageUrl'

const client = new GraphQLClient(process.env.GRAPHQL_HOST)

export default client