import axios from "axios"

export const searchCities = async() =>{
    try{
    const {data:{name} } = await axios.get(`https://restcountries.com/v3.1/name/${nameCity}`
    )
    return data;
    }catch (e){
        return e;
    }
}