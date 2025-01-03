import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"


export default function LoginForm() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const {logingEmailWithPassword} = useAuthContext()

    const handleSubmit = (e:any) => {
        e.preventDefault()

        if (email === "" ||  password === "" ) {
            setError(true)
            return
        }
        
        setError(false)

        logingEmailWithPassword(email,password)

    }

  return (
    <section>
        <h1>Logeate</h1>

        <form
        onSubmit={handleSubmit}
        className="grid grid-flow-row justify-center" >
            <input
            className="basis-1/4 border-2 border-blue-400 rounded-md "
            type="text"
            placeholder="Usuario"
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
            
            <input
            className="basis-1/4 border-2 border-blue-400 rounded-md"
            type="text"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            />
        <button className="bg-blue-500 hover:bg-blue-300 text-white rounded-2xl mt-2 p-5">Login</button>
        </form>
        {error && <p>Todos los campos son obligatorios</p> }
    </section>
  )
}
