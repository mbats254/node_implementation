import React, { Component } from 'react'

class More extends Component {
    constructor(props) {
     super(props)
 
     this.state = {
          items: []
     }
 }
 
 componentDidMount() {
        const apiUrl = 'http://127.0.0.1:8000/products/';
        fetch(apiUrl)
            .then((response) => response.json())
            // .then((data) => console.log('This is your data', data))
            .then(data => this.setState({ items: data }));
    }
 
 
  render() {
    var { items } = this.state;
    return (    
      <section className="news py-5" id="news">
		<div className="container py-lg-5">
		<h3 className="heading text-capitalize text-center"> porttitor mollisar lorem, at molestie arcu </h3>
		<p className="subs mt-4 text-center mx-auto">Integer porttitor mollisar lorem, at molestie arcu pulvinar ut non laoreet</p>
        <div className="row news-grids py-lg-5 mt-3 text-center">
        {items.map(item => (        
        
						<div className="col-md-4 newsgrid1" key={item.id}>
							<img src="../../assets/herb-verb/images/g3.jpg" alt="newsimage" className="img-fluid"/>
							<p className="mt-4">{item.name} </p>
                        </div>
                        
                        ))
            }
            </div>
						<div className="text-center mx-auto">
							<a className="btn btn-primary mt-lg-4 mt-3 agile-link-bnr1" href="#" role="button">Learn More</a>
						</div>
		</div>
	</section>  
     
    );
  }
}

export default More
