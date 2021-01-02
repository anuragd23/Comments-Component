import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div classNmae="ui container comments">
            <CommentDetail></CommentDetail>
        </div>

    );
};

ReactDOM.render(<App />, document.querySelector('#root'))

