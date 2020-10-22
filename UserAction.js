import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE, SEARCH} from './UserTypes'
import axios from 'axios'


export const fetchUserRequest=()=>{
    return{
        type:FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess=users=>{
    return{
        type:FETCH_USER_SUCCESS,
        payload:users
    }
}

export const fetchUserFailure=error=>{
    return{
        type:FETCH_USER_FAILURE,
        payload:error
    }
}

export const search=()=>{
    return {
        type: SEARCH
    }
}



export const fetchUsers=()=>{
    return (dispatch=>{
        dispatch(fetchUserRequest())
        axios.get('https://api.github.com/users').then(res=>{
            const user=res.data
            dispatch(fetchUserSuccess(user))
        }).catch(error=>{
            const err = error.message
            dispatch(fetchUserFailure(err))
        })
    })

    
}