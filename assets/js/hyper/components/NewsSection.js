import { h, app } from 'hyperapp';

export default function NewsSection({ state, actions }) {
	return (
		<section id="NewsSection">
			<div className="container">
				<div className="titleSection">
					<div className="subTitle">see what they are saying</div>
					<div className="mainTitle">news + press</div>
				</div>
				<div className="newsListSection">
					<div className="newsGrid">
						<div
							className="newsPic"
							style={{
								backgroundImage:
									'url("https://www.bouncesportingclub.com/wp-content/uploads/friends-cheering-and-drinking-together-at-a-bar.jpg")'
							}}
						/>
						<div className="newsList">
							<div className="box">
								<div className="box-info">
									<div className="newsTitle">sandy springs neighbor</div>
									<div className="newsHighlight">
										New sports restaurant pairs food and drinks like no other!!
									</div>
									<p className="newsInfo">
										SPORTS HOUSE BAR NAMED ONE OF “THE TOP 50 EMERGING
										RESTAURANT CHAINS” BY Bar Food Sports MAGAZINE
									</p>
									<div className="authorSection">
										<div className="author">Christine Fontain:</div>
										<div className="authorInfo">
											Sandy Springs top food critic
										</div>
									</div>
									<div className="arrowSection">
										<div className="prev">
											<i className="fas fa-chevron-left" />
										</div>
										<div className="next">
											<i className="fas fa-chevron-right" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
