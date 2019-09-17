
import React ,{ Component } from 'react';

import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style'

class Home extends Component {
    render (){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="//upload-images.jianshu.io/upload_images/3301720-db890fabf626e0ac.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" />
                </HomeLeft>
                <HomeRight></HomeRight>
            </HomeWrapper>
        );
    }
}
export default Home;