import axios  from "axios";


export async function savedata (user)
{
 const res = await axios.post("http://localhost:9200/save",user)
 return res ; 
        
}


export async function getAllData () 
{
    const res = await axios.get("http://localhost:9200/getdata")
    return res 
}
 
