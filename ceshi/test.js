import React, {Component} from 'react';
import reactDOM from 'react-dom'

class Demo extends Component{
    click (e) {
        console.log(e.target.innerHTML)
    }
    render () {
        return (
            <div onClick={this.click.bind(111)}>123123</div>
        )
    }
}

reactDOM.render(<Demo/>,document.getElementById("content"))