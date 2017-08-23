# react-apple-menu

menu like apple dock
## Install

	npm react-apple-menu

## Usage

| props | description | defaultvalue | type |
| :---: | --- | --- | --- |
| zoom | pic zoom | 0.5 | number or string |
| size | pic size | 64 |  number or string |
| callback | callback | null | function |


### Include the Component

	import AppleMenu from "react-apple-menu";
	import React from 'react';

	class Component extends React.Component {

    	render() {
        	return (
            	<AppleMenu>
                	<img src="https://raw.githubusercontent.com/Sherryer/Sherry-npm/master/static/images/1.png"/>
                	<img src="https://raw.githubusercontent.com/Sherryer/Sherry-npm/master/static/images/2.png"/>
                	<img src="https://raw.githubusercontent.com/Sherryer/Sherry-npm/master/static/images/3.png"/>
                	<img src="https://raw.githubusercontent.com/Sherryer/Sherry-npm/master/static/images/4.png"/>
                	<img src="https://raw.githubusercontent.com/Sherryer/Sherry-npm/master/static/images/5.png"/>
            </AppleMenu>
        		)
    		}
	}

