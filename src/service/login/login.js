import instance from '../index'

export function accountLoginRequest(account) {
  console.log(account)
  return instance.post('/login', account)
}
