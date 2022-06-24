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

export const RETRIEVE_LESSON_BY_SLUG = gql`
	query ($slug: String) {
  lesson(where: {slug: $slug}) {
    title
    description
    videoId
    challenge {
      url
    }
    teacher {
      name
      bio
      avatarURL
    }
  }
}

`

export const RETRIEVE_ALL_LESSONS = gql`
	query {
		lessons (orderBy: availableAt_ASC, stage: PUBLISHED) {
			id
			title
			availableAt
			lessonType
			slug
		}
	}
`

export const SUBSCRIBE_MUTATION = gql`
	mutation ($name:String!, $email:String!) {
		createSubscriber (data: { email:$email, name:$name }) {
    id
  }
}

`
