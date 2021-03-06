import React from "react"
import CharacterItem from "./CharacterItem"

const CharacterGrid = ({items, isLoading, errorMsg})=> {
	
	return isLoading? (<h1 className="center">Loading...</h1>) : (
		
		errorMsg? (<h1 className="center">{errorMsg}</h1>) : 
			(<section className="cards">
				{items.map(item=>(
					 <CharacterItem key={item.char_id} item={item} />
				 ))}
			</section>)
	)
}

export default CharacterGrid