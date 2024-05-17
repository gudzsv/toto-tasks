import { useState } from 'react';

import Form from './components/Form';
import Filter from './components/Filter';
import TaskList from './components/TaskList';

import initialTasks from './data/initialTasks.json';

import './App.css';

function App() {
	const [tasks, setTasks] = useState(initialTasks);
	const [filter, setFilter] = useState('');

	const onAddTask = (newTask) => {
		setTasks((prevTasks) => {
			return [...prevTasks, newTask];
		});
	};

	const onDelete = (id) => {
		setTasks((prevTasks) => {
			return prevTasks.filter((task) => task.id !== id);
		});
	};

	const visibleTasks = tasks.filter((task) =>
		task.text.toLowerCase().includes(filter.toLowerCase())
	);

	return (
		<>
			<Form onAddTask={onAddTask} />
			<hr />
			<Filter value={filter} onFilter={setFilter} />
			<hr />
			<TaskList tasks={visibleTasks} onDelete={onDelete} />
		</>
	);
}

export default App;
