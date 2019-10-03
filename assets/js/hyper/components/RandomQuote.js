import { h, app } from 'hyperapp';

export default function RandomQuote({ state, actions }) {
	return (
		<section
			id="RandomQuote"
			style={{
				backgroundImage:
					'linear-gradient(135deg, rgba(0, 0, 0, .1) 0, #000 100%),url("https://static.urbandaddy.com/uploads/assets/image/articles/inline/76ca41b2864dcee2e223cacbf080b330.png")'
			}}
		>
			<div className="container">
				<div className="titleSection">
					<div className="titleContent">
						<div className="subTitle">there is always</div>
						<div className="mainTitle">sports</div>
						<span className="quote">-- Come and experience a great time!!</span>
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
