import { Component } from "react/cjs/react.production.min"


class CreateContent extends Component{
    render(){
        console.log('render [CreateContent]');
        
        return (    
            <article>
                <h2>Create</h2>
                <form onSubmit={function(e){
                    e.preventDefault();
                    this.props.onSubmit(
                        e.target.title.value,   //form 태그 내 name 속성 "title"로 접근
                        e.target.desc.value     //form 태그 내 name 속성 "desc"로 접근
                    );
                }.bind(this)}>
                    <p>
                        <input type="text" name="title" placeholder="title"></input>
                    </p>
                    <p>
                        <textarea name="desc" placeholder="description"></textarea>
                    </p>
                    <p>
                        <input type="submit"></input>
                    </p>
                </form>
            </article>
        )
    }
}

export default  CreateContent;