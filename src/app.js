// import AppleMenu from "../myPackages/react-apple-menu/src/index";
import AppleMenu from "react-apple-menu";
import React from 'react';
import reactDOM from 'react-dom';

reactDOM.render(
    <AppleMenu>
            <img onClick={function(){alert("hello")}} src="https://raw.githubusercontent.com/Sherryer/Sherry-npm/master/static/images/1.png"/>
            <img src="https://raw.githubusercontent.com/Sherryer/Sherry-npm/master/static/images/2.png"/>
            <img src="https://raw.githubusercontent.com/Sherryer/Sherry-npm/master/static/images/3.png"/>
            <img src="https://raw.githubusercontent.com/Sherryer/Sherry-npm/master/static/images/4.png"/>
            <img src="https://raw.githubusercontent.com/Sherryer/Sherry-npm/master/static/images/5.png"/>
    </AppleMenu>,document.getElementById("div"));