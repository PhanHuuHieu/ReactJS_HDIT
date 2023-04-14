import React from "react";
import './DisplayInfo.scss'
import logo from './../logo.svg'
class DisplayInfo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isShowListUser: true
        }
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        const { listUsers } = this.props
        return (
            <div className="display-info-container">
                {/* <img src={logo} /> */}
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser == true ? "Hide list user: " : "Show list user: "}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <>
                        {listUsers.map((user, index) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>
                                        <div>Name: {user.name}</div>
                                        {/* style={{ color: 'black', paddingTop: "50px" }} */}
                                        <div>age: {user.age}</div>
                                    </div>
                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
                                    </div>
                                </div>


                            )

                        })}
                    </>
                }
            </div>
        )
    }
}

export default DisplayInfo