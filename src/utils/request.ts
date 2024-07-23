// httpService.ts
import axios from 'axios'
import type { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios'

// 定义后端返回的数据类型，其中 data 为返回的业务数据
export interface Result<T> {
  code: number
  success: boolean
  error_msg: string
  data: T
}

// 创建Axios实例
const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000
})

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在发送请求之前做些什么，例如添加Token
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做些什么
    return response.data
  },
  (error) => {
    // 对响应错误做些什么
    return Promise.reject(error)
  }
)

// 常用方法封装
const httpService = {
  get<T>(url: string, config?: InternalAxiosRequestConfig): Promise<Result<T>> {
    return axiosInstance.get(url, config)
  },
  post<T>(url: string, data?: any, config?: InternalAxiosRequestConfig): Promise<Result<T>> {
    return axiosInstance.post(url, data, config)
  },
  put<T>(url: string, data?: any, config?: InternalAxiosRequestConfig): Promise<Result<T>> {
    return axiosInstance.put(url, data, config)
  },
  delete<T>(url: string, config?: InternalAxiosRequestConfig): Promise<Result<T>> {
    return axiosInstance.delete(url, config)
  }
}

export default httpService
