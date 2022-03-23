import React from "react";
import {fetchPosts} from "../actions";
import {connect} from "react-redux";

class PostList extends React.Component {

    render() {
        console.log(this.props.fetchPosts)
        return <div> Post List </div>
    }
}

const mapReduxStateToProp = (state) => {
    return state;
}


export default connect(null, {fetchPosts})(PostList)
