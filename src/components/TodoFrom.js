import React, { useState } from 'react';

const TodoForm = () => {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    const handleTaskInputChange = (e) => {
        setTodo({ ...todo, task: e.target.value });
    }

    return (
        <form>
            <input name="task" type="text" value={todo.task} onChange={handleTaskInputChange} />
            <button type="submit"/>
        </form>
    )
};

export default TodoForm;