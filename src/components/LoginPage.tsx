import { useAuthContext } from "../context/AuthContext"
import LoginForm from "./LoginForm"


export default function LoginPage() {

const { state, showEmail,logingEmailWithPassword, logout } = useAuthContext()

if (state === 2) {
  return(
    <>
      <h3>Te deslogiaron</h3>
      
    </>
  )
}
if (state === 1) {
  return(
    <>
      <h3> Te has logeado</h3>
      <h3>Bienvenido {showEmail} </h3>
      <button className="bg-red-500 hover:bg-blue-300 text-white rounded-2xl mt-2 p-5" onClick={()=>logout()}>Logout</button>

    </>
  )
}
  return (
    <>

    <LoginForm/>

    </>
  )
}
