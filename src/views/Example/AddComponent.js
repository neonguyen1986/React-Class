import React from "react";

class AddComponent extends React.Component {
    state = {
        jobTitle: '',
        salary: '',
    }

    handleChangeJobTitle = (event) => {
        this.setState({
            jobTitle: event.target.value,
        })
    }


    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value,
        })
    }

    handleClick = (event) => {
        event.preventDefault()// tránh việc submit lên phía backend
        //alert('your name: ', this.state.jobTitle)// ko chạy đc
        console.log(this.state)
        if (!this.state.jobTitle || !this.state.salary) {
            alert('Missing required paramenters')
            return;
        }
        this.props.addNewJob({
            id: Math.floor(Math.random() * 100),
            title: this.state.jobTitle,
            salary: this.state.salary,
        })
        this.setState({
            jobTitle: '',
            salary: '',
        })

    }
    render() {
        return (
            <form>
                <label htmlFor="fname">Job Title:</label><br />
                <input
                    type="text"
                    value={this.state.jobTitle}
                    onChange={(event) => this.handleChangeJobTitle(event)} /><br />
                <label htmlFor="lname">Salary:</label><br />
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handleChangeSalary(event)} /><br /><br />
                <input
                    type="button"
                    value="Submit"
                    onClick={(event) => this.handleClick(event)} />
            </form>
        )
    }
}

export default AddComponent;