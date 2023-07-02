import React from "react";
import { ToastContainer, toast } from 'react-toastify';

class AddTodo extends React.Component {
    state = {
        title: ''
    }

    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleClick = () => {
        if (!this.state.title) {//title undefined/null->false =>!... = true
            toast.error("Nothing to add")
            return;
        }

        this.props.addNewTodo({
            id: Math.floor(Math.random() * 1000),
            title: this.state.title,
        })

        this.setState({
            title: ''
        })
    }

    render() {
        let { title } = this.state;
        return (
            <div className="add-todo" >
                <input
                    type="text"
                    value={title}
                    onChange={(event) => this.handleOnChangeTitle(event)}
                />
                <button
                    className="add"
                    type="button"
                    onClick={() => this.handleClick()}>Add</button>
            </div >
        )
    }

}

export default AddTodo;