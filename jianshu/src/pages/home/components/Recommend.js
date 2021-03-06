
import React ,{ Component } from 'react';

import { connect } from 'react-redux';

import { RecommendWraper, RecommendItem } from '../style';

class Recommend extends Component {
    
    render (){
        const { list } = this.props;

        return (
            <RecommendWraper>
                {
                    list.map((item)=>{
                        return(
                            <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}></RecommendItem>
                        )
                    })
                }
               

            </RecommendWraper>
        );
    }
}
const mapState = (state)=>({
    list:state.getIn(['home','recommendList'])
})
export default connect(mapState,null)(Recommend);