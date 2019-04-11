import projectReducer from '../../redux/reducers/projectReducer'

describe('Testing projectReducer', () => {
    test('should have the correct initial state', () => {
        const action = { type: 'INITIALIZE' };
        const returnedState = projectReducer('INITIALIZE', action);
        expect(returnedState).toBe('INITIALIZE')
    });
})

