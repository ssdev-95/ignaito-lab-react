import { create } from 'axios'

const TOKEN = import.meta.env.VITE_ACCESS_TOKEN
const URI = import.meta.env.VITE_GRAPHQL_URI

export const api = create({
	baseURL: URI,
	headers: {
		'Authorization': `Bearer ${TOKEN}`
	}
})
