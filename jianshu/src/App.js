import React,{ Component,Fragment } from 'react';

// import { GlobalStyle } from "./style";
import { Provider } from 'react-redux';


import { GlobalStyle } from './statics/iconfont/iconfont';
import Header from './common/header/index';

import { BrowserRouter,Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
import store from './store';

class App extends Component {
  render(){
    return (
      <Fragment>
        <Provider store={store}>
        <GlobalStyle/>
        <div>
        <Header/>
        <BrowserRouter>
          <div>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </div>
        </BrowserRouter>
        </div>
        </Provider>
      </Fragment>
    );
  }
  
}
/**
BrowserRouter 是一个一个的路由，route 是规则

exact 关键词是对应路径对的话就跳
<Route path="/" exact render={()=><div>home</div>}></Route>
<Route path="/detail" exact render={()=><div>detail</div>}></Route>

import Home from './pages/home';
import Detail from './pages/detail';

*/ 
// function App() {
//   return (
//     <div>
//       <GlobalStyle/>
//       <Header/>
//     </div>
//   );
// }

export default App;
