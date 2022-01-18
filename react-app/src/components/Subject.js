import { Component } from "react/cjs/react.production.min"


class Subject extends Component{
    render(){
        console.log('render [Subject]');

        return (
            <header>
                <h1><a href="#"onClick={function(e){
                        e.preventDefault(); //default Event 중지
                        this.props.onChangePage();  //props(attribute)에 정의된 "onChangePage()" 함수 호출
                    }.bind(this)}
                    >{this.props.title}</a>
                </h1>
                {this.props.sub}
            </header>
        )
    }
}

export default Subject;