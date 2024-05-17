import Task from '../Task';

export default function TaskList({ tasks, onDelete }) {
	return (
		<ul>
			{tasks.map((task) => (
				<li key={task.id}>
					<Task task={task} onDelete={onDelete} />
				</li>
			))}
		</ul>
	);
}
