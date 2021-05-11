import { types } from "../types/types"
import { loginUser } from "../../helpers/http-provider";

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        // const user = await login(email, password);
        loginUser(email, password).then((user) => {
            dispatch(
                login(user.email, user.nombres, user.photoUrl, true)
            )
        })
    }
}

export const startSignOut = () => {
    return (dispatch) => {
        dispatch({
            type: types.logout,
        });
    }
}

export const login = (email, nombres, photoUrl, isLogged) => {
    return {
        type: types.login,
        payload: {
            email,
            nombres,
            photoUrl,
            isLogged
        }
    }
}