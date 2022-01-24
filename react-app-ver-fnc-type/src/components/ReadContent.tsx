import React, { Component } from "react"

interface Props{
    title:string,
    desc:string
}
const ReadContent = (props:Props) => {
    console.log('[render]', 'ReadContent');
    return (
        <article>
            <h2>{props.title}</h2>
            {props.desc}
        </article>
    )
}

export default React.memo(ReadContent);
