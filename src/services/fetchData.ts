export const fetchData = async (url:string,token:string|null = null)=>{
    try {
        const res = await fetch(url,{headers:{Authorization:token?token:""}})
    } catch (error) {
        
    }
}