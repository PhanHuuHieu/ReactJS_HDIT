import React from "react";

class UserInfo extends React.Component {
    state = {
        name: "HP",
        address: "DBL",
        age: 25
    };
    // handleClick(event) {
    //     console.log(this.state.name)
    //     this.setState({
    //         name: "meomeo",
    //         age: Math.floor((Math.random() * 100) + 1)
    //     })
    // }
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
        console.log(this.state)
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

export default UserInfo;