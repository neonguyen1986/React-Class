import React from "react";
import './ListToDo.scss'
import AddTodo from './AddTodo';
import { ToastContainer, toast } from 'react-toastify';


class ListToDo extends React.Component {
    state = {
        listToDos: [
            { id: 'todo 1', title: 'Doing homework' },
            { id: 'todo 2', title: 'Coding' },
            { id: 'todo 3', title: 'Testing charts' }
        ],
        editTodo: {}
    }
    addNewTodo = (todo) => {
        this.setState({
            listToDos: [...this.state.listToDos, todo]
        })
        toast.success("You've just add new item!")
    }

    handleRemoveTodo = (todo) => {
        toast.success("You've just remove " + todo.title)
        let tempListTodo = this.state.listToDos
        tempListTodo.splice(tempListTodo.indexOf(todo), 1)
        this.setState({
            listToDos: tempListTodo
        })
    }

    handleEditTodo = (todo) => {
        let { listToDos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodoCopy = [...listToDos];
            let objIndex = listTodoCopy.findIndex((item => item.id === todo.id));
            //Update object's name property
            listTodoCopy[objIndex].title = editTodo.title;
            this.setState({
                listToDos: listTodoCopy,
                editTodo: {}

            })
            toast.success("Update todo succeed!")
            return;
        }
        //edit
        this.setState({
            editTodo: todo
        })

    }

    handleOnChangeTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo }// cách gán lại một object
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listToDos, editTodo } = this.state;
        console.log("edit To Do", editTodo)
        //aternative use: listToDos = this.state.ListToDos

        let isEmptyObj = Object.keys(editTodo).length === 0 //true: hàm kiểm tra object có bị blank ko
        return (
            <>
                <div className="list-todo-container">
                    <AddTodo
                        addNewTodo={this.addNewTodo} />
                    {/* display content of TODO list */}
                    <div className="list-todo-content">
                        {listToDos && listToDos.length > 0 &&
                            listToDos.map((item, index) => {
                                return (
                                    <>
                                        <div className="todo-child" key={item.id}>
                                            {isEmptyObj ?
                                                <span>{index + 1}-{item.title}</span>
                                                :
                                                <>
                                                    {editTodo.id === item.id ?
                                                        <>
                                                            <span>{index + 1}-</span>
                                                            <input
                                                                value={editTodo.title}
                                                                onChange={(event) => this.handleOnChangeTodo(event)}
                                                            />
                                                        </>
                                                        :
                                                        <span>{index + 1}-{item.title}</span>
                                                    }
                                                </>

                                            }
                                            <button className="edit" onClick={() => this.handleEditTodo(item)}>
                                                {isEmptyObj === false && editTodo.id === item.id ?
                                                    'Save' : 'Edit'
                                                }
                                            </button>

                                            <button
                                                className="delete"
                                                onClick={() => this.handleRemoveTodo(item)}
                                            >Delete
                                            </button>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div >
                </div>
            </>
        )
    }
}


export default ListToDo;