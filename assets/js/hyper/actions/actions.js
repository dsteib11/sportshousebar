let newsLeftClicked = function(state, actions) {
	return {
		newsStatus: {
			currentNews: state.newsStatus.currentNews - 1
		}
	};
};

let newsRightClicked = function(state, actions) {
	return {
		newsStatus: {
			currentNews: state.newsStatus.currentNews + 1
		}
	};
};

export const actions = {
	newsRightClicked,
	newsLeftClicked
};
