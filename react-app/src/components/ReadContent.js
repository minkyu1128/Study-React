import { Component } from "react/cjs/react.production.min"


class ReadContent extends Component{
    render(){
        console.log('render [ReadContent]');
        
        return (  
            <article>
                <h2>{this.props.title}</h2>
                {this.props.desc}
            </article>
        )
    }
}

export default ReadContent;