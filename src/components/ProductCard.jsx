const ProductCard = ({
	name,
	price,
	img,
	isSold,
}) => {
	return (
		<div className="relative flex flex-col items-center gap-2">
			{isSold && (
				<span className="top-2 right-2 absolute px-2 py-1 text-xs text-white bg-gray-500 rounded-full">
					Sold Out
				</span>
			)}
			<img src={img} alt={name} className="w-[400px] rounded-[10px] h-[300px]" />
			<h2 className="text-2xl font-medium uppercase">{name}</h2>
			<p className=" text-base">{price}</p>
		</div>
	)
}
export default ProductCard