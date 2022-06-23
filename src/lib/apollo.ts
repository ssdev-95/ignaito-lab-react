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
