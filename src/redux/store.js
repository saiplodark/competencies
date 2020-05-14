import { createStore, applyMiddleware} from 'redux'
import promiseMIddleware from 'redux-promise-middleware'

import buyers from './buyerReducer'

export default createStore(buyers,applyMiddleware(promiseMIddleware))


