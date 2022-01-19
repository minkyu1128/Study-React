import React, {FormEvent, useState} from "react"


interface FormProps {
    onSubmit: (form: {title: string; desc: string}) => void
}

function CreateContent(props :any, {onSubmit}: FormProps) {
    const [form, setForm] = useState({
        title: '',
        desc: ''
    });

    /**
     * Form Submit EventHandler
     * @param e
     */
    const handleFormEvent = (e :FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log('target', e.target.title.value);
        e.currentTarget.title.toString();
        // 사이트 참조
        // https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/
        const target = e.target typeof e.target && ({

        });
        props.onSubmit(
            e.target.title.value,   //form 태그 내 name 속성 "title"로 접근
            e.target.desc.value     //form 태그 내 name 속성 "desc"로 접근
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