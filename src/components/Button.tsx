interface Props {
    label: string,
    parentMethod: () => void
}

export const Button = ({label, parentMethod}: Props) => {

    return (
    <button className="bg-white 
    hover:bg-gradient-to-br from-white to-blue-500 rounded-xl m-2 p-1" onClick={parentMethod}>
      {label}
    </button>
    )
    
}

export const SpecialButton = ({label, parentMethod}: Props) => {
    return (
        <button className="bg-green-200
        hover:bg-gradient-to-br from-green-200 to-green-500 rounded-xl m-2 p-1" onClick={parentMethod}>
          {label}
        </button>
        )
}
