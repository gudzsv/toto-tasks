export default function Form({ onAddTask }) {
	const handleSubmit = (evt) => {
		evt.preventDefault();
		onAddTask({
			id: Date.now(),
			text: evt.target.elements.task.value,
		});

		evt.target.reset();
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type='text' name='task'></input>
			<button type='submit'>Add task</button>
		</form>
	);
}
