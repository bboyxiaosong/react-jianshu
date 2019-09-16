import React , { Component }from 'react';

import { CSSTransition } from 'react-transition-group';

import { actionsCreators }  from './store';

import { connect } from 'react-redux';



import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
    Addition,
    Button,
    SearchWrapper
} from './style';

// const getListArea = (show)=>{
//     if(show){
//         return (
//             <SearchInfo>
//             <SearchInfoTitle>
//                 热门搜索
//                 <SearchInfoSwitch>
//                 换一批
//                 </SearchInfoSwitch>
//             </SearchInfoTitle>
        
//             <SearchInfoList>
//                 <SearchInfoItem>教育</SearchInfoItem>
//                 <SearchInfoItem>教育</SearchInfoItem>
//                 <SearchInfoItem>教育</SearchInfoItem>
//                 <SearchInfoItem>教育</SearchInfoItem>
//                 <SearchInfoItem>教育</SearchInfoItem>
//                 <SearchInfoItem>教育</SearchInfoItem>
//                 <SearchInfoItem>教育</SearchInfoItem>
//                 <SearchInfoItem>教育</SearchInfoItem>
//                 <SearchInfoItem>教育</SearchInfoItem>
//                 <SearchInfoItem>教育</SearchInfoItem>
//             </SearchInfoList>
//         </SearchInfo>
//         );
//     }else{
//         return null;
//     }
// }

// const Header = (props)=>{
//     const { focused ,handleInputFocus ,handleInputBlur }  = props;
//     return (
//         <HeaderWrapper>
//             <Logo/>
//             <Nav>
//                 <NavItem className="left active">首页</NavItem>
//                 <NavItem className="left">下载App</NavItem>
//                 <NavItem className="right">登陆</NavItem>
//                 <NavItem className="right"><span className="iconfont">&#xe636;</span></NavItem>
//                 <SearchWrapper>
//                     <CSSTransition
//                         in={focused}
//                         timeout={200}
//                         classNames="slide"
//                     >
//                     <NavSearch
//                         className={focused ? 'focused':''}
//                         onFocus={handleInputFocus}
//                         onBlur = {handleInputBlur}
//                     />
//                     </CSSTransition>
//                     <span className={focused ? 'focused iconfont':'iconfont'}>&#xe62b;</span>
//                    {getListArea(focused ? 'focused':'')}
//                 </SearchWrapper>
//             </Nav>
//             <Addition>
//                 <Button className="writing">写文章</Button>
//                 <Button className="reg">注册</Button>
//             </Addition>
//         </HeaderWrapper>
//     )
// }

class Header extends Component{
    getListArea (){
        if(this.props.focused){
            return (
                <SearchInfo>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch>
                    换一批
                    </SearchInfoSwitch>
                </SearchInfoTitle>
            
                <SearchInfoList>
                   {
                       this.props.list.map((item)=>{
                           return(<SearchInfoItem key={item}>{item}</SearchInfoItem>)
                       })
                    }
                   
                </SearchInfoList>
            </SearchInfo>
            );
        }else{
            return null;
        }
    }
    render(){
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
                        in={this.props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                    <NavSearch
                        className={this.props.focused ? 'focused':''}
                        onFocus={this.props.handleInputFocus}
                        onBlur = {this.props.handleInputBlur}
                    />
                    </CSSTransition>
                    <span className={this.props.focused ? 'focused iconfont':'iconfont'}>&#xe62b;</span>
                   {this.getListArea(this.props.focused ? 'focused':'')}
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className="writing">写文章</Button>
                <Button className="reg">注册</Button>
            </Addition>
        </HeaderWrapper>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        focused:state.get('header').get('focused'),
        list:state.getIn(['header','list'])
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        handleInputFocus(e){
           
            dispatch(actionsCreators.getList());
            dispatch(actionsCreators.searchFocus());
    
        },
        handleInputBlur(e){
            dispatch(actionsCreators.searchBlur());
        } 
    }
}
// export default Header;
export default connect(mapStateToProps,mapDispatchToProps)(Header);