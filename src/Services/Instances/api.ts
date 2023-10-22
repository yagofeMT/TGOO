import axios from 'axios'
import { ApiType, getAxiosConfiguration, errorHandler, responseHandler } from './configutation'
import { requestHandler, responseErrorHandler } from './utils'


const axiosConfiguration = getAxiosConfiguration(ApiType.Api)
const apiClient = axios.create(axiosConfiguration)

apiClient.interceptors.request.use(requestHandler, errorHandler)
apiClient.interceptors.response.use(responseHandler, responseErrorHandler)


export {apiClient}