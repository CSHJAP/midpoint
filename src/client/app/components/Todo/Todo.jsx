import React, {Component} from "react";
import {observer} from "mobx-react";

import style from "./Todo.css"

const Todo = observer(({todo}) => (
    <li className={style.red}>
        <input type="checkbox" checked={todo.finished} onClick={() => (todo.finished = !todo.finished)}/> {todo.title}
    </li>
));

export default Todo;
