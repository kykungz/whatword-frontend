import customAxios from '@/libraries/customAxios'

export const roomValidator = {
  async validate ({id, password}) {
    try {
      const result = await customAxios.get('/room', {params: {
        id, password
      }})
      return result
    } catch (e) {
      throw e
    }
  }
}
