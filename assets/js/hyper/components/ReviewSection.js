import { h, app } from 'hyperapp';

export default function ReviewSection({ state, actions }) {
	return (
		<section id="ReviewSection">
			<div className="container">
				<div className="titleSection">
					<div className="subTitle">see what they are saying</div>
					<div className="mainTitle">reviews</div>
				</div>
				<div className="reviewListSection">
					<div className="reviewGrid">grid goes here!!</div>
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
