import React from "react";

function TodoItem(props) {
        return (
            <div>
                <hr/>
                <input 
                type="checkbox"
                checked={props.done}
                onChange={()=> {
                    props.handleChange(props.id)
                    console.log(props);
                }}/>
                <p>{props.text}</p>
                
            </div>
        )
}

export default TodoItem;