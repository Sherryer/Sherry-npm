import React, {Component} from 'react';

class AppleMenu extends Component {
    constructor(...props){
        super(...props);
        this.getDistance = this.getDistance.bind(this);
        this.mouseMove = this.mouseMove.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
        this.filterImg = this.filterImg.bind(this);
        this.state = {
            size:this.props.size||64,
            zoom:this.props.zoom||0.5,
        }
    }

    mouseOut (){
        let target = this.refs.target;
        let aImg = target.getElementsByTagName('img');
        for (let i = 0; i < aImg.length; i++) {
            aImg[i].style.width =  this.state.size+'px';
            aImg[i].style.height =  this.state.size+'px';
        }


    }

    mouseMove (ev) {
        let oEvent = ev || event;
        let target = this.refs.target;
        let aImg = target.getElementsByTagName('img');
        let d = 0;
        let iMax = 200;

        for (let i = 0; i < aImg.length; i++) {
            d = this.getDistance(aImg[i], target, oEvent);
            d = Math.min(d, iMax);
            aImg[i].style.width = ((iMax - d) / iMax) * this.state.size * this.state.zoom + this.state.size+'px';
            aImg[i].style.height = ((iMax - d) / iMax) * this.state.size * this.state.zoom + this.state.size+'px';

        }
    };

    getDistance(img, target, oEvent) {
        return Math.abs(img.offsetLeft + target.offsetLeft - oEvent.clientX + img.offsetWidth / 2)
    }


    filterImg (body,img) {
        let src = [];
        let imgs = React.Children.map(this.props.children, (child, index) => {
            if( child.type == "img" ){
                return (
                    <img style={img} {...child.props}/>
                )
            }
        });

        return imgs
    }

    render () {
        let body = {
            position: "absolute",
            bottom: 0,
            display: "flex",
            justifyContent:"center",
            width:"100%"
        };
        let img = {
            width: this.state.size+"px",
            height: this.state.size+"px",
            alignSelf: "flex-end"
        };

        return (
            <div ref="target" onMouseLeave={this.mouseOut} onMouseMove={this.mouseMove} style={body}>
                {this.filterImg(body, img)}
            </div>
        )
    }
}

export default AppleMenu