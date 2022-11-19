const initialState={
products:[],
basket:localStorage.getItem("basket")?JSON.parse(localStorage.getItem("basket")):[]
}
export default function Reducer(state=initialState,action){
    console.log(state)
    console.log(action)
    switch(action.type){
        case "SET_PRODUCTS":
        return{...state,products:action.payload}
        case "SET_BASKET":
            localStorage.setItem("basket",JSON.stringify(action.payload))
            return{...state,basket:action.payload}
        default:
            return state;
    }
}