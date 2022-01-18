import { Component } from "react/cjs/react.production.min"


class Control extends Component{
    render(){
        console.log('render [Control]');

        return (
            <ul>
                <li><a href="/create" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('create');
                }.bind(this)}>create</a></li>
                <li><a href="/update" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('update');
                }.bind(this)}>update</a></li>
                <li><button type="button" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('delete');
                }.bind(this)}>delete</button></li>
            </ul>
           
        )
    }
}

export default Control;