import { Component } from "react"

interface Props{
    title:string,
    desc:string
}
function ReadContent(props:Props){
    return (
        <article>
            <h2>{props.title}</h2>
            {props.desc}
        </article>
    )
}

export default ReadContent;
