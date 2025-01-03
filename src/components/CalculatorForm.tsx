import { useState } from "react"
import { Button, SpecialButton } from "./Button"
import { Screen } from "./Screen";


export default function CalculatorForm() {

  const [input,setInput] = useState("") 

  const addInput = (val:string) => {
    setInput(input + val)
  }
  
  
  const resultInput= () =>{
    if (input) {
      setInput(eval(input))
    }else{
      alert("Ingrese una operacion a realizar")
    }
  }

  return (

    <>
    <Screen input={input} />
    {/* <label>{input} </label> */}
    <div className="grid grid-cols-4 justify-center bg-gradient-to-b from-neutral-600 to-blue-300 rounded-md">
        <Button label="1" parentMethod={()=>addInput("1")}/>
        <Button label="2" parentMethod={()=>addInput("2")}/>
        <Button label="3" parentMethod={()=>addInput("3")}/>
        <SpecialButton label="+" parentMethod={()=>addInput("+")} />
        <Button label="4" parentMethod={()=>addInput("4")}/>
        <Button label="5" parentMethod={()=>addInput("5")}/>
        <Button label="6" parentMethod={()=>addInput("6")}/>
        <SpecialButton label="-" parentMethod={()=>addInput("-")}/>
        <Button label="7" parentMethod={()=>addInput("7")}/>
        <Button label="8" parentMethod={()=>addInput("8")}/>
        <Button label="9" parentMethod={()=>addInput("9")}/>
        <SpecialButton label="*" parentMethod={()=>addInput("*")}/>
        <Button label="0" parentMethod={()=>addInput("0")}/>
        <SpecialButton label="=" parentMethod={()=>resultInput()}/>
        <SpecialButton label="." parentMethod={()=>addInput(".")}/>
        <SpecialButton label="/" parentMethod={()=>addInput("/")}/>

        <button className="col-start-2 col col-span-2
            bg-red-500 rounded-md 
            hover:bg-red-400 m-2 p-2"
            onClick={()=> setInput("")}> Limpiar </button>
    </div>
    </>
  )
}
