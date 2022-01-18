import { Component } from "react"


class Topic extends Component{
    render(){
        console.log('render [Topic]');
        var data = this.props.data;

        //방법1. 배열출력
        var lists = [];
        var i = 0;
        while(i < data.length){
            lists.push(
                <li key={data[i].id}>
                    <a 
                        data-id={data[i].id}    //data 속성에 "id" 추가
                        href={"/content/"+data[i].id} 
                        onClick={function(arg1, arg2, e){
                            console.log('Topic Click => ', arg1, arg2);
                            e.preventDefault(); //default Event 중지
                            this.props.onChangePage(e.target.dataset.id); //props(attribute)에 정의된 "onChangePage()" 함수 호출
                        }.bind(this, 'arg1Val', 'arg2Val')}
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
    }
}

export default Topic;