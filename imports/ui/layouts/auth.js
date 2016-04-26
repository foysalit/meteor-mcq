import React, { Component } from 'react';

// import 'normalize.css/normalize.css';
import 'flexboxgrid/dist/flexboxgrid.min.css';

import {
	AppBar, 
	Icons, 
	FontIcon, 
	IconMenu, 
	MenuItem, 
	IconButton, 
	Drawer
} from 'material-ui';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles/';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { FlowRouter } from 'meteor/kadira:flow-router';


injectTapEventPlugin();

export class AuthLayout extends Component {
	constructor(props) {
		super(props);
		this.menuItems = [
			{ route: '/', text: 'Home', icon: 'home' },
			{ route: '/quiz', text: 'Quizes', icon: 'home' },
			{ route: '/quiz/create', text: 'Create Quiz', icon: 'home' }
		];

		this.state = { open: false };
	};

	toggleMenu(e, menuState) {
		if (typeof menuState === "undefined")
			menuState = !this.state.open;

		if (typeof e === "boolean")
			menuState = e;

		this.setState({open: menuState});
	};

	navigate(selected) {
		FlowRouter.go(selected.route);
		this.toggleMenu(false);
	}

	render() {
		return (
			<MuiThemeProvider muiTheme={getMuiTheme()}>
				<div className="row">
					<Drawer
						docked={false}
						onRequestChange={this.toggleMenu.bind(this)}
						open={this.state.open}>
						{this.menuItems.map((item) => {
							return (
								<MenuItem
									leftIcon={
										<FontIcon className="material-icons">
											{ item.icon }
										</FontIcon>
									}
									onTouchTap={this.navigate.bind(this, item)}
									key={item.route}> 
									{item.text} 
								</MenuItem>);
						})}
					</Drawer>

					<AppBar
						title="Be Quizin"
						onLeftIconButtonTouchTap={this.toggleMenu.bind(this)}
						onTitleTouchTap={this.toggleMenu.bind(this)}
						iconElementRight={
							<IconMenu iconButtonElement={
								<IconButton iconClassName="material-icons">more_vert</IconButton>
							}>
							<MenuItem primaryText="Refresh"/>
							<MenuItem primaryText="Help"/>
							<MenuItem primaryText="Sign out"/>
							</IconMenu>
						} />

					<div className="col-xs-12" style={{marginTop: '15px'}}>
						<div className="box box-container">
							<div className="row center-xs">					
								{ this.props.content }
							</div>
						</div>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}