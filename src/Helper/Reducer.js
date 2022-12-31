export const reducerFunction = (state,action) => {
    switch(action.type){
        case "FETCH_START":
            return {
                loading : true,
                data : {},
                error : false
            }
        case "FETCH_SUCCESS":
            return {
                ...state,
                loading : false,
                data : action.payload
            }
        case "FETCH_ERROR":{
            return {
                loading : false,
                data : {},
                error : true
            }
        }
        default:
            return state
    }
}