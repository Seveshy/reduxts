import { createStore } from 'redux';

const store = createStore(() => {
    return {
        id: 3,
        name: 'Daniel',
        email: 'daniel@mail.com'
    }
});

export default store;

