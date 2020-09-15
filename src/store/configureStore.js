import {createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
// import rootReducer from './rootReducer';
import rootReducer from '../reducers/index';

const enhancer = compose(applyMiddleware(reduxThunk));
const configureStore = createStore(rootReducer, {}, enhancer);
export default configureStore;
