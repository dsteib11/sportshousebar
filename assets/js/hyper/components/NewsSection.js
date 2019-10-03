import { h, app } from 'hyperapp';

export default function NewsSection({ state, actions }) {
	let currentNews = () => {
		return (
			<div>
				<div className="newsTitle">
					{state.newsData[state.newsStatus.currentNews].newsTitle}
				</div>
				<div className="newsHighlight">
					{state.newsData[state.newsStatus.currentNews].newsHighlight}
				</div>
				<p className="newsInfo">
					{state.newsData[state.newsStatus.currentNews].newsInfo}
				</p>
				<div className="authorSection">
					<div className="author">
						{' '}
						{state.newsData[state.newsStatus.currentNews].author}:
					</div>
					<div className="authorInfo">
						{state.newsData[state.newsStatus.currentNews].authorInfo}
					</div>
				</div>
			</div>
		);
	};

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
									{currentNews()}
									<div className="arrowSection">
										<div className="prev">
											<i
												className={`fas fa-chevron-left ${
													state.newsStatus.currentNews > 0 ? 'active' : ''
												}`}
											/>
										</div>
										<div className="next">
											<i
												className={`fas fa-chevron-right ${
													state.newsStatus.currentNews ==
													state.newsData.length - 1
														? ''
														: 'active'
												}`}
											/>
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
