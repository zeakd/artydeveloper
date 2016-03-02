import React from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import StoryPreview from '../../components/StoryPreview';
import { fetchPosts } from '../../actions/posts';

export default class Blog extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchPosts());
    }

    render() {
        const { dispatch, push, posts } = this.props;
        return (
            <div>
                <h2> Blog! </h2>
                <button 
                    className="ui button" 
                    onClick={() => dispatch(push('/editor'))}
                >
                    Post
                </button>
                <ul>
                    {posts.items.map((post) => {
                        return <StoryPreview 
                                    title={post.title}
                                    html={post.html}
                                    href={`/blog/${post.slug}`}
                                    key={post.id}
                               />
                    })}
                </ul>
            </div>
        );
    }
}

function mapState(state) {
    return {
        push: routeActions.push,
        posts: state.posts
    }
}

export default connect(mapState)(Blog);