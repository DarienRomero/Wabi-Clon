const baseURL = "https://evolbit-api.herokuapp.com/";
const loginEndpoint = "api/auth/login";
const getUserEndpoint = "api/usuarios";
const editUserEndpoint = "api/usuarios/edit";
const getUserByIdEndpoint = "api/usuarios/detail";
const googleMapKey = "AIzaSyDDSu8NhYMBVHBetXvCtTFfMg23zHmxRQo";



export const loginUser = async (email, password) => {
    try{
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
            "email": email,
            "password": password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
    
        const resp = await fetch(baseURL + loginEndpoint, requestOptions);
        const body = await resp.text();
        const user = JSON.parse(body);
        if(resp.status === 200){
            return user.usuario;
        }else{
            return null;
        }
    }catch(e){
        return null;
    }
    
}
export const getUser = async(filterName = "") => {
    try{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
        
          const resp = await fetch(baseURL + getUserEndpoint + "/" + filterName , requestOptions);
          const text = await resp.text();
          const {usuarios} = JSON.parse(text);
          return usuarios;
    }catch(e){
        return [];
    }
}
export const editUser = async(user, uid) => {
    try{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "id": uid,
            "altura": user.altura,
            "nombres": user.nombres,
            "photoUrl": user.photoUrl
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        const resp = await fetch(baseURL + editUserEndpoint, requestOptions);

        console.log(resp.status);
        
        if(resp.status === 200 ){
            return true;
        }
        return false;
    }catch(e){
        console.log(e);
        return false;
    }
}
export const getUserById = async(id) => {
    try{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
        
          const resp = await fetch(baseURL + getUserByIdEndpoint + "/" + id , requestOptions);
          const text = await resp.text();
          const usuario = JSON.parse(text);
          return usuario;
    }catch(e){
        return [];
    }
}
export const createUser = async (nombres, email, password) => {
    try{
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
            "nombres": nombres,
            "email": email,
            "password": password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
    
        const resp = await fetch(baseURL + getUserEndpoint, requestOptions);
        const body = await resp.text();
        const {usuario} = JSON.parse(body);
        if(resp.status === 200){
            return usuario;
        }else{
            return null;
        }
    }catch(e){
        return null;
    }
}
export const searchAddresses = async(query) => {
    try{
        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
          };
        
        let response = await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?key=${googleMapKey}&language=es-419&region=pe&query=${encodeURI(query)}`, requestOptions);
        let result = await response.text();
        const {results} = JSON.parse(result);
        return results;
    }catch(e){
        return [];
    }
}
export const getProductsByBrand = async(brand) => {
    try{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "marca": brand
        });

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        let response = await fetch(baseURL + "productos/brand/", requestOptions);
        let result = await response.text();
        console.log(result);
        const {productos} = JSON.parse(result);
        return productos;
    }catch(e){
        return [];
    }
}