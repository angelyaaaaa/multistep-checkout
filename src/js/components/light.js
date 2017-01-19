import React from 'react';
import {Nav, NavItem } from 'react-bootstrap';
import '../commonUsed.css';
import './light.css';

class StateLight extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            light: [false, false, false, false, false],
            isLightHide: ''
                // dateCont: dateContJson[0]
        };
        // this.jumpToAnother = this.jumpToAnother.bind(this);
    }

    componentWillMount() {
        // console.log(this.props.nowStep);
        // for (let i = 0; i < this.props.nowStep; ++i) {
        //     this.state.light[i] = true;
        // }
        const nowStep = this.props.nowStep;
        if(nowStep != 0)
            this.state.light[nowStep-1] = true;
        else
            this.setState({isLightHide: 'hide'});
    }

    render() {
        let light = this.state.light;

        const divStyle = (order) => {
            return {
                background: light[order] ? 'yellow' : 'lightgrey'
            };
        };

                
        // const { goJumpStep } = this.props;
        // console.log('--', goJumpStep);
        return (
            <div>				
				<Nav bsStyle="pills" justified activeKey={this.props.nowPage} onSelect={this.handleSelect}>
                    <NavItem eventKey={1} href="#">Home</NavItem>
                    <NavItem eventKey={2} href="#">Patent</NavItem>
                    <NavItem eventKey={3} href="#">Trademark</NavItem>
                    <NavItem eventKey={4} href="#">Copyright</NavItem>
                    <NavItem eventKey={5} href="#">Support</NavItem>
                    <NavItem eventKey={6} href="#">My Account</NavItem>
                </Nav>


				<div className={'state-light ' + this.state.isLightHide}>
					<div className="light" style={divStyle(0)}>
						<div className="content">step 1</div>
					</div>
					<div className="light" style={divStyle(1)}>
						<div className="content">step 2</div>
					</div>
					<div className="light" style={divStyle(2)}>
						<div className="content">step 3</div>
					</div>
					<div className="light" style={divStyle(3)}>
						<div className="content">step 4</div>
					</div>
					<div className="light" style={divStyle(4)}>
						<div className="content">step 5</div>
					</div>
                    <div className="light" style={divStyle(5)}>
                        <div className="content">step 6</div>
                    </div>
				</div>
			</div>
        );
    }
}

StateLight.defaultProps = {
  nowPage: 2
};

export default StateLight;