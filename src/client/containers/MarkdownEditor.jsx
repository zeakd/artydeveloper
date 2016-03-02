import React from 'react';
import marked from 'marked';
import './MarkdownEditor.scss';

export default class MarkdownEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: this.props.helloMessage
        }
    }

    render() {
        return (
            <div className='markdown-editor'>
                <div className='editor'>
                    <button onClick={this.submit.bind(this)}>submit</button>
                    <textarea 
                        onInput={this.handleTextareaChange.bind(this)} 
                        defaultValue={this.props.helloMessage}
                    />
                </div>
                <div className='preview'>
                    <div 
                        dangerouslySetInnerHTML={{ __html: marked(this.state.markdown, {sanitize: true})}} 
                    />
                </div>
            </div>
        );
    }

    handleTextareaChange(e) {
        this.setState({markdown: e.target.value});
    }

    submit() {
        fetch('/api/posts', { 
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'test',
                markdown: this.state.markdown,
                html: marked(this.state.markdown, {sanitize: true})
            })    
        })
        
    }
}

MarkdownEditor.defaultProps = {
    helloMessage: "# Welcome to Editor"
}