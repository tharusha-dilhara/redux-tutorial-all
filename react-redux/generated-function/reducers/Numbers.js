//inisitail state store values
const inisitalstate={
    number:0
};


// action type store object
const actionType= {
    inc:'increment',
    dec:'decrement'
};

// number action generate functions
export const numberincrement=(payload =1) =>({
    type: actionType.inc,
    payload
});
 export const numberdecrement = (payload =1) => ({
    type: actionType.dec,
    payload
});


//reducer
const reducer = (state=inisitalstate,action) => {
    if(action.type===  actionType.inc){
        return {
            number: (state.number + action.payload)
        }
    }
    if(action.type === actionType.dec){
        return {
            number : (state.number - action.payload)
        }
    }
    return state;
};



export default reducer;