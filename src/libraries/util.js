import customAxios from '@/libraries/customAxios'

export const roomValidator = {
  validate (roomId) {
    customAxios.get('/room', {params: {
      id: roomId
    }}).then(() => {
      return true
    }).catch(() => {
      return false
    })
  }
}
