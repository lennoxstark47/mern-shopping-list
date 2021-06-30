import React, { Component } from 'react';

import {
	Container,
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText,
} from 'reactstrap';

class AppNavbar extends Component {
	constructor(props) {
		super();
		this.state = {
			isOpen: false,
		};
	}

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	};

	render() {
		return (
			<div>
				<Navbar color='dark' dark expand='sm'>
					<Container>
						<NavbarBrand href='/'>
							MernshoppingList
						</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse
							isOpen={this.state.isOpen}
							navbar
							style={{ justifyContent: 'end' }}>
							<Nav className='mr-auto' navbar>
								<NavItem>
									<NavLink href='https://github.com/lennoxstark47'>
										Github
									</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Container>
				</Navbar>
			</div>
		);
	}
}

export default AppNavbar;
