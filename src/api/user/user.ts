import request from '@/utils/request'
import type { userLogin, userLoginRes, userList, userListRes } from './type'

export const loginApi = (data: userLogin) => {
  return request.post<userLoginRes>('/user/login/', data)
}

export const userListApi = (data: userList) => {
  return request.post<userListRes>('/wx_user/user_list/', data)
}
