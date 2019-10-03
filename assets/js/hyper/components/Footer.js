import { h, app } from 'hyperapp';

export default function Footer({ state, actions }) {
	return (
		<section id="Footer">
			<div className="container">
				<div className="mainTitle">sports house bar</div>
				<nav className="footerMenu">
					<div className="groupLinks">
						<div className="navLinks">
							<a href="#">menu</a>
							<a href="#">about</a>
							<a href="#">private parties</a>
							<a href="#">reservations</a>
							<a href="#">gift cards</a>
						</div>
						<div className="socialLinks">
							<a href="https://instagram.com">
								<i className="fab fa-instagram" />
							</a>
							<a href="https://facebook.com">
								<i className="fab fa-facebook-f" />
							</a>
							<a href="https://twitter.com">
								<i className="fab fa-twitter" />
							</a>
							<a href="https://youtube.com">
								<i className="fab fa-youtube" />
							</a>
						</div>
					</div>
				</nav>
			</div>
			<div className="copyright"> © shb restaurant group 2019 copyright</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
