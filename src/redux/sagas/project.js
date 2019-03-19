import { put as dispatch, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* postProject(action) {
    console.log('2nd saga was hit', action)
    try {
        yield axios.post('/api/product', action.payload)
        yield dispatch({ type: 'INFO_POST' });
    } catch (error) {
        console.log(error)
    }
}

function* fetchInfo() {
    console.log('fetchInfo was hit');
    try {
        const infoResponse = yield axios.get('/api/project');
        yield dispatch({ type: 'GET_INFO', payload: infoResponse.data })
    } catch (error) {
        console.log('Error with your fetch');
    }
}

function* projectSaga() {
    yield takeEvery('FETCH_INFO', fetchInfo)
    yield takeEvery('POST_INFO', postProject)
}




export default projectSaga;