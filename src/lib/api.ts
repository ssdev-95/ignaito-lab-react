import axios from 'axios'

const URI = "https://api.imgbb.com/1"

export const api = axios.create({
	baseURL: URI
})
