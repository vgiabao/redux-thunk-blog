import React from "react";
import {fetchPostAndUsers} from "../actions";
import UserHeader from "./UserHeader";
import {connect} from "react-redux";

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPostAndUsers();

    }

    renderList() {
        return  this.props.posts.data ? this.props.posts.data.map(item => {
            return (<div className={'id'} key={item.id}><i className={'large middle aligned icon user'}/>
                <div className={'content'}>
                    <div className={'description'}>
                        <h2> {item.title}</h2>
                        <p> {item.body} </p>
                        <UserHeader  uid={item.userId}/>
                    </div>
                </div>
            </div>)
        }) : ''
    }

    render() {
        return <div className={'ui relaxed divided list'}> {this.renderList()} </div>
    }
}

const mapReduxStateToProp = (state) => {
    return {posts: state.posts};
}


export default connect(mapReduxStateToProp, {fetchPostAndUsers})(PostList)
