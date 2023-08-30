const inisitalstate={
    number:0
};

const reducer = (state=inisitalstate,action) => {
    if(action.type==='increment'){
        return {
            number: (state.number + action.payload)
        }
    }
    if(action.type === 'decrement'){
        return {
            number : (state.number - action.payload)
        }
    }
    return state;
};



export default reducer;
