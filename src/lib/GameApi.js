import axios from 'axios'
import config from '@/config'

const axiosInstance = axios.create({
  baseURL: config.ORIGIN_API_URL,
})

class GameApi {
  static create({ wordBank, color, password }) {
    return axiosInstance.post('/create', { wordBank, color, password })
  }

  static update({ id, wordBank, color, password }) {
    return axiosInstance.post('/update', { id, wordBank, color, password })
  }

  static getRoomInfo({ id, password }) {
    return axiosInstance.get('/room', {
      params: {
        id,
        password,
      },
    })
  }

  static remote({ id, password, action }) {
    return axiosInstance.post('/remote', { id, password, action })
  }
}

export default GameApi
