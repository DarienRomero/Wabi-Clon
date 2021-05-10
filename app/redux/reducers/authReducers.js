import { types } from '../types/types'
export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                email: action.payload.email,
                nombres: action.payload.nombres,
                photoUrl: action.payload.photoUrl
            };
        case types.logout:
            return {};

        default:
            return state;
    }
}