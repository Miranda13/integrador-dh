export default async function getData (endPoint){
    try{
        let response = await fetch(endPoint);
    let data = await response.json();
    return data;
    }catch(error){
        return [];
    }
}