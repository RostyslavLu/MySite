import http from '@/http-common'

class EmailDataService {
  sendMail (data) {
    console.log(data)
    return http.post('/send-mail', data)
  }
}
export default new EmailDataService()
