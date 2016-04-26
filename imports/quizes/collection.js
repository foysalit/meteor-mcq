import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class Collection extends Mongo.Collection {
	insert(doc, callback) {
		const ourDoc = doc;
		ourDoc.createdAt = ourDoc.createdAt || new Date();
		return super.insert(ourDoc, callback);
	}
};

const Quizes = new Collection('quizes');

Quizes.allow({
	insert() { return true; },
	update() { return true; },
	remove() { return true; },
});

Quizes.schema = new SimpleSchema({
	creatorId: {
		type: String,
		optional: true,
		regEx: SimpleSchema.RegEx.Id,
		denyUpdate: true,
	},
	title: {
		type: String,
		max: 100,
		min: 5
	},
	description: {
		type: String,
		optional: true
	},
	createdAt: {
		type: Date,
		denyUpdate: true,
		optional: true,
	}
});

Quizes.attachSchema(Quizes.schema);

exports.QuizesCollection = Quizes;