import { h, app } from 'hyperapp';
import Header from './Header.js';
import TopImg from './TopImg.js';
import EventInfo from './EventInfo.js';
import SpecialSection from './SpecialSection.js';
import RandomQuote from './RandomQuote.js';
import ContactInfo from './ContactInfo.js';
import ReviewSection from './ReviewSection.js';

export default function App({ state, actions }) {
	return (
		<div class={'app'}>
			<Header state={state} actions={actions} />
			<TopImg state={state} actions={actions} />
			<EventInfo state={state} actions={actions} />
			<SpecialSection state={state} actions={actions} />
			<RandomQuote state={state} actions={actions} />
			<ContactInfo state={state} actions={actions} />
			<ReviewSection state={state} actions={actions} />
		</div>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
