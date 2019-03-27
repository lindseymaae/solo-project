import { put as dispatch, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import projectSaga from './project';


function* addProfile(action) {
    try {
        yield axios.post('/api/project/profile', action.payload)
    } catch (error) {
        console.log(error)
    }
}
function* fetchProfile() {
    try {
        const profileResponse = yield axios.get('/api/profile');
        console.log('fetch profile was hit', profileResponse.data);
        yield dispatch({ type: 'GET_PROFILE', payload: profileResponse.data })
    } catch (error) {
        console.log('Error with your fetch');
    }
}

function* deleteWish(action){
    console.log('delete wish saga hit', action);
    
    try {
        yield axios.delete('/api/profile/wishlist/' + action.payload)
        yield dispatch({ type: 'FETCH_PROFILE' });
    } catch (error) {
        console.log(error)
    }
}


function* wishlistSaga() {
yield takeEvery('ADD_PROFILE', addProfile)
yield takeEvery('FETCH_PROFILE', fetchProfile)
yield takeEvery('DELETE_WISH', deleteWish)
}

export default wishlistSaga;