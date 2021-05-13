import { types } from "../types/types"

export const startSetAddress = (name, latitud, longitud) => {
    return (dispatch) => {
        dispatch(set(name, latitud, longitud));
    }
}

export const set = (name, latitud, longitud) => {
    return {
        type: types.setAddress,
        payload: {
            name,
            latitud,
            longitud,
        }
    }
}