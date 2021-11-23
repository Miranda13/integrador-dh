export default async function getData (endPoint){
    const token ="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBhZG1pbi5uaWRvIiwicm9sZXMiOiJST0xFX0FETUlOIiwiaWF0IjoxNjM3Njc1OTAxLCJleHAiOjE2Mzc2OTM5MDF9.CtLryUoD8bzKNMT-y_GsdSWBLViWeatgJa8p4YK1Fn4";
    try{
        let response = await fetch(endPoint,{
            headers: {"Authorization": `Bearer ${token}`}
        });
        let data = await response.json();
        return data;
    }catch(error){
        return [];
    }
}