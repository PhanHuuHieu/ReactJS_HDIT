import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "hehe", age: "23" },
            { id: 2, name: "hkhk", age: "24" },
            { id: 3, name: "weww", age: "25" }
        ]
    }
    render() {

        return (
            <div>
                <UserInfo /> <br /> <br />
                <DisplayInfo
                    listUsers={this.state.listUsers}
                    users={this.state.listUsers} />
            </div>

        );
    }
}

export default MyComponent;