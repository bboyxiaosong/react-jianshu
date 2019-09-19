
import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import { ListItem , ListInfo , LoadMore } from '../style';
import { actionsCreators } from '../store';
import { Link } from 'react-router-dom';
class List extends Component {
     
    render (){
        const { list ,getMoreList ,page} = this.props;
        return (
               <div>
                {
                    list.map((item,index)=>{
                        return(
                            /*
                            <Link key={index} to={'/detail?id='+item.get('id')}> App.js 就得这样 ：<Route path='/detail'
                            如果 上面这样写id 取值 费劲
                            this.props.location.search; // ?id=12 自己去截取
                            下面哪种写法在详情页面可以直接取值 
                            可以直接取值
                            this.props.match.params.id
                            */ 
                            <Link key={index} to={'/detail/'+item.get('id')}>
                                <ListItem>
                                    <img alt='' className='pic' src={item.get('imgUrl')}/>
                                    <ListInfo>
                                        <h1 className='title'>{item.get('title')}</h1>
                                        <p className='desc'>
                                            {item.get('desc')}
                                        </p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={()=> getMoreList(page) }>加载更多</LoadMore>
                </div>
                
           
        )
    }

}
const mapState = (state)=>({
    list:state.get('home').get('articleList'),
    page:state.getIn(['home','articlePage'])
});
const mapDispatch = (dispatch)=>({
    getMoreList(page){
        dispatch(actionsCreators.getMoreList(page));
    }
})
export default connect(mapState,mapDispatch)(List);

// export default List;