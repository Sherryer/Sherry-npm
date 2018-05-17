import React, {Component} from 'react';
import reactDOM from 'react-dom'
// import Skeleton from 'react-loading-skeleton';
import testcss from './test.css'
// import './test.css'


class Skeleton extends Component {
    static defaultProps = {
        count: 1,
        wrapper: null,
        duration: 1.2
    };

    render() {
        const elements = [];
        for (let i = 0; i < this.props.count; i++) {
            elements.push(
                <span key={i} className={testcss["react-loading-skeleton"]} style={{ animation: testcss.progress + ' ' + String(this.props.duration) + "s ease-in-out infinite" }}>&zwnj;</span>
            );
        }

        const Wrapper = this.props.wrapper;
        return (
            <span>
                {Wrapper
                    ? elements.map((element, i) =>
                        <Wrapper key={i}>{element}&zwnj;</Wrapper>
                    )
                    : elements
                }
            </span>
        );
    }
}


class Demo extends Component{
    click (e) {
        console.log(e.target.innerHTML)
    }
    render () {
        return (
            <div>
                <div>{testcss["react-loading-skeleton"]}</div>
                <Skeleton/> // Simple, single-line loading skeleton
                <Skeleton count={5}/> // Five-line loading skeleton
            </div>
        )
    }
}

reactDOM.render(<Demo/>,document.getElementById("content"))