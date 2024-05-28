import { Navigate } from "react-router-dom"
import useAuth from "../Hook/useAuth"


const PrivateRoute = ({children}) => {

  const {user} = useAuth()
  if(user){
    return children
  }

  <Navigate to={"/login"} ></Navigate>


}
export default PrivateRoute