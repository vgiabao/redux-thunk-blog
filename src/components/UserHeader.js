import React from "react";
import {connect} from "react-redux";

class UserHeader extends React.Component {

    render() {
        return <div> Author: {this.props.user?.name}</div>
    }
}

const mapStateToProp = (state, ownProps) => {
    return {user: state.users.find(user => user.id === ownProps.uid)}
}


export default connect(mapStateToProp)(UserHeader)

