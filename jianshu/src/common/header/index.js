import React,{ Component } from 'react';

import { CSSTransition } from 'react-transition-group';

import { actionsCreators }  from './store';

import { connect } from 'react-redux';



import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from './style';

const Header = (props)=>{
    const { focused ,handleInputFocus ,handleInputBlur }  = props;
    return (
        <HeaderWrapper>
            <Logo/>
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <NavItem className="right">登陆</NavItem>
                <NavItem className="right"><span className="iconfont">&#xe636;</span></NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={focused}
                        timeout={200}
                        classNames="slide"
                    >
                    <NavSearch
                        className={focused ? 'focused':''}
                        onFocus={handleInputFocus}
                        onBlur = {handleInputBlur}
                    />
                    </CSSTransition>
                    <span className={focused ? 'focused iconfont':'iconfont'}>&#xe62b;</span>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className="writing">写文章</Button>
                <Button className="reg">注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}




// class Header extends Component{
//     render(){
//         return (
//         )
//     }
// }
const mapStateToProps = (state)=>{
    return {
        focused:state.header.focused
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        handleInputFocus(e){
           
            dispatch(actionsCreators.searchFocus());
            
    
        },
        handleInputBlur(e){
            dispatch(actionsCreators.searchBlur());
        } 
    }
}
// export default Header;
export default connect(mapStateToProps,mapDispatchToProps)(Header);