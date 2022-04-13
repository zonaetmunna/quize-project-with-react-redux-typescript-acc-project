
// product interface
interface iProducts{
     _id?:string,
     name:string,
     category:string,
     description:string,
     image:string,
     price:number,
     store:number,
}

// authLogin interface
interface iLoginData{
     email:string,
     password:string
}

// authUser interface
interface iAuthUser{
     name:string,
     email:string,
     id:string,
     role:string,
     status:string
     token:string
     
}