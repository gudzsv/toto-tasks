export default function Filter({ value, onFilter }) {
	return (
		<>
			<p>Search by name</p>
			<input
				type='search'
				value={value}
				onChange={(e) => onFilter(e.target.value)}
			/>
		</>
	);
}
