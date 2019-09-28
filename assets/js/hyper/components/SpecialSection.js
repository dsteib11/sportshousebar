import { h, app } from 'hyperapp';

export default function SpecialSection({ state, actions }) {
	return (
		<section id="SpecialSection" className="bricksBg">
			<div className="container">
				<div className="titleSection">
					<div className="subTitle">specials of the month</div>
					<div className="mainTitle">september</div>
				</div>
				<div className="specialMenu">
					<div className="specialGrid">
						<div className="box foodBox">
							<div className="foodImg">
								<div className="priceCircle">
									<div className="price">$20</div>
								</div>
							</div>
							<div className="specialDetails">
								<span className="title">Special Me Food </span>
								<div className="specialInfo">
									Our USDA Certified Angus Beef and American-Style Kobe Beef are
									ground in-house twice daily.
								</div>
							</div>
						</div>
						<div className="box foodBox">
							<div className="foodImg">
								<div className="priceCircle">
									<div className="price">$20</div>
								</div>
							</div>
							<div className="specialDetails">
								<span className="title">Special Me Food </span>
								<div className="specialInfo">
									Our USDA Certified Angus Beef and American-Style Kobe Beef are
									ground in-house twice daily.
								</div>
							</div>
						</div>
						<div className="box foodBox">
							<div className="foodImg">
								<div className="priceCircle">
									<div className="price">$20</div>
								</div>
							</div>
							<div className="specialDetails">
								<span className="title">Special Me Food </span>
								<div className="specialInfo">
									Our USDA Certified Angus Beef and American-Style Kobe Beef are
									ground in-house twice daily.
								</div>
							</div>
						</div>
					</div>
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
