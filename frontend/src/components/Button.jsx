function Button({text,fn}) {
    return (
      <>
          <button className="font-bold text-2xl
           bg-indigo-600 rounded text-white 
           hover:bg-indigo-500 p-2 cursor-pointer text-center
           m-3 w-1/2" 
           onClick={fn}
           >{text}</button>
      </>
    )
  }
  
  export default Button