import React from "react";

class DisplayInfo extends React.Component {
    render() {
        const { listUsers } = this.props
        return (
            <div>
                {listUsers.map((user, index) => {
                    return (
                        <div key={user.id}>
                            <div>Name: {user.name}</div>
                            <div>age: {user.age}</div>
                            <hr />
                        </div>
                    )
                })}

            </div>
        )
    }
}

export default DisplayInfo