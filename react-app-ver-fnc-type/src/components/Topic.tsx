import React, { Component } from "react"

interface Content{
    id:number,
    title:string,
    desc?:string
}
interface Props{
    data: Array<Content>
    onChangePage: (id:number)=>void
}
const Topic = React.memo(function Topic (props:Props) {
    console.log('[render]', 'Topic');
    console.log('props', props);

    let data:Array<Content> = props.data;

    //방법1. 배열출력
    let lists = [];
    let i:number = 0;
    while(i < data.length){
        lists.push(
            <li key={data[i].id}>
                <a
                    data-id={data[i].id}    //data 속성에 "id" 추가
                    href={"/content/"+data[i].id}
                    onClick={function(e: any){
                        e.preventDefault(); //default Event 중지
                        props.onChangePage(e.target.dataset.id); //props(attribute)에 정의된 "onChangePage()" 함수 호출
                    }}
                >{data[i].title}</a>
            </li>);
        i++;
    }

    return (
        <nav>
            <ul>
                {/*  방법1. 배열출력 */}
                {lists}


                {/*  방법2. 배열출력 */}
                {/* {data.map(element => (
                        <li><a href={"/content/"+element.id}>{element.title}</a></li>
                    ))} */}
            </ul>
        </nav>
    )
})

export default Topic;