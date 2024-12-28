import { createContext , useState ,  } from "react";

const context = createContext(null)


export const Provider = ({children}) => {

    const [trainResults, setTrainResults] = useState(null);
    const [fromStation, setFromStation] = useState({});
    const [toStation, setToStation] = useState({});
    const [date, setDate] = useState(null);
    const [mode, setMode] = useState("");
    const [loading , setLoading] = useState(false);
    const [search , setSearch] = useState(false);
    const [error , setError] = useState("")

  return (
    <context.Provider value={{trainResults , setTrainResults , fromStation , setFromStation , toStation , setToStation , loading , setLoading , search , setSearch , date ,setDate , mode , setMode , error , setError}}  >
      {children}
    </context.Provider>
  )
}

export default context