import React, {Component} from "react";
// import {observer} from "mobx-react";

import style from "./Landing.css"
import TodoList from "../TodoList";
import TodoListModel from "../../models/TodoListModel";
import TodoModel from "../../models/TodoModel";
import TitleBlock from "../TitleBlock/TitleBlock";

const store = new TodoListModel();
store.addTodo("Get Coffee");
store.addTodo("Write simpler code");
store.todos[0].finished = true;

setTimeout(() => {
    store.addTodo("Get a cookie as well");
}, 2000);

// playing around in the console
window.store = store;

class Landing extends React.Component {

    render() {
        return (
            <div className={style.landingFrame}>
                <TitleBlock />
                <TodoList store={store}/>
            </div>
        );
    }

}

export default Landing;
