import { useAuthContext } from "../context/AuthContext"
import CalculatorForm from "./CalculatorForm"
import LoginForm from "./LoginForm"


export default function LoginPage() {

const { state, showEmail, logout } = useAuthContext()


if (state === 1) {
  return(
    <>
    <h3> Te has logeado</h3>
    <h3>Bienvenido {showEmail} </h3>
    <CalculatorForm/>
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
