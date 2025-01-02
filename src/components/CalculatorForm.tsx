import { Button, SpecialButton } from "./button"

const addInput = () => {

}


export default function CalculatorForm() {
  return (
    <div className="grid grid-cols-4 justify-center bg-black rounded-md">
        <Button label="1" parentMethod={()=>addInput()}/>
        <Button label="2" parentMethod={()=>addInput()}/>
        <Button label="3" parentMethod={()=>addInput()}/>
        <SpecialButton label="+" parentMethod={()=>addInput()} />
        <Button label="4" parentMethod={()=>addInput()}/>
        <Button label="5" parentMethod={()=>addInput()}/>
        <Button label="6" parentMethod={()=>addInput()}/>
        <SpecialButton label="-" parentMethod={()=>addInput()}/>
        <Button label="7" parentMethod={()=>addInput()}/>
        <Button label="8" parentMethod={()=>addInput()}/>
        <Button label="9" parentMethod={()=>addInput()}/>
        <SpecialButton label="*" parentMethod={()=>addInput()}/>
        <Button label="0" parentMethod={()=>addInput()}/>
        <SpecialButton label="=" parentMethod={()=>addInput()}/>
        <SpecialButton label="." parentMethod={()=>addInput()}/>
        <SpecialButton label="/" parentMethod={()=>addInput()}/>

        <button className="col-start-2 col col-span-2
            bg-red-500 rounded-md 
            hover:bg-red-400 m-2 p-2"> Limpiar </button>
    </div>
  )
}
