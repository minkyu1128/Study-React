import { Component } from "react"

interface Props{
    onChangePage: ()=>void
    title:string
    sub:string
}
function Subject(props:Props){
    return (
        <header>
            <h1><a href="#"onClick={function(e){
                e.preventDefault(); //default Event 중지
                props.onChangePage();  //props(attribute)에 정의된 "onChangePage()" 함수 호출
            }}
            >{props.title}</a>
            </h1>
            {props.sub}
        </header>
    )
}

export default Subject;
