let companyInfo = {
	title: 'The Sports House Bar',
	phone: '(404)-333-6666',
	location: 'Buckhead, Georgia'
};

let specialMenuData = [
	{
		title: 'House Wings',
		description:
			' Sports Bar special wings are naturally raised, American Humane Certified and 100% antibiotic - free',
		price: 10
	},
	{
		title: 'House Tacos',
		description: ' Sports Bar special chicken or beef tacos until 7pm',
		price: 2
	},
	{
		title: 'House Drinks',
		description: ' Sports Bar special imported beers before 3pm',
		price: 3
	}
];

let randomQuoteData = [
	{
		mainTitle: 'sports',
		quote: 'Come and experience a great time'
	},
	{
		mainTitle: 'food',
		quote: 'Come and eat good and share memories'
	},
	{
		mainTitle: 'drinks',
		quote: 'Come and enjoy a drink while cheering your team to victory'
	}
];

let newsData = [
	{
		newsTitle: 'springs neighbor',
		newsHighlight:
			'New sports restaurant pairs food and drinks like no other!!',
		newsInfo:
			'SPORTS HOUSE BAR NAMED ONE OF "THE TOP 50 EMERGING RESTAURANT CHAINS" BY Bar Food Sports MAGAZINE',
		author: 'Christine Fontain',
		authorInfo: 'Sandy Springs top food critic'
	},
	{
		newsTitle: 'dunwoody prime',
		newsHighlight:
			'New sports restaurant pairs food and drinks like no other!!',
		newsInfo:
			'SPORTS HOUSE BAR NAMED ONE OF "THE TOP 50 EMERGING RESTAURANT CHAINS" BY Bar Food Sports MAGAZINE',
		author: 'Christine Fontain',
		authorInfo: 'Sandy Springs top food critic'
	},
	{
		newsTitle: 'hello atl',
		newsHighlight:
			'New sports restaurant pairs food and drinks like no other!!',
		newsInfo:
			'SPORTS HOUSE BAR NAMED ONE OF "THE TOP 50 EMERGING RESTAURANT CHAINS" BY Bar Food Sports MAGAZINE',
		author: 'Christine Fontain',
		authorInfo: 'Sandy Springs top food critic'
	},
	{
		newsTitle: 'buckhead times',
		newsHighlight:
			'New sports restaurant pairs food and drinks like no other!!',
		newsInfo:
			'SPORTS HOUSE BAR NAMED ONE OF "THE TOP 50 EMERGING RESTAURANT CHAINS" BY Bar Food Sports MAGAZINE',
		author: 'Christine Fontain',
		authorInfo: 'Sandy Springs top food critic'
	},
	{
		newsTitle: 'cumberland times',
		newsHighlight:
			'New sports restaurant pairs food and drinks like no other!!',
		newsInfo:
			'SPORTS HOUSE BAR NAMED ONE OF "THE TOP 50 EMERGING RESTAURANT CHAINS" BY Bar Food Sports MAGAZINE',
		author: 'Christine Fontain',
		authorInfo: 'Sandy Springs top food critic'
	}
];
export const globalState = {
	count: 0,
	companyInfo,
	specialMenuData,
	newsData,
	randomQuoteData,
	newsStatus: {
		currentNews: 0
	}
};
