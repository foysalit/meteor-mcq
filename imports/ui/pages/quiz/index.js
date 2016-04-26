import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import { Single } from './single';
import { List } from './list';
import { Create } from './create';
import { Quizes } from '../../../quizes/';

exports.QuizSinglePage = Single;

exports.QuizListPage = createContainer(() => {
	Meteor.subscribe('quiz.list');

	return {
		quizes: Quizes.getAll().fetch()
	};
}, List);

exports.QuizCreatePage = Create;