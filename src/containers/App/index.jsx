import React from 'react';

import config from '../../app.config.json'

import '../../../lib/semantic/dist/semantic.css';
import Header from '../../components/Header';
import Content from '../../components/Content';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header title={config.title} />
                <Content>
                    {this.props.children}
                </Content>
            </div>
        );
    }
}
