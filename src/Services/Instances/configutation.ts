import { AxiosRequestConfig, AxiosResponse } from "axios";

enum ApiType {
    Api
}

export const getApiUrl = (Api:  ApiType): string => {
    return process.env.REACT_APP_API_URL!;
}


const getAxiosConfiguration = (api: ApiType) => ({
    baseURL: getApiUrl(api),
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json;charset=UTF-8'
    }
})

  
function responseHandler(response: AxiosResponse) {
    return response
  }


  function errorHandler(error: any){
    return Promise.reject(error)
}


export {
    getAxiosConfiguration,
    responseHandler,
    ApiType,
    errorHandler
}