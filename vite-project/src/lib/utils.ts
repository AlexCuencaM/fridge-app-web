export const post = async (url:string, data: any) =>{
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const response = await fetch(url, {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(data)
    });
    return response;
}

export const BACKEND_URL = "http://localhost:7000/api/";