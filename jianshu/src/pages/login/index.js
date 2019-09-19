
import React ,{ Component } from 'react';

import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import { actionsCreators } from './store';
import { 
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style';

class Login extends Component {

    render (){
        const { loginStatus } = this.props;
        if(!loginStatus){
            return (
                <LoginWrapper> 
                    <LoginBox>
                        <Input placeholder='账号' ref={(input)=>{this.account=input}} />
                        <Input placeholder="密码" type='password' ref={(input)=>{this.password=input}}/>
                        <Button onClick={()=>this.props.login(this.account,this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
             );
        }else{
            return <Redirect to='/'/>
        }
        
    }
    componentDidMount(){
       
    }
}

const mapState = (state)=>({
   loginStatus:state.getIn(['login','login'])
});
const mapDispatch = (dispatch)=>({
    login(inputEle,passwordEle){
        dispatch(actionsCreators.login(inputEle.value,passwordEle.value))
    }
   
})
export default connect(mapState,mapDispatch)(Login);