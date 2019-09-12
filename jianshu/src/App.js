import React,{ Component,Fragment } from 'react';

// import { GlobalStyle } from "./style";
import { Provider } from 'react-redux';

import store from './store';
import { GlobalStyle } from './statics/iconfont/iconfont';
import Header from './common/header/index';
class App extends Component {
  render(){
    return (
      <Fragment>
        <Provider store={store}>
        <GlobalStyle/>
        <Header/>
        </Provider>
      </Fragment>
    );
  }
  
}
// function App() {
//   return (
//     <div>
//       <GlobalStyle/>
//       <Header/>
//     </div>
//   );
// }

export default App;
