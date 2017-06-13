const _ = require('lodash');

let data = [];

const randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getFakeName = function() {
  const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
  const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + ' ' + randArrayEl(fakeLasts);
};

const getFakeTweet = function() {
  const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + '! The instructors are just so ' + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};


var functions = {
	add: function(name, content) {
		data.push({name: name, content: content});
	},

	list: function() {
		return _.cloneDeep(data);
	},

	find: function (properties) {
		return _.cloneDeep(_.filter(data, properties));
	}

};
// console.log(module.exports);
module.exports = functions;
for (let i = 0; i < 10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}

//find test
// module.exports.add( 'Jason', 'It was supposed to rain today.');
// console.log('find: ',module.exports.find( {'name': 'Jason'}));

// test list
// console.log('list:', module.exports.list(), '\n');
console.log(data);