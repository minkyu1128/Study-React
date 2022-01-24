import React, { Component } from "react"

interface Props{
    onChangePage: ()=>void
    title:string
    sub:string
}
const Subject = (props:Props) => {
    console.log('[render]', 'Subject');
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

export default React.memo(Subject);
