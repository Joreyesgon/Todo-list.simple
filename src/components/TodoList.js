import React, { useState } from 'react';
import '../App.css';

const TodoList = () => {
    const [listTask, setListTask] = useState([]);
    const [task, setTask] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        setListTask([...listTask, task]);
    };
    const handleChange = (e) => {
        setTask(e.target.value);
    };
    const deleteTask = (key) => {
        setListTask(listTask.filter((item, index) => index !== key));
        console.log(key);
    };

    return (
        <div className="todo-list">
            <h1>Todo List</h1>
            <div className="container">
                <form onSubmit={onSubmit}>
                    <div className="col-md-8 mx-auto" >
                        <div className="input-group">
                            <input type="text" className="form-control" value={task} onChange={handleChange} placeholder="Enter a task" />
                        </div>
                        <ul className="list-group">
                            {
                                listTask.map((li, key) => <li className="list-group-item" key={key} >{li}<span className="close" onClick={() => deleteTask(key)}>X</span></li>)
                            }
                        </ul>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TodoList;
