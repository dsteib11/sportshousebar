import { h, app } from 'hyperapp';

export default function TopImg({ state, actions }) {
	console.log(state);

	return (
		<section id="topImg">
			<div className="container">
				<div className="titleSection">
					<div className="mainTitle">
						<h3>the</h3>
						<h1>{state.companyInfo.title}</h1>
					</div>
					<div className="infoSection">
						<div className="contactInfo">
							<div className="booking">get a seat</div>
							<h3 className="number">(404)-333-6666</h3>
						</div>
						<div className="hours">
							hours:
							<strong>mon - sun</strong>
							<div className="time">11am - 2am</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
