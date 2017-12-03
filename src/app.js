// import AppleMenu from "react-apple-menu";
import AppleMenu from "../myPackages/react-apple-menu/src/index";
import React from 'react';
import reactDOM from 'react-dom';

// 测试 改变 props 时候 constructor 会不会变

class Test extends React.Component {
    constructor (z){
        super(z);
        this.a = 1
        this.state = {num:50, flag:true, pd:10}
    }
    click (){
        this.a++
        this.setState({num: ++this.state.num, flag: !this.state.flag,pd:this.state.pd+10})
    }
    render (){
        var pd = {padding:this.state.pd+"px"};
        return (
            <div>
                {this.a}
                <h3 onClick={this.click.bind(this)}>点我{this.state.num}</h3>
                <AppleMenu portal={false} dock size = {this.state.num} zoom = "0.5"  >
                    <img className="aaa" style={pd} onClick={ () => (alert("hello")) } src="https://raw.githubusercontent.com/Sherryer/Sherry-npm/master/static/images/1.png"/>
                    <img className="aaa" style={pd} src="https://raw.githubusercontent.com/Sherryer/Sherry-npm/master/static/images/2.png"/>
                    <img className="aaa" style={pd} src="https://raw.githubusercontent.com/Sherryer/Sherry-npm/master/static/images/3.png"/>
                    <img className="aaa" style={pd} src="https://raw.githubusercontent.com/Sherryer/Sherry-npm/master/static/images/4.png"/>
                    <img className="aaa" style={pd} src="https://raw.githubusercontent.com/Sherryer/Sherry-npm/master/static/images/5.png"/>
                </AppleMenu>
            </div>
        )
    }
}

reactDOM.render(<Test/>
    ,document.getElementById("div"));