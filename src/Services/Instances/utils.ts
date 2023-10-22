import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios"

export const requestHandler = async (config: any) => {
      config.headers = {
        ...config.headers,
        Authorization: 'Bearer 35|bkdTKk4t5WoNeApCMkVwWLBhmkjtarmeULMfwKiW',
        "Api-Authorization": 'Bearer $2y$10$x3wqNWc4ZonF6dVWKAPnMuU1A258mgKbGWziVPdL5mhzqQwlhQEqK'
      }
  
    return config
  }
  

  export const responseHandler = async (response: AxiosResponse) => {
    return response
  }


  export const responseErrorHandler = async (error: AxiosError): Promise<any> => {
    return error.message
  }
  