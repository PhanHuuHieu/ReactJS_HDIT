import React from "react";

class AddUserInfo extends React.Component {
    state = {
        name: "",
        address: "DBL",
        age: ''
    };

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + 'rd',
            name: this.state.name,
            age: this.state.age
        });
    }


    render() {
        return (
            <div>
                Name: {this.state.name} + {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Name: </label>
                    <input type="text"
                        value={this.state.name}
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />

                    <label>Age: </label>
                    <input type="text"
                        value={this.state.age}
                        onChange={(event) => this.handleOnChangeAge(event)}
                    />

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddUserInfo;