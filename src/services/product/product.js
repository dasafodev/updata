import axios from 'axios';


async function getProducts(){
    try {
        const res = await axios.get(`${process.env.API_URL}/products`, {headers:{'Content-Type': 'application/json'}});
        return res.data;
    } 
    catch (error) {
        console.log(error);
        throw error;
    }

}

async function getProductById(id){
    try {
        const res = await axios.get(`${process.env.API_URL}/products/${id}`, {headers:{'Content-Type': 'application/json'}});
        return res.data;
    } 
    catch (error) {
        console.log(error);
        throw error;
    }
}

async function getProductByCountry(country){
    try {
        const res = await axios.get(`${process.env.API_URL}/products/${country}`, {headers:{'Content-Type': 'application/json'}});
        return res.data;
    } 
    catch (error) {
        console.log(error);
        throw error;
    }
}

async function getShops(){
    try {
        const res = await axios.get(`${process.env.API_URL}/shops`, {headers:{'Content-Type': 'application/json'}});
        return res.data;
    } 
    catch (error) {
        console.log(error);
        throw error;
    }
}

async function getCategories(){
    try {
        const res = await axios.get(`${process.env.API_URL}/categories`, {headers:{'Content-Type': 'application/json'}});
        return res.data;
    } 
    catch (error) {
        console.log(error);
        throw error;
    }
}