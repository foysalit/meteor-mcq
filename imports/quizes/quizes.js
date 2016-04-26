import { QuizesCollection as collection } from './collection';

let Quizes = {};

Quizes.getAll = function () {
	return collection.find();
};

exports.Quizes = Quizes;