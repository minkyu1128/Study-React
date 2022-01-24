import React, {FormEvent, useState} from "react"


interface FormProps {
    onSubmit: (form: {title: string; desc: string}) => void
}

function CreateContent(props :any, {onSubmit}: FormProps) {
    console.log('[render]', 'CreateContent');

    const [form, setForm] = useState({
        title: '',
        desc: ''
    });

    /**
     * Form Submit EventHandler
     * @param e
     */
    // const handleFormEvent = (e :FormEvent<HTMLFormElement>) => {
    const handleFormEvent = (e :any) => {
        e.preventDefault();

        // 사이트 참조
        // https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/
        //Get Element value from Form
        const target = e.target as typeof e.target & {
            title: {value:string};
            desc:{value:string};
        }
        //Call Parent of EventListener
        props.onSubmit(
            target.title.value,   //form 태그 내 name 속성 "title"로 접근
            target.desc.value     //form 태그 내 name 속성 "desc"로 접근
        );
    }


    return (
        <article>
            <h2>Create</h2>
            <form onSubmit={handleFormEvent}>
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

export default  CreateContent;