import React,{ Component,Fragment } from 'react';

// import { GlobalStyle } from "./style";
import { Provider } from 'react-redux';


import { GlobalStyle } from './statics/iconfont/iconfont';
import Header from './common/header/index';

import { BrowserRouter,Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';
import store from './store';

class App extends Component {
  render(){
    return (
      <Fragment>
        <Provider store={store}>
        <GlobalStyle/>
        <BrowserRouter>
          <div>
            <Header/>
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/write' exact component={Write}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
          </div>
        </BrowserRouter>
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
