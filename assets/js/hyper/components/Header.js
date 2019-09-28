import { h, app } from 'hyperapp';

export default function Header({ state, actions }) {
	return (
		<header>
			<div className="container">
				<div className="logo">shb</div>
				<nav className="navMenu">
					<a href="#">menu</a>
					<a href="#">about</a>
					<a href="#">private parties</a>
					<a href="#">reservations</a>
					<a href="#">gift cards</a>
				</nav>
			</div>
		</header>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
