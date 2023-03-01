import React, {Component} from 'react';
import Image from "./../../../Assets/Images/logo-2.png";
import {Link} from 'react-router-dom';
import {withStyles} from '@mui/styles';
import {push as Menu} from 'react-burger-menu';
import {Container, Typography} from "@mui/material";

const styles = (theme) => ({
	root: {
		background: theme.palette.background.default,
		padding: '10px 0',
		position: 'fixed',
		zIndex: 99,
		left: 0,
		right: 0,
		top: 0,
		borderBottom: `2px solid ${theme.palette.primary.main}`,
		"& .mobile-menu": {
			'& .content-holder': {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				"& .logo-divider": {
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					width: "100%",
					'& .burger-menu': {
						position: 'relative',
						paddingRight: '40px',
						'& .bm-burger-button': {
							position: 'absolute',
							width: '20px',
							height: '17px',
							left: '10px',
							top: '50%',
							transform: 'translate(0, -50%)',
							outline: 'none',
						},
						'& #react-burger-menu-btn': {
							outline: 'none',
						},
						'& .bm-burger-bars': {
							background: theme.palette.primary.main,
							height: '12% !important',
						},
						'& .bm-burger-bars-hover': {
							background: theme.palette.secondary.main,
							opacity: 1,
						},
						'& .bm-cross-button': {
							height: '24px',
							width: '24px',
						},
						'& .bm-cross': {
							background: '#fff',
						},
						'& .bm-menu-wrap': {
							position: 'fixed',
							height: '100%',
							left: '0',
							top: '0',
						},
						'& .bm-menu': {
							background: theme.palette.primary.main,
							padding: '2.5em 1.5em 0',
							fontSize: '1.15em',
						},
						'& .bm-morph-shape': {
							fill: '#373a47',
						},
						'& .bm-item-list': {
							color: '#b8b7ad',
							padding: '0.8em',
						},
						'& .bm-item': {
							display: 'inline-block',
							margin: '0',
							padding: theme.spacing(0),
							outline: 'none',
						},
						'& .bm-overlay': {
							background: 'rgba(0, 0, 0, 0.3)',
							top: '0',
							left: '0',
						},
						'& nav': {
							'& ul': {
								margin: '0',
								padding: theme.spacing(0),
								'& .dropdown': {
									position: 'relative',
									transition: theme.transitions.easing.easeOut,
									listStyle: 'none',
									'&:not(:last-child)': {
										marginBottom: theme.spacing(4),
									},
									'& .drop-btn': {
										fontSize: theme.typography.h4.fontSize,
										border: 'none',
										cursor: 'pointer',
										textDecoration: 'none',
										transition: 'all 0.3s ease-out',
										background: 'transparent',
										color: '#fff',
										position: 'relative',
										'& .fa': {
											marginLeft: '10px',
										},
									},
									'& .dropdown-content': {
										display: 'none',
										backgroundColor: '#f9f9f9',
										width: '100%',
										transition: theme.transitions.easing.easeOut,
										animation: 'opacity1 .5s',
										borderTop: `1px solid ${theme.palette.primary.main}`,
										'& .nav-dropdown-item': {
											listStyle: 'none',
											borderBottom: `1px solid ${theme.palette.primary.main}`,
											position: 'relative',
											'&:last-child': {
												borderBottom: 'none',
											},
											'& .main-dropdown-list-link': {
												color: theme.palette.text.menuItemColor,
												padding: theme.spacing(2),
												textDecoration: 'none',
												display: 'block',
												transition: theme.transitions.easing.easeOut,
												'&:hover': {
													background: theme.palette.primary.main,
													paddingLeft: '25px',
													color: '#fff',
												},
											},
											'& .menu-line': {
												display: 'none',
												backgroundColor: '#f9f9f9',
												transition: theme.transitions.easing.easeOut,
												animation: 'opacity1 .5s',
												'& .menu-line-item': {
													listStyle: 'none',
													borderBottom: `1px solid ${theme.palette.primary.main}`,
													'&:last-child': {
														borderBottom: 'none',
													},
													'& a': {
														color: theme.palette.text.menuItemColor,
														padding: '10px 10px 10px 15px',
														marginLeft: '10px',
														textDecoration: 'none',
														display: 'block',
														transition: theme.transitions.easing.easeOut,
														position: 'relative',
														"&::before": {
															content: '""',
															position: 'absolute',
															top: '50%',
															left: '0',
															transform: 'translateY(-50%)',
															width: '8px',
															height: '8px',
															borderRadius: theme.shape.borderRadius5,
															backgroundColor: theme.palette.primary.main,
														},
													},
												},
											},
											'&:hover': {
												'& .menu-line': {
													display: 'block',
												},
											},
										},
									},
									'&:hover': {
										'& .dropdown-content': {
											display: 'block',
										},
									},
								},
							},
						},
					},
					'& .logo': {
						'& .text': {
							'& .first-name': {
								fontSize: theme.typography.h5.fontSize,
								color: theme.palette.secondary.main,
								fontWeight: theme.typography.fontWeightMedium,
								textAlign: 'center',
							},
							'& .middle-name': {
								marginBottom: '2px',
								fontSize: theme.typography.h4.fontSize,
								color: theme.palette.secondary.main,
								fontWeight: theme.typography.fontWeightSemiBold,
								textAlign: 'center',
							},
							'& .last-name': {
								marginBottom: theme.spacing(0),
								fontSize: theme.typography.h3.fontSize,
								fontWeight: theme.typography.fontWeightBold,
								color: theme.palette.primary.main,
							},
						},
					},
					'& .img-holder': {
						marginRight: '20px',
						'& img': {
							maxHeight: '30px',
						},
					},
					'& .img-holder2': {
						margin: '0 auto',
						'& img': {
							height: '25px',
						},
					},
					"& .login-buttons-holder":{
						"& a":{
							color: theme.palette.text.gray,
							fontWeight: theme.typography.fontWeightMedium,
						},
					},
				},
			},
		},
		'@media(max-width: 600px)': {
			display: 'block',
		},
		'@media(min-width: 768px)': {
			display: 'block',
		},
		'@media(min-width: 992px)': {
			display: 'none',
		},
	},
});

class MobileMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menuOpen: false,
		};
	}

	handleStateChange(state) {
		this.setState({menuOpen: state.isOpen});
	}

	closeMenu() {
		this.setState({menuOpen: false});
	}

	toggleMenu() {
		this.setState((state) => ({menuOpen: !state.menuOpen}));
	}

	render() {
		const {classes, menu} = this.props;

		return (
			<section className={classes.root}>
				<Container className="mobile-menu">
					<div className="content-holder">
						<div className="logo-divider">
							<div className="burger-menu">
								<Menu
									disableAutoFocus
									isOpen={this.state.menuOpen}
									onStateChange={(state) => this.handleStateChange(state)}
								>
									<nav id="nav">
										<ul>
											{menu.map((item, i) => {
												return (
													<li
														className="dropdown"
														key={item.slug + i}
														onClick={() => this.closeMenu()}
													>
														<Link
															to="#"
															className="drop-btn"
														>
															{item.label}
														</Link>
													</li>
												)
											})}
										</ul>
									</nav>
								</Menu>
							</div>
							<div className="img-holder">
								<Link to="/">
									<img
										src={Image}
										alt="img"
										className="img-fluid"
									/>
								</Link>
							</div>
							<Typography component="div" className='login-buttons-holder' display="flex" alignItems="center" gap={2}>
								<Link to="/login">
									Login
								</Link>
								<Link to="/register">
									Register
								</Link>
							</Typography>
						</div>
					</div>
				</Container>
			</section>
		);
	}
}

export default withStyles(styles, {withTheme: true})(MobileMenu);
