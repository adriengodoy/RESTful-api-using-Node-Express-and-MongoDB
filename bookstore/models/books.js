var mongoose = require('mongoose');

// Book schema
var bookSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	genre:{
		type: String,
		required: true
	},
	description:{
		type: String
	},
	publisher:{
		type: String
	},
	pages:{
		type: String
	},
	image_url:{
		type: String
	},
	buy_url:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});
var Book = module.exports = mongoose.model('Books', bookSchema);

// get Book
module.exports.getBooks = function(callback, limit){
	Book.find(callback).limit(limit);
}

// get book by ID
module.exports.getBookById = function(id, callback){
	Book.findById(id, callback);
}