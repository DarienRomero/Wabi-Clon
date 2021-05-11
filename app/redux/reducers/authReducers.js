import { types } from '../types/types'
export const authReducer = (state = {isLogged: false}, action) => {
    switch (action.type) {
        case types.login:
            return {
                email: action.payload.email,
                nombres: action.payload.nombres,
                photoUrl: action.payload.photoUrl,
                isLogged: action.payload.isLogged
            };
        case types.logout:
            return {
                isLogged: false
            };

        default:
            return state;
    }
}