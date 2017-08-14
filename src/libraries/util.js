import customAxios from '@/libraries/customAxios'

export const roomValidator = {
  async validate (roomId) {
    try {
      const result = await customAxios.get('/room', {params: {
        id: roomId
      }})
      return result
    } catch (e) {
      throw e
    }
  }
}
