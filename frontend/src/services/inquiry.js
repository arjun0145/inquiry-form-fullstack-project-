import axios from "axios";


export function savedata(user) {
    const res = axios.post("http://localhost:9600/save", user)
    return res ;
}

export async function getAllData() {
    const res = await axios.get("http://localhost:9600/getdata")
    return res ;
}


export async function deleteData(id) {
    const res = await axios.delete("http://localhost:9600/deletedata/"+id)
    return res;
}

export async function updatedata(id , data) {
    const res = await axios.put("http://localhost:9600/updatedata/"+id , data)
    return res;
}

