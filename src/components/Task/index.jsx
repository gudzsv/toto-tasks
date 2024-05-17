export default function Task({ task: { id, text }, onDelete }) {
	return (
		<>
			<p>{text}</p>
			<button
				type='button'
				aria-label='delete-button'
				onClick={() => onDelete(id)}
			>
				Delete
			</button>
		</>
	);
}
