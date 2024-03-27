function TodoItem({ todo, toggleTodo }) {
    return (
        <li
            style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
            onClick={toggleTodo}
        >
            {todo.text}
        </li>
    );
}

export default TodoItem;
