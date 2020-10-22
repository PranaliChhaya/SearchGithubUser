import{ FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "./UserTypes"
import {SEARCH} from './UserAction';

const initialState={
    loading:false,
    user:[],
    error:'',
    contents:['Mirististica', 'Vet'], value: '', works: []
}


const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_USER_REQUEST:
            return{
                ...state,
                loading:true,
            }
        case FETCH_USER_SUCCESS:
            return{
                ...state,
                loading:false,
                user:action.payload,
                error:'',
            }
        case FETCH_USER_FAILURE:
            return{
                ...state, 
                loading:false, 
                user:[], 
                error:action.payload,
            }
        // case SEARCH:{
        //     const{value} = action;
        //     const works = state.contents.filter((val)=> value.includes(value));
        //     return{
        //         ...state,
        //         value,
        //         works
        //     }
       // } 

        default:
            return state;

    }
}
export default userReducer