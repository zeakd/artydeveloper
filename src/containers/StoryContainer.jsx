import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import Story from '../components/Story';

class StoryContainer extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchPosts());
    }

    render() {
        return (
            <Story />
        );
    }
}

export default connect()(StoryContainer);