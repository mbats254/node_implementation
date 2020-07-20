import React, { Component } from 'react'

class News extends Component {
    image_directory = ''
    news = [
    {
      Id: 1,
        Title: "Integer porttitor mollisar lorem, at molestie arcu pulvinar",
      Description:
        "Nulla pellentesque mi non laoreet eleifend. Integer porttitor mollisar lorem, at molestie arcu pulvinar ut. pellentesque mi non laoreet eleifend porttitor mollisar",
      image: "g1.jpg"
    },

    {
        Id: 2,
        Title: "Pellentesque mi non laoreet eleifend. Integer porttitor",
      Description:
        "Nulla pellentesque mi non laoreet eleifend. Integer porttitor mollisar lorem, at molestie arcu pulvinar ut. pellentesque mi non laoreet eleifend porttitor mollisar",
      image: "g2.jpg"
    }
    ]

    render() {
        return (            
            <section className="news py-5" id="about">
	<div className="container py-lg-5">
		<div className="row news-grids py-lg-4 text-center">
        {this.news.map(item => (   
        <div className="col-md-6 newsgrid1" key={item.Id}>
				<img src={`../../assets/herb-verb/images/${item.image}`} alt="newsimage" className="img-fluid"/>
				<div className="new-tp">
					<h4 className=" mt-4">{item.Title}</h4>
					<p className="mt-4">{item.Description}</p>
					<a className="btn btn-primary mt-lg-4 mt-3 agile-link-bnr1 scroll" href="#services" role="button">Learn More</a>
				</div>
            </div>
             
            ))}
                    </div>                   

	</div>
</section>

        )
    }
}

export default News
