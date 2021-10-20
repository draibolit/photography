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
					title: 'Nagasaki',
					subtitle: 'to there',
					imageUrl: 'https://res.cloudinary.com/dmhwdtooa/image/upload/v1612313122/photos/000045_nqqayh.jpg',
					reveal: false
				},
				{
					id: 2,
					title: 'Hanoi',
					subtitle: 'from here',
					imageUrl: 'https://res.cloudinary.com/dmhwdtooa/image/upload/v1634717040/photos/img316_copy_copy_ffvudi.jpg',
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
