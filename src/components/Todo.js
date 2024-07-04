import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons'
import './index.css'

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => (
  <div className="Todo">
    <h1
      onClick={() => toggleComplete(task.id)}
      className={`${task.completed ? 'completed' : ''}`}
    >
      {task.task}
    </h1>
    <div className="color">
      <FontAwesomeIcon
        icon={faPenToSquare}
        className="icon"
        onClick={() => editTodo(task.id)}
      />
      <FontAwesomeIcon
        icon={faTrash}
        className="icon"
        onClick={() => deleteTodo(task.id)}
      />
    </div>
  </div>
)
