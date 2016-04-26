import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Quizes } from '../quizes';

Meteor.publishComposite('quiz.list', function () {
	return {
		find: function () {
			return Quizes.getAll();
		}
	}
});