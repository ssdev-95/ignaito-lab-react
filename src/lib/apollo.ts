import {
	ApolloClient,
  InMemoryCache,
	gql
} from '@apollo/client'

const URI = import.meta.env.VITE_GRAPHQL_URI!

export const client = new ApolloClient({
	uri: URI,
	cache: new InMemoryCache()
})

export const RETRIEVE_LESSONS = gql`
	query {
		lessons {
			id
			description
		}
	}
`
