import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Loading(props) {
    return (
        <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    );
}
export default Loading;