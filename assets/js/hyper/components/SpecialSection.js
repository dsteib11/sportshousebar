import { h, app } from 'hyperapp';

export default function SpecialSection({ state, actions }) {
	let loopMenu = () => {
		return state.specialMenuData.map(item => {
			console.log(item.title);
			return (
				<div className="box">
					<div className="boxImg">
						<div className="priceCircle">
							<div className="price">${item.price}</div>
						</div>
					</div>
					<div className="specialDetails">
						<span className="title">{item.title} </span>
						<div className="specialInfo">
							<p>{item.description}</p>
						</div>
					</div>
				</div>
			);
		});
	};
	return (
		<section id="SpecialSection" className="bricksBg">
			<div className="container">
				<div className="titleSection">
					<div className="subTitle">specials of the month</div>
					<div className="mainTitle">september</div>
				</div>
				<div className="specialMenu">
					<div className="specialGrid">{loopMenu()}</div>
					<div className="btnSection">
						<a href="#" className="menuBtn">
							view menu
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
