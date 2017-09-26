// import AppleMenu from "../myPackages/react-apple-menu/src/index";
import AppleMenu from "../myPackages/react-apple-menu/src/index";
import React from 'react';
import reactDOM from 'react-dom';

// 测试 改变 props 时候 constructor 会不会变

class Test extends React.Component {
    constructor (z){
        super(z)
        this.state = {num:50, flag:true}
    }
    click (){
        this.setState({num: ++this.state.num, flag: !this.state.flag})

    }
    render (){
        var pd = {padding:"10px"}
        return (
            <div>
                <h3 onClick={this.click.bind(this)}>点我{this.state.num}</h3>
                <AppleMenu top size = {this.state.num} zoom = "0.5"  >
                    <img style={pd} onClick={ () => (alert("hello")) } src="https://raw.githubusercontent.com/Sherryer/Sherry-npm/master/static/images/1.png"/>
                    <img style={pd} src="https://raw.githubusercontent.com/Sherryer/Sherry-npm/master/static/images/2.png"/>
                    <img style={pd} src="https://raw.githubusercontent.com/Sherryer/Sherry-npm/master/static/images/3.png"/>
                    <img style={pd} src="https://raw.githubusercontent.com/Sherryer/Sherry-npm/master/static/images/4.png"/>
                    <img style={pd} src="https://raw.githubusercontent.com/Sherryer/Sherry-npm/master/static/images/5.png"/>
                </AppleMenu>
            </div>
        )
    }
}

reactDOM.render(<Test/>
    ,document.getElementById("div"));