import { useEffect, useState } from "react";


type statusType ='idle'|'pending'|'success'|'error';

const useAPI=<T>(asyncService:()=>Promise<T>)=>{
const [data,setData]=useState<T|null>(null);
const [error,setError]=useState<string|null>(null);
const [status,setStatus]=useState<statusType>('idle');


useEffect(()=>{
     setStatus('pending');
     setError(null);
     asyncService()
     .then((data)=>{
          setData(data);
          setStatus('success');
     })
     
     .catch((err)=>{
          console.log(err)
          setError(err.message);
     });
},[])

return{
data,
isLoading:status==='pending',
isSuccess:status==='success',
error
}

}

export default useAPI;