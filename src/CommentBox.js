import React from 'react';

function CommentBox({ setComment }) {

    function handleChange(e) {
        e.preventDefault();
        setComment(e.target.value);
    }

    return (
        <div>
            <input onChange={handleChange} type="text" placeholder="Enter your comment here..."></input>
        <div>
            
        </div>
        
        </div>
    )
}

export default CommentBox;