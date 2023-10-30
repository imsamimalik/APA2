import { useState } from "react"

const Q2 = () => {

	const [input, setInput] = useState("")
	const [shown, setShown] = useState(false)
	// const [text, setText] = useState('')


	const handleClick = () => {
		// setText(input)
		setShown(!shown)
	}

	return (
		<section className="flex flex-col justify-center items-center w-3/6 gap-5 mx-auto mt-[100px]">
			<h1 className="text-6xl font-bold">
				Is State Clear Now?
			</h1>

			<input type="text"
				value={input}
				placeholder="Type Here"
				onChange={(e) => setInput(e.target.value)}
				className="p-2 border-2 border-gray-400 rounded-md"
			/>

			<button
				onClick={handleClick}
				className=" bg-slate-200 px-4 py-2 border border-gray-600"
			>
				Click me
			</button>

			{shown && <h3
				className="w-full py-4 text-2xl font-bold text-center text-white bg-blue-500"
			>{input}</h3>}

		</section>
	)
}
export default Q2