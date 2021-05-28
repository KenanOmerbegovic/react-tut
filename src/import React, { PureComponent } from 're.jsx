import React, { PureComponent } from 'react';
class App extends Component {
    render() { 
        return ( 
            <div className="App">
                		/* LANDING PAGE */
		<section id="home">
			/* OVERLAY */
			<div className="overlay">
				/* PRIMARY NAVIGATION */
				<nav role="navigation">
					<ul className="vertical-list">
						<li><a href="#home">Home</a></li>
						<li><a href="#about">About me</a></li>
						<li><a href="#portfolio">Portfolio</a></li>
						<li><a href="#contact" >Contact Me</a></li>
					</ul>
				</nav>
				/* END OF PRIMARY NAVIGATION */

				/* CONTAINER */
				<div className="container">
					<h1><span className="logo">Portfolio</span><small>web / mobile development</small></h1>
						<ul className="social-links vertical-list">
						<li><a href="https://twitter.com" className="noir twitter" target="_blank">Twitter</a></li>
						<li><a href="" className="noir linkedin" target="_blank">LinkedIN</a></li>
						<li><a href="https://github.com/KenanOmerbegovic" className="noir freecodecamp" target="_blank">GitHub</a></li>
					</ul>
				</div>
				/* END OF CONTAINER */
			</div>
			/* END OF OVERLAY */
		</section>
		/* END OF LANDING PAGE */


		/* ABOUT */
		<section id="about">
			/* CONTAINER */
			<div className="container">
				<h2>a little about me...</h2>
				<div className="row info">
					<div className="col-sm-8">
						<p>
							I'm currently studying Software Engineering at Burch University having just started my 1st year. I obsess over the minor details in CSS/HTML and am passionate in getting computers to more effectively work on your side by freeing you of the burdens of carrying out repetitive tasks through automative processes.
						<span className="signature">Kenan Omerbegovic</span></p>
					</div>


				</div>
				
				<div id="skill-set">
					<h3>Skills</h3>
					<ul className="vertical-list">
						<li>
							<ul className="vertical-list skills" id="web-development-skills">
								<li>HTML</li>
								<li>CSS</li>
								<li>JavaScript</li>
							</ul>
						</li>
						<li>
							<ul className="vertical-list skills" id="automation-skills">
								<li>React</li>
							</ul>
						</li>

						<li>
							<ul className="vertical-list skills" id="misc-skills">
								<li>React Native</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			/* END OF CONTAINER */
		</section>
		/* END OF ABOUT */

		/* PORTFOLIO */
		<section id="portfolio">
			
					/* CONTAINER */
					<div className="container">
						<h2>some of my work...</h2>
					</div>
					/* END OF CONTAINER */
					
					<div className="container">
						<section>
								/* OVERLAY */
								<div className="overlay">
									/* DESCRIPTION */
									<div className="description">
										<p>
											Designed to look ad act like an actual book.Lorem Ipsum is simply dummy text 
											of the printing and typesetting industry. 
											Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
											when an unknown printer took a galley of type and scrambled it to make a type specimen book.
										</p>
										
										<h6>Tools<span className="glyphicon glyphicon-cog"></span></h6>
										<ul className="tools vertical-list">
											<li>PHP</li>
											<li>BEM</li>
											<li>SASS</li>
											<li>JS</li>
										</ul>
									</div>
									/* END OF DESCRIPTION */
									
									<img src="IMG/Book.png" alt="Book" />
									<h4 className="heading"><span className="glyphicon glyphicon-hand-up"></span>Portfolio book(page flip)</h4>
								</div>
								/* END OF OVERLAY */
							</section>
							/* END OF SECTION */

							<section>
								/* OVERLAY */
								<div className="overlay">
									/* DESCRIPTION */
									<div className="description">
										<p>
											Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
										</p>
										
										<h6>Tools<span className="glyphicon glyphicon-cog"></span></h6>
										<ul className="tools vertical-list">
											<li>Python</li>
											<li>Selenium</li>
											<li>COM (Component Object Model)</li>
										</ul>
									</div>
									/* END OF DESCRIPTION */
									
									<img src="IMG/movie-pic.PNG" alt="Movie Pic" />
									<h4 className="heading"><span className="glyphicon glyphicon-hand-up"></span>Movie site</h4>
								</div>
								/* END OF OVERLAY */
							</section>
							/* END OF SECTION */
						
							/* SECTION */
							<section>
								/* OVERLAY */
								<div className="overlay">
									/* DESCRIPTION */
									<div className="description">
										<p>
											Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
										</p>
										
										<h6>Tools<span className="glyphicon glyphicon-cog"></span></h6>
										<ul className="tools vertical-list">
											<li>HTML5</li>
											<li>CSS3</li>
											<li>JavaScript</li>
											<li>XML</li>
											<li>STAND4S Network API</li>
										</ul>
									</div>
									/* END OF DESCRIPTION */
									
									<img src="IMG/bookstore.PNG" alt="Bookstore" />
									<h4 className="heading"><span className="glyphicon glyphicon-hand-up"></span>Bookstore</h4>
								</div>
								/* END OF OVERLAY */
							</section>
							/* END OF SECTION */

						/* COLUMN 3 */
							/* SECTION */
							<section>
								/* OVERLAY */
								<div className="overlay">
									/* DESCRIPTION */
									<div className="description">
										<p>
											Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
										</p>
										
										<h6>Tools<span className="glyphicon glyphicon-cog"></span></h6>
										<ul className="tools vertical-list">
											<li>Google Maps API</li>
											<li>Forecast API</li>
											<li>AJAX</li>
										</ul>
									</div>
									/* END OF DESCRIPTION */
									
									<img src="IMG/restoraunt.PNG" alt="Restoraunt" />
									<h4 className="heading"><span className="glyphicon glyphicon-hand-up"></span>Restoraunt</h4>
								</div>
								/* END OF OVERLAY */
							</section>
							/* END OF SECTION */

							/* SECTION */
							<section>
								/* OVERLAY */
								<div className="overlay">
									/* DESCRIPTION */
									<div className="description">
										<p>
											Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  
										</p>
										
										<h6>Tools<span className="glyphicon glyphicon-cog"></span></h6>
										<ul className="tools vertical-list">
											<li>JavaScript</li>
											<li>HTML &amp; CSS</li>
										</ul>
									</div>
									/* END OF DESCRIPTION */
									
									<img src="IMG/apple-rec.PNG" alt="Apple" />
									<h4 className="heading"><span className="glyphicon glyphicon-hand-up"></span>Apple recreation</h4>
								</div>
								/* END OF OVERLAY */
							</section>
							/* END OF SECTION */
                                                
							/* SECTION */
							<section>
								/* OVERLAY */
								<div className="overlay">
									/* DESCRIPTION */
									<div className="description">
										<p>
											Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
										</p>
										
										<h6>Tools<span className="glyphicon glyphicon-cog"></span></h6>
										<ul className="tools vertical-list">
											<li>JavaScript</li>
											<li>JQuery</li>
											<li>Less</li>
											<li>Font Awesome</li>
										</ul>
									</div>
									/* END OF DESCRIPTION */
									
									<img src="IMG/school-list.PNG" alt="School list" />
									<h4 className="heading"><span className="glyphicon glyphicon-hand-up"></span>School list</h4>
								</div>
								/* END OF OVERLAY */
							</section>
							/* END OF SECTION */
										
							/* COLUMN 1 */
							/* SECTION */
							<section>
								/* OVERLAY */
								<div className="overlay">
									/* DESCRIPTION */
									<div className="description">
										<p>
											Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
										</p>
										
										<h6>Tools<span className="glyphicon glyphicon-cog"></span></h6>
										<ul className="tools vertical-list">
											<li>JQuery</li>
											<li>Bootstrap (Modal)</li>
											<li>HTML &amp; CSS</li>
										</ul>
									</div>
									/* END OF DESCRIPTION */
									
									<img src="IMG/bakery.PNG" alt="Bakery" />
									<h4 className="heading"><span className="glyphicon glyphicon-hand-up"></span>Bakery</h4>
								</div>
								/* END OF OVERLAY */
							</section>
							/* END OF SECTION */
						
						/* COLUMN 2 */
							/* SECTION */
							<section>
								/* OVERLAY */
								<div className="overlay">
									/* DESCRIPTION */
									<div className="description">
										<p>
											Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
										</p>
										
										<h6>Tools<span className="glyphicon glyphicon-cog"></span></h6>
										<ul className="tools vertical-list">
											<li>MeteorJS</li>
											<li>JavaScript</li>
                                                                                        <li>MongoDB</li>
											<li>Stylus</li>
										</ul>
									</div>
									/* END OF DESCRIPTION */
									
									<img src="IMG/gas-station.PNG" alt="Gas station" />
									<h4 className="heading"><span className="glyphicon glyphicon-hand-up"></span>Gas station site</h4>
								</div>
								/* END OF OVERLAY */
							</section>
							/* END OF SECTION */
                            </div>
					</section>
					/* END OF PORTFOLIO */
					
                    

		/* CONTACT PAGE */
		<section>
			<div className="container">
				<a name="contact"><h2>get in touch...</h2></a>
				<div className="cards">
					<div className="card twitter">
						<h3 className="card-title-large">Twitter</h3>
						<h5 className="card-title-small">Twitter</h5>
						<p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
							Necessitatibus natus praesentium veniam totam dolor, 
							sunt blanditiis autem dolorem obcaecati quisquam, atque, 
							fuga quibusdam rerum voluptate quaerat ipsum deserunt! Possimus, blanditiis.
						</p>
						<a href="#" className="card-cta">&rarr;</a>
					</div>
		
					<div className="card instagram">
						<h3 className="card-title-large">Instagram</h3>
						<h5 className="card-title-small">Instagram</h5>
						<p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
							Necessitatibus natus praesentium veniam totam dolor, 
							sunt blanditiis autem dolorem obcaecati quisquam, atque, 
							fuga quibusdam rerum voluptate quaerat ipsum deserunt! Possimus, blanditiis.
						</p>
						<a href="#" className="card-cta">&rarr;</a>
					</div>
		
					<div className="card facebook">
						<h3 className="card-title-large">Facebook</h3>
						<h5 className="card-title-small">Facebook</h5>
						<p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
							Necessitatibus natus praesentium veniam totam dolor, 
							sunt blanditiis autem dolorem obcaecati quisquam, atque, 
							fuga quibusdam rerum voluptate quaerat ipsum deserunt! Possimus, blanditiis.
						</p>
						<a href="#" className="card-cta">&rarr;</a>
					</div>
		
					<div className="card youtube">
						<h3 className="card-title-large">Youtube</h3>
						<h5 className="card-title-small">Youtube</h5>
						<p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
							Necessitatibus natus praesentium veniam totam dolor, 
							sunt blanditiis autem dolorem obcaecati quisquam, atque, 
							fuga quibusdam rerum voluptate quaerat ipsum deserunt! Possimus, blanditiis.
						</p>
						<a href="#" className="card-cta">&rarr;</a>
					</div>
				</div>
			</div>
		</section>
		/* END OF CONTACT PAGE */
/* partial */
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script><script  src="./script.js"></script>

            </div>
         );
    }
}
 
export default App;