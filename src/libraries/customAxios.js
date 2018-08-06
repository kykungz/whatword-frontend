import axios from 'axios'
import config from '@/config'

const customAxios = axios.create({
  baseURL: config.ORIGIN_API_URL
})

export default customAxios
