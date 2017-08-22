/**
 * Created by Sherry on 2017/8/22.
 */
import React, {Component} from 'react';
import style from './style.css'

class AppleMenu extends Component {
    render () {
        return (
            <div className={style.content}>
                <img src="images/1.png"/>
                <img src="images/2.png"/>
                <img src="images/3.png"/>
                <img src="images/4.png"/>
                <img src="images/5.png"/>
            </div>
        )
    }
}

export default AppleMenu