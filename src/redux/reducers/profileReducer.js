const profileReducer = (state = [], action) => {
    console.log('profileReducer was hit', action);

    switch (action.type) {
        case 'GET_PROFILE':
            return action.payload
        default:
            return state;
    }

};
export default profileReducer;