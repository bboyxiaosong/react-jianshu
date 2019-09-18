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
    // constructor(props){
    //     super(props);
    //     const {handleInputFocus} = this.props;
    // }
    getListArea (){
        const { totalPage,list,page ,handleMouseEnter,handleMouseLeave,mouseIn,handleChangePage} = this.props;
        const newList = list.toJS();
        const pageList  = [];
        if(newList.length){
            for(let i = (page -1)*10;i< page*10;i++){
                pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>);
            }
        }
        

        if(this.props.focused || mouseIn){
            return (
                <SearchInfo 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}>
                        换一批
                        <span ref={(icon)=>{this.spinIcon=icon}} className="iconfont spin">&#xe606;</span>
                    </SearchInfoSwitch>
                </SearchInfoTitle>
            
                <SearchInfoList>
                   {/* {
                       this.props.list.map((item)=>{
                           return(<SearchInfoItem key={item}>{item}</SearchInfoItem>)
                       })
                    } */}
                   {pageList}
                </SearchInfoList>
            </SearchInfo>
            );
        }else{
            return null;
        }
    }
    render(){
        const {handleInputFocus,list} = this.props;
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
                        onFocus={()=>handleInputFocus(list)}
                        onBlur = {this.props.handleInputBlur}
                    />
                    </CSSTransition>
                    <span className={this.props.focused ? 'focused iconfont zoom':'iconfont zoom'}>&#xe62b;</span>
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
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        mouseIn:state.getIn(['header','mouseIn']),
        totalPage:state.getIn(['header','totalPage']),
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        handleInputFocus(list){
           console.log(list)
           if(list.size === 0) dispatch(actionsCreators.getList());
           
            dispatch(actionsCreators.searchFocus());
    
        },
        handleInputBlur(e){
            dispatch(actionsCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionsCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionsCreators.mouseLeave());
        },
        handleChangePage(page,totalPage,spin){
            
            let originAngle =  spin.style.transform.replace(/[^0-9]/ig,'')
            // console.log(originAngle);
            if(originAngle){
                originAngle = parseInt(originAngle,10)
            }else{
                originAngle = 0;
            }
            spin.style.transform  = 'rotate('+(originAngle + 360)+'deg)';
            // console.log(spin.style.transform)
            if(page < totalPage){
                dispatch(actionsCreators.changePage(page+1));
            }else{
                dispatch(actionsCreators.changePage(1));
            }
            
        }
    }
}
// export default Header;
export default connect(mapStateToProps,mapDispatchToProps)(Header);