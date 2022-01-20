import './App.css';
import Subject from './components/Subject';
import Topic from './components/Topic';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Control from './components/Control';
import {useState} from "react";
asdfasdfasd
interface Content{
  id:number,
  title:string,
  desc?:string
}
function App():JSX.Element {
  const [mode, setMode] = useState('welcome');
  const [selected_content_id, setSelected_content_id] = useState(0);
  const [subject, setSubject] = useState({title: 'WEB', sub:'World Wide Web!'});
  const [welcomeDesc, setWelcomeDesc] = useState<Content>({id: 0, title: 'Welcome', desc: 'HTML is for information'});
  const [contents, setContents] = useState<Array<Content>>([
    {id: 1, title: 'HTML', desc: 'HTML is for information'},
    {id: 2, title: 'CSS', desc: 'CSS is for design'},
    {id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive'}
  ]);


  const getReadContent = (): Content =>{
    let i = 0;
    while(i < contents.length){
      let item:Content = contents[i];
      if(item.id === selected_content_id){
        return item;
      }
      i++;
    }

    return welcomeDesc;
  }

    const getContentByMode = () => {
        let _mode = mode;
        let _contentByMode = null;

        if (mode === 'welcome') {
            _contentByMode = <ReadContent title={welcomeDesc.title}
                                          desc={welcomeDesc.desc == null ? '' : welcomeDesc.desc}></ReadContent>;

        } else if (mode === 'read') {
            let i: number = 0;
            const _content: Content = getReadContent();
            _contentByMode =
                <ReadContent title={_content.title} desc={_content.desc == null ? '' : _content.desc}></ReadContent>;

        } else if (mode === 'create') {
            _contentByMode = <CreateContent
                onSubmit={function (title: string, desc: string) {

                    const item: Content = {
                        id: contents.length + 1,
                        title: title,
                        desc: desc
                    };
                    const _contents: Array<Content> = contents.concat(item); //원본 copy + push

                    setContents(_contents);
                    setMode('read');
                }}
            ></CreateContent>

        } else if (mode === 'update') {
            let _content = getReadContent();

            _contentByMode = <UpdateContent
                data={_content}
                onSubmit={function (content: Content) {
                    //console.log('update submit value is...', obj);

                    let _contents: Array<Content> = Array.from(contents);
                    let i: number = 0;
                    while (i < _contents.length) {
                        let item = _contents[i];
                        if (item.id === content.id) {  //일치하는 자료면..
                            item.title = content.title;
                            item.desc = content.desc;
                            break;
                        }
                        i++;
                    }

                    setContents(_contents);
                    setMode('read');

                }}
            ></UpdateContent>

        } else {
            setMode(_mode);

        }
        return _contentByMode;
    }
    return (
        <div className="App">
            <Subject title="WEB" sub="world wide web!!"
                     onChangePage={function(){
                         setMode('welcome');
                     }}
            ></Subject>
            <Topic
                data={contents}
                onChangePage={function(id:number){
                    setMode('read');
                    // console.log('id is', id, typeof id);
                    setSelected_content_id(Number(id)); //id type을 number로 지정 했음에도 string으로 넘어와 Number()함수를 사용하여 Cast
                }}
            ></Topic>
            <Control onChangeMode={function(mode:string){

                if(mode === 'delete'){   //삭제 모드이면..
                    if(!window.confirm('정말 삭제하시겠습니까??'))
                        return false;

                    // 일치하는 자료 찾기
                    let _contents:Array<Content> = Array.from(contents);
                    let i = 0;
                    while(i < _contents.length){
                        if(_contents[i].id === selected_content_id){  //일치하는 자료면..
                            _contents.splice(i, 1); //발견한 index로부터 1번째까지 삭제
                            break;
                        }
                        i++;
                    }

                    //적용
                    setContents(_contents);
                    setMode('welcome');

                    alert('deleted');

                } else {  //삭제 모드가 아니면..
                    setMode(mode);
                }

            }}></Control>

            {getContentByMode()}
        </div>
    )

}

export default App;
