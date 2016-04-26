import React , { Component } from 'react';
import { Paper, TextField, FloatingActionButton, FontIcon } from 'material-ui';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { merge } from 'lodash';

import { QuizesCollection } from '../../../quizes/';

// define and export our Layout component
export class Create extends Component {
	constructor(props) {
		super(props);

		this.state = {
			quiz: {
				title: '',
				description: ''
			},
			errors: {
				title: null,
				description: null
			}
		};
	};

	save() {
		let { quiz } = this.state;

		try {
			QuizesCollection.schema.validate(quiz);
			QuizesCollection.insert(this.state.quiz, (err, res) => {
				FlowRouter.go('/quiz');
			});
		} catch(e) {
			console.log(e, 'validation error');
		}
	};

	handleChange(field, event, data) {
		let nextState = {quiz: {[field]: data}};
		this.setState(merge(this.state, nextState));
	}

    render() {
    	const save = this.save.bind(this);

    	return (
    		<div className="col-xs-12 col-md-8">
    			<Paper className="paper">
    				<div class="paper-header">Create A Quiz</div>
    				
    				<TextField
    					value={this.state.title}
    					fullWidth={true}
    					onChange={this.handleChange.bind(this, 'title')}
						hintText="Insert A Title"/>

    				<TextField
    					value={this.state.description}
    					fullWidth={true}
    					multiLine={true}
    					onChange={this.handleChange.bind(this, 'description')}
						hintText="Add more details about the quiz"/>

					<FloatingActionButton onTouchEnd={save} onMouseUp={save}>
						<FontIcon className="material-icons">done</FontIcon>
					</FloatingActionButton>
    			</Paper>
		    </div>
    	);
    }
};