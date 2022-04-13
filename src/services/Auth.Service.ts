import httpReq from "./http.service";


class AuthService{
     async login(payLoad:iLoginData):Promise<iAuthUser>{
     const {data}=await httpReq.post('/product',payLoad);
     return data;
     }
}


export default new AuthService();

