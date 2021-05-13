import { types } from '../types/types'
export const addressReducer = (state = {}, action) => {
    switch (action.type) {
        case types.setAddress:
            return {
                name: action.payload.name,
                latitud: action.payload.latitud,
                longitud: action.payload.longitud,
            };

        default:
            return state;
    }
}