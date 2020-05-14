import axios from 'axios'

const initialState={
     buyer:{},
     loading: false
}
const GET_BUYER = "GET BUYER"

export function getBuyerSession(){
    let buyer= axios.get('/auth/buyer_session').then(res =>res.data)
    console.log("from redux: ", buyer)
    return{
        type:GET_BUYER,
        payload:buyer
    }
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_BUYER + '_PENDING':
            return{
                ...state, 
                loagind:true}
        case GET_BUYER +'_FULFILLED':
            return{
                ...state, 
                buyer:action.payload, 
                loading:false}
        case GET_BUYER +'_REJECTED':
            return{
                ...state,
                loading:true
            }
        default:
            return state
    }
}
