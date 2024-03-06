import {createContext, useState } from "react"



const UserContext = createContext({})

const MyProvider = ({children}) => {
   const [value, setValue] = useState("")

   const handleChange = (e)=>{
    setValue(e.target.value)
   }
 
  const valueToShare = {
   handleChange,
   value,
   setValue,
  }


  return (
    <UserContext.Provider value={valueToShare}>{children}</UserContext.Provider>
  )
}

export default UserContext
export  {MyProvider}