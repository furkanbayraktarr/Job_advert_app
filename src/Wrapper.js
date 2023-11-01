import Router from "./Router"
import  AuthProvider from "./context/AuthProvider"


function Wrapper(){
    return(
        <AuthProvider>
            <Router></Router>
        </AuthProvider>
    )
}

export default Wrapper