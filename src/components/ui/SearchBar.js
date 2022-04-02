import React, {useState} from "react"

const SearchBar = ({getQuery})=> {
	const [text, setText] = useState("")
	
	const onChange = (e)=>{
		e.preventDefault()
		setText(e.target.value)
		getQuery(e.target.value)
	}
	
	return (
		<section className='search'>
			<form onSubmit={(e)=>e.preventDefault()}>
				<input
					type='text'
					className='form-control'
					placeholder='Search characters'
					value={text}
					onChange={onChange}
					autoFocus
				/>
			</form>
			<p className="center">Hover over image for details</p>
		</section>
	)
}

export default SearchBar