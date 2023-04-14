import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "hehe", age: "10" },
            { id: 2, name: "hkhk", age: "30" },
            { id: 3, name: "weww", age: "80" }
        ]
    }

    handleAddNewUser = (userObject) => {
        // let listUserClone = this.state.listUsers
        // listUserClone.unshift(userObject)
        // this.setState({
        //     listUsers: listUserClone
        // })
        this.setState({
            listUsers: [userObject, ...this.state.listUsers]
        })
    }
    handleDeleteUser = (userID) => {
        let listUsersClone = [...this.state.listUsers]
        listUsersClone = listUsersClone.filter(item => item.id !== userID)
        this.setState({
            listUsers: listUsersClone
        })
    }

    render() {
        // console.table(this.state.listUsers)

        return (
            <>
                <div>
                    <AddUserInfo handleAddNewUser={this.handleAddNewUser} /> <br /> <br />
                    <DisplayInfo
                        listUsers={this.state.listUsers}
                        handleDeleteUser={this.handleDeleteUser}
                    />
                </div>
            </>

        );
    }
}

export default MyComponent;