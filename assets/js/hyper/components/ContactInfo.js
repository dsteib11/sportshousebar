import { h, app } from 'hyperapp';

export default function ContactInfo({ state, actions }) {
	return (
		<section id="ContactInfo">
			<div className="container">
				<div className="titleSection">
					<div className="mainTitle">contact us</div>
					<div className="subTitle">
						Comments, questions?? Give us a shout..
					</div>
				</div>
				<div className="contactInfoSection">
					<form action="#" method="post" className="contactForm">
						<div className="contactSec">
							<div className="formBox">
								<label htmlFor="email"> Email (required)</label>
								<input
									type="email"
									placeholder="shbrestaurant@gmail.com"
									name="email"
								/>
							</div>
							<div className="formBox">
								<label htmlFor="email">first name (required)</label>
								<input type="text" placeholder="John" name="fname" />
							</div>
							<div className="formBox">
								<label htmlFor="email">last name (required)</label>
								<input type="text" placeholder="Jack" name="lname" />
							</div>
						</div>
						<div className="messageSec">
							<div className="formMessage">
								<label htmlFor="email">message</label>
								<textarea
									name="message"
									placeholder="message me here..."
									cols="30"
									rows="12"
								/>
							</div>
						</div>
					</form>
					<div className="submitBtn">
						<input type="submit" value="connect" />
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
