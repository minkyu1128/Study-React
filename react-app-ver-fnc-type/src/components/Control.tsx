import React from "react"


function Control(props: any) {

    return (
        <ul>
            <li><a href="/create" onClick={function(e){
                e.preventDefault();
                props.onChangeMode('create');
            }}>create</a></li>
            <li><a href="/update" onClick={function(e){
                e.preventDefault();
                props.onChangeMode('update');
            }}>update</a></li>
            <li><button type="button" onClick={function(e){
                e.preventDefault();
                props.onChangeMode('delete');
            }}>delete</button></li>
        </ul>

    )
}

export default Control;