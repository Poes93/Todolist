import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo }) {
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    toggleTodo={() => toggleTodo(index)}
                />
            ))}
        </ul>
    );
}

export default TodoList;
