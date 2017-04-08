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
                                        <a href="index.html" > <h3>TunisieElection</h3></a>
                                        <a href="index.html"><img src="images/design-agency/logo-dark.png" alt="Logo" /></a>
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
               <div class="content clearfix">
                 <section className="section-block fullscreen-section fullscreen-section no-overlay fullscreen-inner featured-media page-intro small tm-slider-parallax-container">
					<div className="tm-slider-container full-width-slider" data-parallax data-parallax-fade-out data-animation="slide" data-scale-under="1140" data-scale-min-height="300">
						<ul className="tms-slides">
							<li className="tms-slide" data-image data-force-fit>
								<div className="tms-content">
									<div className="tms-content-inner ">
										<div className="row">
											<div className="column width-12">
												<h1 className="tms-caption  inline"
													data-animate-in="preset:slideInUpShort;duration:200ms;delay:1ms;easing:easeOut;"
													data-no-scale
                                                    style={{color:"white"}}
                                                >
													Bringing Data To People
												</h1>
											</div>
										</div>
									</div>
								</div>
                                <div >
								    <img data-src="/img/blackbg.jpg" data-retina src="images/kids.jpg" alt="" />                                
                                </div>
							</li>
						</ul>
					</div>
				</section>
                <section  className=" section-block feature-2 ">
					<div className="row flex">
						<div className="column width-4 push-7">
							<div className="feature-image mb-mobile-50">
								<div className=""  data-animate-in="preset:slideInRightShort;duration:500ms;easing:easeOut;" data-threshold="0.6">
									<img width="400" height="500" src="img/mun.jpg" alt="Sartre HTML Shop Grid Layou" title="Sartre Multipurpose HTML Template Shop Grid Layout" />
								</div>
							</div>
						</div>
						<div className="column width-5 pull-4 pull-1">
							<div className="feature-content">
								<div className="" data-animate-in="preset:slideInUpShort;duration:500ms;" data-threshold="0.6">
									<h2 className="mb-30">Local Elections</h2>
									<p className="lead">Description about the Local elections Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti recusandae illo eum inventore quam maiores voluptatum totam laborum officia quo, ipsam dolore expedita iusto sequi cum dolorum? Impedit, possimus, molestiae.</p>
									<p>Description about what you can find in this section Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae atque error autem! Aut, explicabo expedita ipsa aspernatur animi libero perferendis magnam veritatis qui iste, enim ea blanditiis iusto tempora cupiditate!</p>
								</div>
							</div>
						</div>
					</div>
				</section>
                <section className="section-block bkg-charcoal feature-2 right">
					<div className="row flex">
						<div className="column width-6">
							<div className="feature-image mb-mobile-50">
								<div className="feature-image-inner center-on-mobile horizon" data-animate-in="preset:slideInRightShort;duration:2000ms;delay:1000ms;" data-threshold="0.6">
									<img src="images/generic/split_administrative.jpg" alt="Sartre HTML Off Canvas Navigation" title="Sartre Multipurpose HTML Off Canvas Navigation" />
								</div>
							</div>
						</div>
						<div className="column width-5 push-1">
							<div className="feature-content">
								<div className="feature-content-inner left center-on-mobile horizon" data-animate-in="preset:slideInUpShort;duration:2000ms;delay:1000ms;" data-threshold="0.6">
									<h2 className="mb-30 color-white">Local Elections</h2>
									<p className="lead color-grey-light">Description about the Local elections</p>
									<p className="color-grey-light">Description about what you can find in this section</p>
								</div>
							</div>
						</div>
					</div>
				</section>
            </div>
            <h1>test</h1>
            <h1>test</h1>
            <h1 style={{marginTop:'5000px'}} >test</h1>
            </div>
        );
    }
}

export default Home;