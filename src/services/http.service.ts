import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// axios config
const axiosConfig: AxiosRequestConfig = {
     baseURL: 'https://some-domain.com/api/',
     timeout: 1000,
};
// instance
const instance: AxiosInstance = axios.create(axiosConfig);

// add interceptor
instance.interceptors.request.use(
     function (config) {
          // Do something before request is sent
          return {...config,
          headers:{
               Authorization:JSON.parse(JSON.parse(localStorage.getItem('persist:root')||"")?.auth)?.data?.token
          }};
     }, 
     function (error) {
          // Do something with request error
          return Promise.reject(error);
   });

//    make 
class Request {
     async get(url: string): Promise<AxiosResponse> {
          return instance.get(url).then(res => res.data);
     }
     async post(url: string, body: any): Promise<AxiosResponse> {
          return instance.post(url, body).then(res => res.data);
     }
}

const httpReq = new Request();


export default httpReq;
