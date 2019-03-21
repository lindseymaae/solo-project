import { put as dispatch, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* postProject(action) {
    console.log('2nd saga was hit', action.payload)

    const {
        category,
        season,
    } = action.payload;

    switch(category){
        case 'food':
            action.payload.category = 1;
            break;
        case 'clothing':
            action.payload.category = 2;
            break;
        case 'hygiene':
            action.payload.category = 3;
            break;
    }

    switch (season) {
        case 'summer':
            action.payload.season = 1;
            break;
        case 'fall':
            action.payload.season = 2;
            break;
        case 'winter':
            action.payload.season = 3;
            break;
        case 'spring': 
            action.payload.season = 4;
            break;
        case 'all':
            action.payload.season = 5;
            break;
    }

    console.log('Im an action!', action.payload);
    
    try {
        yield axios.post('/api/project', action.payload)
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

function* getQuantity (action){
    console.log('get quantity was hit');
    try {
        const infoResponse = yield axios.get(`/api/quantity/${action.payload.item}`);
        yield dispatch({ type: 'GET_INFO', payload: infoResponse.data })
    } catch (error) {
        console.log('Error with your fetch');
    }
}
function* deleteItem (action){
    console.log('delete saga hit', action);
    try {
        yield axios.delete('/api/project/'+ action.payload)
        yield dispatch({ type: 'FETCH_INFO' });
    } catch (error) {
        console.log(error)
    }
}


function* projectSaga() {
    yield takeEvery('FETCH_INFO', fetchInfo)
    yield takeEvery('POST_INFO', postProject)
    yield takeEvery('GET_QUANTITY', getQuantity)
    yield takeEvery('DELETE_ITEM', deleteItem)
}




export default projectSaga;