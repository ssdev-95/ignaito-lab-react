import { create } from 'axios'

const TOKEN = import.meta.env.VITE_ACCESS_TOKEN
const URI = import.meta.env.VITE_GRAPHQL_URI

export const api = create({
	baseURL: URI
})

api
  .defaults
	.headers
	.common['Authorization'] = `Bearer ${TOKEN}`
