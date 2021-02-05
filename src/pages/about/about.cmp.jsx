import React from 'react';
import './about.scss';
import { Waypoint } from 'react-waypoint';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';

class AboutPage extends React.Component {
	constructor() {
		super();
		this.state = {
			reveal: false
		};
	}

	handleWaypoint = () => {
		this.setState((prevState) => ({
			reveal:true
		}));
	};

	render() {

		return (
			<div className="about flex-c">

				{/* <div className={`letters ${this.state.reveal ? 'show' : ''}`}>Photographer.</div> */}
				<div className="backround" />
        <div className={`about-text flex-c ${this.state.reveal ? 'show' : ''}`}>
        <Waypoint onEnter={this.handleWaypoint} />
					{/* <h1 className="title">About me</h1> */}
					<h1 className="title">Meet me here</h1>
					{/* <h2>I'm a player in photography.</h2> */}
					<p>
					{/* Meet me here.{''} */}
					</p>
					<div className="about-social flex-c">
						<Link className="link-button" to="/contact">
							Contact me
						</Link>
						{/* <a href="https://www.instagram.com/tuannguyen/" target="blank"> */}
						{/* 	<FaInstagram className="react-icons" /> */}
						{/* </a> */}
						<a href="https://www.facebook.com/dr.aibolit.nguyen" target="blank">
							<FaFacebookSquare className="react-icons" />
						</a>
					</div>
				</div>
				<div className="about-image-area flex-c">
					 {/* <img */}
						{/* src="https://*.jpg" */}
						{/* className={`about-img ${this.state.reveal ? 'show' : ''}`} */}
						{/* alt="tuan-portrait" */}
					{/* /> */}
				</div>
			</div>
		);
	}
}

export default AboutPage;
