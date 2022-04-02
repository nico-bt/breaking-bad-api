import React, {useState, useEffect} from "react"
import './App.css';
import Header from "./components/ui/Header"
import CharacterGrid from "./components/characters/CharacterGrid"

function App() {
	const [items, setItems] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	
	useEffect(()=>{
		const fetchItems = async ()=>{
			try{
				const data = await fetch("https://www.breakingbadapi.com/api/characters")
				const dataArray = await data.json()
				console.log(dataArray)
				setItems(dataArray)
				setIsLoading(false)
			} catch(err){
				console.log(err)
			}
		}
		fetchItems()
	}, [])
	
  return (
    <div className="container">
		  <Header />
		  <CharacterGrid items={items} isLoading={isLoading} />
		
    </div>
  );
}

export default App;
