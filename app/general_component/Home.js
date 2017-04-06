import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
            		{/* Side Navigation Menu */}
                        <aside className="side-navigation-wrapper enter-right" data-no-scrollbar data-animation="push-in">
                            <div className="side-navigation-scroll-pane">
                                <div className="side-navigation-inner">
                                    <div className="side-navigation-header">
                                        <div className="navigation-hide side-nav-hide">
                                            <a href="#">
                                                <span className="icon-cancel medium"></span>
                                            </a>
                                        </div>
                                    </div>
                                    <nav className="side-navigation">
                                        <ul>
                                            <li>
                                                <a href="#" className="contains-sub-menu">Demos</a>
                                            </li>
                                            <li>
                                                <a href="#" className="contains-sub-menu">Pages</a>
                                            </li>
                                            <li>
                                                <a href="#" className="contains-sub-menu">Blog</a>
                                            </li>
                                            <li>
                                                <a href="#" className="contains-sub-menu">Shop</a>
                                            </li>
                                            <li>
                                                <a href="#" className="contains-sub-menu">Folio</a>
                                            </li>
                                            <li>
                                                <a href="#" className="contains-sub-menu">Elements</a>
                                            </li>
                                        </ul>
                                    </nav>
                                    <nav className="side-navigation nav-block">
                                    </nav>
                                    <div className="side-navigation-footer">
                                        <p className="copyright no-margin-bottom">&copy; 2014 THEMEMOUNTAIN.</p>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    {/* Side Navigation Menu End */}
                    	<div className="wrapper reveal-side-navigation">
		<div className="wrapper-inner">
               			<header className="header header-fixed-on-mobile" data-sticky-threshold="0" data-bkg-threshold="390" data-compact-threshold="390">
				<div className="header-inner">
					<div className="row nav-bar">
						<div className="column width-12 nav-bar-inner">
							<div className="logo">
								<div className="logo-inner">
									<a href="index.html"><img src="images/design-agency/logo-dark.png" alt="Sartre Logo" /></a>
									<a href="index.html"><img src="images/design-agency/logo.png" alt="Sartre Logo" /></a>
								</div>
							</div>
							<nav className="navigation nav-block secondary-navigation nav-right">
								<ul>
									<li>
										{/* Dropdown Cart Overview */}
										<div className="dropdown">
											<a href="#" className="nav-icon cart button no-page-fade"><span className="cart-indication"><span ><i className="fa fa-language" aria-hidden="true"></i></span> </span></a>
											<ul className="dropdown-list custom-content cart-overview">
												<li className="cart-item">
													<div className="product-details">
														<a href="single-product.html" className="product-title">
															English
														</a>
													</div>
												</li>
                                                <li className="cart-item">
													<div className="product-details">
														<a href="single-product.html" className="product-title">
															French
														</a>
													</div>
												</li>
                                                <li className="cart-item">
													<div className="product-details">
														<a href="single-product.html" className="product-title">
															Arabic
														</a>
													</div>
												</li>

											</ul>
										</div>
									</li>
									
                                    <li className="aux-navigation hide">
										{/* Aux Navigation */}
										<a href="#" className="navigation-show side-nav-show nav-icon">
											<span className="icon-menu"></span>
										</a>
									</li>
								</ul>
							</nav>
							<nav className="navigation nav-block primary-navigation nav-right">
								<ul>
									<li>
										<a href="index.html">Home</a>
										
									</li>
									<li className="current">
										<a href="about-style-one.html">Local Election</a>

									</li>
									<li className="contains-mega-sub-menu">
										<a href="portfolio-three-columns.html">Election Data</a>

									</li>
									<li>
										<a href="blog.html">Election Results</a>

									</li>
									<li className="sub-menu-right">
										<a href="shop-grid.html">Analysis</a>

									</li>

								</ul>
							</nav>
						</div>
					</div>
				</div>
			</header> 
            </div>
            </div>
            <h1>dsqdsq</h1>
            <h1>dsqdsq</h1>
            <h1 style={{marginTop:'5000px'}} >dsqdsq</h1>
            </div>
        );
    }
}

export default Home;