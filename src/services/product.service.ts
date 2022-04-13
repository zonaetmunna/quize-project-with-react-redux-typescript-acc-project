import httpReq from "./http.service";


class ProductService{
     // for all products
     async getAllProducts():Promise<iProducts[]>{
         const {data}= await httpReq.get('/product');
         return data;
     }
     // for single product
     async getSingleProduct(id:string):Promise<iProducts>{
          const {data}=await httpReq.get('product'+id);
          return data;
     }

}

export default new ProductService();