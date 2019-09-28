import { h, app } from 'hyperapp';
import Header from './Header.js';
import TopImg from './TopImg.js';
import EventInfo from './EventInfo.js';
import SpecialSection from './SpecialSection.js';
import RandomQuote from './RandomQuote.js';
import NewsSection from './NewsSection.js';
import ContactInfo from './ContactInfo.js';
import Footer from './Footer.js';

export default function App({ state, actions }) {
	return (
		<div class={'app'}>
			<Header state={state} actions={actions} />
			<TopImg state={state} actions={actions} />
			<EventInfo state={state} actions={actions} />
			<SpecialSection state={state} actions={actions} />
			<RandomQuote state={state} actions={actions} />
			<NewsSection state={state} actions={actions} />
			<ContactInfo state={state} actions={actions} />
			<Footer state={state} actions={actions} />
		</div>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
