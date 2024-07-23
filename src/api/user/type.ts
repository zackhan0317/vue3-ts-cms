export interface userLogin {
  username: string
  password: string
}

export interface userLoginRes {
  id: number
  role: number
  name: string
  permissions_list: string[]
}

export interface userList {
  page_size: number
  page_no: number
}

interface userListObj {
  unionid: string
  mobile: number
  nickname: string
  id: number
  updated_at: string
  avatar: string
  openid: string
  id_card: string
  created_at: string
}

export type userListRes = userListObj[]
