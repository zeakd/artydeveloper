/* 
 * Example for component that include client only component
 */

import React from 'react';

import ImageUploader from '../ImageUploader';
import MarkdownEditor from '../../client/containers/MarkdownEditor';


export default class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstRender: true
        }
    }

    render() {
        return (
            <div>
                <ImageUploader />
                {this.state.firstRender ? 
                    null : <MarkdownEditor />}
                
            </div>
        );
    }

    componentDidMount() {
        this.setState({firstRender: false});
    }
}
