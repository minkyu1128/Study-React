import {Component, FormEvent, useState} from "react"

interface Content{
    id:number,
    title?:string,
    desc?:string
}
interface Props{
    data:Content
    onSubmit(content: any): void;
}
function UpdateContent(props:Props){
    console.log('[render]', 'UpdateContent');


    const [state, setState] = useState<Content>({id: props.data.id, title: props.data.title, desc:props.data.desc});

    const inputFormHandler = (e:any ) => {
        let _state:Content = Object.assign({}, state);
        // @ts-ignore
        _state[e.target.name] = e.target.value==null?'':e.target.value;
        setState(_state);
    }
    const handleFormEvent = (e :FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSubmit(
            state
        );
    }

    return (
        <article>
            <h2>Update</h2>
            <form onSubmit={handleFormEvent}>
                <p>
                    <input
                        type="text"
                        name="title"
                        placeholder="title"
                        value={state.title}
                        /* 방법. 1 */
                        // onChange={function(e){
                        //     //console.log(e.target.value);
                        //     setState({title: e.target.value});
                        // }.bind(this)}
                        /* 방법. 2 */
                        onChange={inputFormHandler}
                    ></input>
                </p>
                <p>
                    <textarea
                        name="desc"
                        placeholder="description"
                        value={state.desc}
                        onChange={inputFormHandler}
                    ></textarea>
                </p>
                <p>
                    <input type="submit"></input>
                </p>
            </form>
        </article>
    )

}

export default  UpdateContent;