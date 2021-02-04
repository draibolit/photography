import React from 'react';
import './homepage.scss';
import Hero from '../../components/hero/hero.cmp';
import ItemHome from '../../components/item-home/item-home.cmp';
import { FullPage, Slide } from 'react-full-page';

import '../../fonts.css';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sections: [
				{
					id: 1,
					title: 'Lifestyle',
					subtitle: 'People in Nagasaki',
					imageUrl: 'https://res.cloudinary.com/dmhwdtooa/image/upload/v1612313115/photos/000035_tsxlb0.jpg',
					reveal: false
				},
				{
					id: 2,
					title: 'Landscape',
					subtitle: 'Places visited',
					imageUrl: 'https://res.cloudinary.com/dmhwdtooa/image/upload/v1612313122/photos/000045_nqqayh.jpg',
					reveal: false
				},
			]
		};
	}

	handleWaypoint = (index, action) => {
		this.setState((state) => {
			const list = state.sections.map((item, i) => {
				if (index === i) {
					if (action === 'enter') {
						return (item.reveal = true);
					} else if (action === 'leave') {
						return (item.reveal = false);
					}
				}
				return item;
			});
			return {
				list
			};
		});
	};

	render() {
		return (
			<FullPage className="fullpage-wrapper">
				<Slide>
					<Hero />
				</Slide>
				{this.state.sections.map((item, index) => (
					<Slide key={item.id}>
						<ItemHome item={item} handleWaypoint={this.handleWaypoint} reveal={this.state.sections} index={index} />
					</Slide>
				))}
			</FullPage>
		);
	}
}

export default HomePage;
