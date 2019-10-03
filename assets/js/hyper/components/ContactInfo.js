import { h, app } from 'hyperapp';

export default function ContactInfo({ state, actions }) {
	return (
		<section id="ContactInfo">
			<div className="container">
				<div className="titleSection">
					<div className="mainTitle">contact us</div>
					<div className="subTitle">Where is your house??</div>
				</div>
				<div className="contactInfoSection">
					<div className="contactGrid">
						<div className="infoSectionLeft">
							<div className="location">{state.companyInfo.location}</div>
							<div className="address">Lorem ipsum dolor sit amet.</div>
							<div className="email">Lorem ipsum dolor sit amet.</div>
						</div>
						<div className="infoSectionRight">
							<div className="phone">Lorem ipsum dolor sit amet.</div>
							<div className="serviceHrs">Lorem ipsum dolor sit amet.</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
