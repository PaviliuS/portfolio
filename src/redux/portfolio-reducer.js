const ADD_COLLECTION = 'ADD-COLLECTION';

let initialState = {
};

const portfolioReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_COLLECTION:{
            let stateCopy = {...state};
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addCollectionActionCreator = (collection) => {
    return {type: ADD_COLLECTION, collection: collection}
}

export default portfolioReducer;