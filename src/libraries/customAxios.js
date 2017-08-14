import axios from 'axios'
import { ORIGIN_API_URL } from './variables'

const customAxios = axios.create({
  baseURL: ORIGIN_API_URL
})

export default customAxios
