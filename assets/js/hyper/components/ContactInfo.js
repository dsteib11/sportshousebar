import { h, app } from 'hyperapp';

export default function ContactInfo({ state, actions }) {
	return (
		<section id="ContactInfo" className="bricksBg">
			<div className="container">
				<div className="grid">
					<div className="eventSection">
						<div className="eventList">
							<div className="title">upcoming events</div>
							<div className="eventDate">
								<div className="eventTitle">
									Tuesday - Friday and NOW SUNDAYS!
								</div>
								<div className="info">starting at 7 p.m</div>
							</div>
							<div className="eventDate">
								<div className="eventTitle">Monday</div>
								<div className="info">starting at 7 p.m</div>
							</div>
							<div className="eventDate">
								<div className="eventTitle">Tuesday</div>
								<div className="info">starting at 7 p.m</div>
							</div>
							<div className="eventDate">
								<div className="eventTitle">Tuesday</div>
								<div className="info">starting at 7 p.m</div>
							</div>
							<div className="partySection">
								<a href="#" className="partyBtn">
									party
								</a>
							</div>
						</div>
					</div>
					<div className="img-section">
						<div className="bar-img">image</div>
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
