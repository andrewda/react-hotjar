var hotjar = require('./src/react-hotjar');

module.exports = {
	hotjar: {
		initialize: function initialize(id, sv) {
			hotjar(id, sv);
		},
		identify: function identify(userId, properties) {
			hotjar('identify', userId, properties);
		},
		event: function event(events) {
			window.hj('event', events);
		},
		stateChange: function stateChange(relativePath) {
			window.hj('stateChange', relativePath);
		}
	}
};
