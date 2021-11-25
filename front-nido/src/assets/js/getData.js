export default async function getData (path){
    // const URL = "http://ec2-54-84-101-145.compute-1.amazonaws.com:8080"
    const URL = "http://localhost:8080"
    try{
        let response = await fetch(URL + path);
        let data = await response.json();
        if(data === undefined){
            return [];
        }
        return data;
    }catch(error){
        console.log(error);
    }
}