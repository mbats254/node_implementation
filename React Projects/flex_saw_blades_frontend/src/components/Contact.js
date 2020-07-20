import React, { Component } from 'react'
import axios from 'axios';

class Contact extends Component {
    
    sendMessage = (event, requestType, contactUniqid) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const message = event.target.message.value;
                
        switch (requestType) {
            case 'post':    
           return  axios.post('http://127.0.0.1:8000/post/contact/',{
                    name:name,
                    email:email,
                    message:message
                })
                .then(res => console.log(res))
                .catch(err => console.err(err))
            // case 'put':
            //  return axios.post(`http://127.0.0.1:8000/post/contact/${contactUniqid}/`,{
            //         name:name,
            //         email:email,
            //         message:message
            //     })
            //     .then(res => console.log(res))
        }
        
    }
        // fetch('http://127.0.0.1:8000/products/', {
        //     method: 'POST',
        //     body: data,
        // });
        
        
  render() {
    return (
      <div>
      <section className="contact py-5" id="contact">
		<div className="container py-lg-5">
			<div className="text-center">
				<h3 className="heading text-capitalize text-center"> porttitor mollisar lorem, at molestie arcu </h3>
				<p className="subs mt-4 mb-4 pt-2 text-center mx-auto">Nulla pellentesque mi non laoreet eleifend. Integer porttitor mollisar lorem, at molestie arcu pulvinar ut. Proin ac fermentum est. Cras mi ipsum,</p>
			</div>
			<div className="row contact-top">
				<div className="col-lg-6 contact_grid_right">
					<form onSubmit={(event) => this.sendMessage(event)}>
						<div className="row contact_top">
							<div className="col-sm-6">
								<input type="text" name="name" placeholder="Name" required/>
							</div>
							<div className="col-sm-6">
								<input type="email" name="email" placeholder="Email" required/>
							</div>
						</div>	
							<textarea name="message" required placeholder="Message..."></textarea>
							<button type="submit" className="btn" >Send Message</button>
							<button type="reset" className="btn" >Clear Form</button>
							<div className="clearfix"> </div>
					</form>
				</div>
				<div className="col-lg-6 contact_grid_left">
					<ul className="list-unstyled">
							<li>
								<div className="row">
									<div className="col-3">
										<span className="fa fa-facebook"></span>
									</div>
									<div className="col-9">
										<a href="#">facebook.com</a>
									</div>
								</div>
							</li>
							<li>
								<div className="row">
									<div className="col-3">
										<span className="fa fa-twitter"></span>
									</div>
									<div className="col-9">
										<a href="#">twitter.com</a>
									</div>
								</div>
							</li>
							<li className="mt-5">
								<div className="row">
									<div className="col-3">
										<span className="fa fa-instagram"></span>
									</div>
									<div className="col-9">
										<a href="#">instagram.com</a>
									</div>
								</div>
							</li>
							<li className="mt-5">
								<div className="row">
									<div className="col-3">
										<span className="fa fa-dribbble"></span>
									</div>
									<div className="col-9">
										<a href="#">dribbble.com</a>
									</div>
								</div>
							</li>
							<li className="mt-5">
								<div className="row">
									<div className="col-3">
										<span className="fa fa-linkedin"></span>
									</div>
									<div className="col-9">
										<a href="#">linkedin.com</a>
									</div>
								</div>
							</li>
							<li className="mt-5">
								<div className="row">
									<div className="col-3">
										<span className="fa fa-pinterest"></span>
									</div>
									<div className="col-9">
										<a href="#">pinterest.com</a>
									</div>
								</div>
							</li>
						</ul>
				</div>
			</div>
			<div className="cpy-right text-center py-5">	
				<p>© 2018 Herb. All rights reserved | Design by
					<a href="http://w3layouts.com"> W3layouts.</a>
				</p>
			</div>
		</div>
	</section>
      </div>
    )
  }
}

export default Contact
