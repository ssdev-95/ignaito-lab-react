import { create } from 'axios'

const URI = "https://api.imgbb.com/1"

export const api = create({
	baseURL: URI
})
