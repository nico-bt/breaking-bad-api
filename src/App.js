import React, {useState, useEffect} from "react"
import './App.css';
import Header from "./components/ui/Header"
import SearchBar from "./components/ui/SearchBar"
import CharacterGrid from "./components/characters/CharacterGrid"

function App() {
	const [items, setItems] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [query, setQuery] = useState("")
	
	useEffect(()=>{
		const fetchItems = async ()=>{
			try{
				const data = await fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`)
				const dataArray = await data.json()
				console.log(dataArray)
				setItems(dataArray)
				setIsLoading(false)
			} catch(err){
				console.log(err)
			}
		}
		fetchItems()
	}, [query])
	
  return (
    <div className="container">
		  <Header />
		  <SearchBar getQuery={(formInput)=>setQuery(formInput)}/>
		  <CharacterGrid items={items} isLoading={isLoading} />
		
    </div>
  );
}

export default App;
