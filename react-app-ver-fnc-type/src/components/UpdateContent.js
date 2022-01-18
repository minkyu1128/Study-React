import { Component } from "react"


class UpdateContent extends Component{
    static defaultProps = {
    }

    constructor(props){
      super(props);
      this.state = {
        id: this.props.data.id,
        title: this.props.data.title,
        desc: this.props.data.desc
      }

      this.inputFormHandler = this.inputFormHandler.bind(this); //this 주입
    }
    
    inputFormHandler(e){
        //console.log(e.target.value);
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        console.log('render [UpdateContent]');
          
        return (    
            <article>
                <h2>Update</h2>
                <form onSubmit={function(e){
                    e.preventDefault();
                    this.props.onSubmit(
                        this.state
                    );
                }.bind(this)}>
                    <p>
                        <input 
                            type="text" 
                            name="title" 
                            placeholder="title" 
                            value={this.state.title}
                            /* 방법. 1 */
                            // onChange={function(e){
                            //     //console.log(e.target.value);
                            //     this.setState({title: e.target.value});
                            // }.bind(this)}
                            /* 방법. 2 */
                            onChange={this.inputFormHandler}
                        ></input>
                    </p>
                    <p>
                        <textarea 
                            name="desc" 
                            placeholder="description" 
                            value={this.state.desc}
                            onChange={this.inputFormHandler}
                        ></textarea>
                    </p>
                    <p>
                        <input type="submit"></input>
                    </p>
                </form>
            </article>
        )
    }
}

export default  UpdateContent;