import React , { Component } from 'react';
import { Paper, FloatingActionButton, RaisedButton, FontIcon, Card, CardActions, CardHeader, CardText } from 'material-ui';
// define and export our Layout component
export class List extends Component {
	constructor(props) {
		super(props);
	};

    render() {
    	return (
		<div className="col-xs-12">
			<div className="row">
				{this.props.quizes.map((quiz) => {
	    			return (
					<div key={quiz._id} className="col-xs-12 col-sm-4 text-left">
						  <Card>
								<CardHeader
									title={ quiz.title }
									subtitle="Subtitle"/>
								<CardText>
									{ quiz.description }
								</CardText>
								<CardActions>
								    <RaisedButton
										label="Edit"
										linkButton={true}
										href={`/quiz/${quiz._id}/edit`}
										secondary={true}
										icon={<FontIcon className="material-icons">edit</FontIcon>}/>
								</CardActions>
							</Card>
	    			</div>
		    		);
				})}
			</div>
	    </div>
    	);
    }
};