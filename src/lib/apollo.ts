import {
	ApolloClient,
  InMemoryCache,
	gql
} from '@apollo/client'

const URI = import.meta.env.VITE_GRAPHQL_URI!
const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN

export const POLL_INTERVAL = 60*60*24*7*1000

export const client = new ApolloClient({
	uri: URI,
	headers: {
		'Authorization': `Bearer ${ACCESS_TOKEN}`
	},
	cache: new InMemoryCache()
})
