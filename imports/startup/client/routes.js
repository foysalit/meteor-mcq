import { AccountsTemplates } from 'meteor/useraccounts:core';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import React from 'react';

import { AuthLayout } from '../../ui/layouts/auth';
import { HomePage } from '../../ui/pages/home/';
import { QuizSinglePage, QuizCreatePage, QuizListPage } from '../../ui/pages/quiz/';

FlowRouter.route('/', {
	name: 'home',
	action() {
		mount(AuthLayout, { content: <HomePage /> });
	},
});

FlowRouter.route('/quiz', {
	name: 'quiz.list',
	action() {
		mount(AuthLayout, { content: <QuizListPage /> });
	},
});

FlowRouter.route('/quiz/create', {
	name: 'quiz.create',
	action() {
		mount(AuthLayout, { content: <QuizCreatePage /> });
	},
});

FlowRouter.route('/quiz/:id', {
	name: 'quiz.single',
	action() {
		mount(AuthLayout, { content: <QuizSinglePage /> });
	},
});

AccountsTemplates.configureRoute('signIn', {
	name: 'signin',
	path: '/signin',
});

AccountsTemplates.configureRoute('signUp', {
	name: 'join',
	path: '/join',
});

AccountsTemplates.configureRoute('forgotPwd');

AccountsTemplates.configureRoute('resetPwd', {
	name: 'resetPwd',
	path: '/reset-password',
});