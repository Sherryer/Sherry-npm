/**
 * Created by Sherry on 2017/8/22.
 */
import React, {Component} from 'react';
import style from './style.css'

class AppleMenu extends Component {
    constructor(...props){
        super(...props);
        this.getDistance = this.getDistance.bind(this);
        this.mouseMove = this.mouseMove.bind(this);
    }

    mouseMove (ev) {
        let oEvent = ev || event;
        let target = this.refs.target;
        let aImg = target.getElementsByTagName('img');
        let d = 0;
        let iMax = 200;
        let i = 0;

        for (i = 0; i < aImg.length; i++) {
            d = this.getDistance(aImg[i], target, oEvent);
            d = Math.min(d, iMax);

            aImg[i].style.width = ((iMax - d) / iMax) * 64 + 64+'px';
        }
    };

    getDistance(img, target, oEvent) {
        return Math.sqrt(
            Math.pow(img.offsetLeft + target.offsetLeft - oEvent.clientX + img.offsetWidth / 2, 2) +
            Math.pow(img.offsetTop + target.offsetTop - oEvent.clientY + img.offsetHeight / 2, 2)
        );
    }

    render () {
        return (
            <div ref="target" onMouseMove={this.mouseMove} className={style.content}>
                <img src="https://raw.githubusercontent.com/Sherryer/Sherry-npm/master/static/images/1.png"/>
                <img src="https://raw.githubusercontent.com/Sherryer/Sherry-npm/master/static/images/2.png"/>
                <img src="https://raw.githubusercontent.com/Sherryer/Sherry-npm/master/static/images/3.png"/>
                <img src="https://raw.githubusercontent.com/Sherryer/Sherry-npm/master/static/images/4.png"/>
                <img src="https://raw.githubusercontent.com/Sherryer/Sherry-npm/master/static/images/5.png"/>
            </div>
        )
    }
}

export default AppleMenu