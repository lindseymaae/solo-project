import loginReducer from '../../redux/reducers/loginModeReducer'

describe('Testing loginModeReducer', ()=>{
    test('should have the correct initial state', () => {
        const action = {type: 'INITIALIZE'};
        const returnedState = loginReducer(undefined, action);
        expect(returnedState).toBe('login')
    });
    test('should have the correct initial state', () => {
        const action2 = { type: 'REGISTER' };
        const returnedState = loginReducer('INITIALIZE', action2);
        expect(returnedState).toBe('INITIALIZE')
    });
})

