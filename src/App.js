import React, {useState, useEffect} from "react"
import './App.css';
import Header from "./components/ui/Header"
import SearchBar from "./components/ui/SearchBar"
import CharacterGrid from "./components/characters/CharacterGrid"

function App() {
	const [items, setItems] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [query, setQuery] = useState("")
	const [errorMsg, setErrorMsg] = useState("")
	
	useEffect(()=>{
		const fetchItems = async ()=>{
			try{
				const data = await fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`)
				const dataArray = await data.json()
				setItems(dataArray)
				setIsLoading(false)
				setErrorMsg("")
			} catch(err){
				console.log(err)
				setErrorMsg("Something went wrong. Please, try again")
				setIsLoading(false)
			}
		}
		fetchItems()
	}, [query])
	
  return (
    <div className="container">
		  <Header />
		  <SearchBar getQuery={(formInput)=>setQuery(formInput)}/>
		  <CharacterGrid items={items} isLoading={isLoading} errorMsg={errorMsg}/>
		
    </div>
  );
}

export default App;
