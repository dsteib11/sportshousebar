import { h, app } from 'hyperapp';

export default function Footer({ state, actions }) {
	return (
		<section id="Footer">
			<div className="container">
				<div className="mainTitle">sports house bar</div>
				<nav className="footerMenu">
					<div className="navLinks">
						<a href="#">menu</a>
						<a href="#">about</a>
						<a href="#">private parties</a>
						<a href="#">reservations</a>
						<a href="#">gift cards</a>
					</div>
					<div className="socialLinks">
						<a href="#">menu</a>
						<a href="#">about</a>
						<a href="#">private parties</a>
						<a href="#">reservations</a>
						<a href="#">gift cards</a>
					</div>
				</nav>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
