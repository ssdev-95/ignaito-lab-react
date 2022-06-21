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

export const RETRIEVE_ALL_LESSONS = gql`
	query {
		lessons {
			id
			title
			availableAt
			lessonType
		}
	}
`

export const RETRIEVE_LESSON_BY_ID = (slug:string) => (gql`
	query {
		lessons (where: { slug: "${slug}"}) {
			title                                    
			description
			videoId
			teacher
			challenge
		}
	}
`)
