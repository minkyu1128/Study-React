//import logo from './logo.svg';
import './App.css';
import { Component } from 'react/cjs/react.production.min';
import Subject from './components/Subject';
import Topic from './components/Topic';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Control from './components/Control';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: 'welcome',
      selected_content_id: 0,
      subject:{title: 'WEB', sub:'World Wide Web!'},
      welcomeDesc: {title: 'Welcome', desc: 'HTML is for information'},
      contents:[
        {id: 1, title: 'HTML', desc: 'HTML is for information'},
        {id: 2, title: 'CSS', desc: 'CSS is for design'},
        {id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive'}
      ]
    }
  }

  getReadContent(){
    var i = 0;
    while(i < this.state.contents.length){
      var item = this.state.contents[i];
      if(item.id === this.state.selected_content_id){          
        return item;
      }
      i++;
    }
  }

  getContentByMode(){
    var _mode = this.state.mode;
    var _title = null;
    var _desc = null;
    var _contentByMode = null;

    if(this.state.mode === 'welcome'){
      _title = this.state.welcomeDesc.title;
      _desc = this.state.welcomeDesc.desc;
      _contentByMode = <ReadContent title={_title} desc={_desc}></ReadContent>;

    }else if(this.state.mode === 'read'){
      var i = 0;
      var _content = this.getReadContent();  
      _contentByMode = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>;

    }else if(this.state.mode === 'create'){
      _contentByMode = <CreateContent 
        onSubmit={function(title, desc){
        
          var item = {
              id: this.state.contents.length+1,
              title: title,
              desc: desc
          };
          var _contents = this.state.contents.concat(item); //원본 copy + push
          this.setState({
            contents: _contents,
            mode: 'read'
          });
        }.bind(this)}
      ></CreateContent>

    }else if(this.state.mode === 'update'){  
      var _content = this.getReadContent();  

      _contentByMode = <UpdateContent
        data={_content} 
        onSubmit={function(obj){
          //console.log('update submit value is...', obj);

          var _contents = Array.from(this.state.contents);
          var i = 0;
          while(i < _contents.length){
            var item = _contents[i];
            if(item.id === obj.id){  //일치하는 자료면..
              item.title = obj.title;
              item.desc = obj.desc;
              break;
            }
            i++;
          }
          
          this.setState({
            contents: _contents,
            mode: 'read'
          });


        }.bind(this)}
      ></UpdateContent>

    }else{
      this.setState({
        mode: _mode
      });

    }

    return _contentByMode;
  }

  render(){
    console.log('render [App]');
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!!"
          onChangePage={function(){
            this.setState({
              mode: 'welcome'
            });
          }.bind(this)}
        ></Subject>
        <Topic 
          data={this.state.contents}
          onChangePage={function(id){
            this.setState({
              mode: 'read',
              selected_content_id:Number(id)
            });
          }.bind(this)}
        ></Topic>
        <Control onChangeMode={function(mode){

          if(mode === 'delete'){   //삭제 모드이면..
            if(!window.confirm('정말 삭제하시겠습니까??'))
              return false;
      
            // 일치하는 자료 찾기
            var _contents = Array.from(this.state.contents);
            var i = 0;
            while(i < _contents.length){
              if(_contents[i].id === this.state.selected_content_id){  //일치하는 자료면..
                _contents.splice(i, 1); //발견한 index로부터 1번째까지 삭제
                break;
              }
              i++;
            }
      
            //적용
            this.setState({
              contents: _contents,
              mode: 'welcome'
            });

            alert('deleted');

          } else {  //삭제 모드가 아니면..
            this.setState({
              mode: mode
            });
          }

        }.bind(this)}></Control>

        {this.getContentByMode()}
      </div>
    );
  }
}

export default App;
