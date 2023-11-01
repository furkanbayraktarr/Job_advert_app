import { Provider } from "react-redux"
import { legacy_createStore as createStore } from "redux"
import initialState from './store'
import reducers from './reducers'

function AuthProvider ({children}){

    
    const store = createStore(reducers, initialState)

    return(
        <Provider store={store} >{children}</Provider>

    )
}

export default AuthProvider