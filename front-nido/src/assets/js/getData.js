export default async function getData (endPoint){
    try{
        let response = await fetch(endPoint);
        let data = await response.json();
        if(data === undefined){
            return [];
        }
        return data;
    }catch(error){
        console.log(error);
    }
}