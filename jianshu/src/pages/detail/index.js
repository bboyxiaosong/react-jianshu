
import React ,{ Component } from 'react';

import { connect } from 'react-redux';
import {
    DetailWrapper,
    Header,
    Conent
} from './style';
import { actionsCreators } from './store';
class Detail extends Component {

    render (){
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Conent dangerouslySetInnerHTML={{__html:this.props.content}}>
               
                </Conent>
            </DetailWrapper>
        );
    }
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapState = (state)=>({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])
});
const mapDispatch = (dispatch)=>({
    getDetail(id){
        dispatch(actionsCreators.getDetail(id))
    }
   
})
export default connect(mapState,mapDispatch)(Detail);