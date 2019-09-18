
import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import { ListItem , ListInfo , LoadMore } from '../style';
import { actionsCreators } from '../store';
class List extends Component {
     
    render (){
        const { list ,getMoreList } = this.props;
        return (
               <div>
                {
                    list.map((item)=>{
                        return(
                            <ListItem key={item.get('id')}>
                                <img alt='' className='pic' src={item.get('imgUrl')}/>
                                <ListInfo>
                                    <h1 className='title'>{item.get('title')}</h1>
                                    <p className='desc'>
                                        {item.get('desc')}
                                    </p>
                                </ListInfo>
                            </ListItem>
                        )
                    })
                }
                <LoadMore onClick={ getMoreList }>加载更多</LoadMore>
                </div>
                
           
        )
    }

}
const mapState = (state)=>({
    list:state.get('home').get('articleList')
});
const mapDispatch = (dispatch)=>({
    getMoreList(){
        dispatch(actionsCreators.getMoreList());
        console.log('sa')
    }
})
export default connect(mapState,mapDispatch)(List);

// export default List;