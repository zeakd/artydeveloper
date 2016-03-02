import React from 'react';
import { Link } from 'react-router';

export default class StoryPreview extends React.Component {
    render() {
        const { title, html, date, href } = this.props;
        return (
            <li>
                <Link to={href}>
                    <h2>{title}</h2>
                    <div dangerouslySetInnerHTML={{__html : html}} />
                </Link>
                <time dateTime={date || Date()} />
            </li>
        );
    }
}
