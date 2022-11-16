import React from 'react';

$(function () {
  $(window).on('scroll', function () {
      if ( $(window).scrollTop() > 10 ) {
          $('.navbar').addClass('active');
      } else {
          $('.navbar').removeClass('active');
      }
  });
});


function Nav() {
  return (
    <>
      <header class="header">
        <nav class="navbar navbar-expand-lg fixed-top py-3">
          <div class="container"><a href="#" class="navbar-brand text-uppercase font-weight-bold">Transparent Nav</a>
            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><i class="fa fa-bars"></i></button>

            <div id="navbarSupportedContent" class="collapse navbar-collapse">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active"><a href="#" class="nav-link text-uppercase font-weight-bold">Home <span class="sr-only">(current)</span></a></li>
                <li class="nav-item"><a href="#" class="nav-link text-uppercase font-weight-bold">About</a></li>
                <li class="nav-item"><a href="#" class="nav-link text-uppercase font-weight-bold">Gallery</a></li>
                <li class="nav-item"><a href="#" class="nav-link text-uppercase font-weight-bold">Portfolio</a></li>
                <li class="nav-item"><a href="#" class="nav-link text-uppercase font-weight-bold">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Carousel Bootstrap 5 */}
      <div id="carousel-2" class="carousel slide carousel-fade" data-ride="carousel" data-interval="6000">
        <ol class="carousel-indicators">
          <li data-target="#carousel-2" data-slide-to="0" class="active"></li>
          <li data-target="#carousel-2" data-slide-to="1"></li>
          <li data-target="#carousel-2" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">

          <div class="carousel-item active">
            <a href="https://journals.sagepub.com/doi/10.1111/1467-954X.12082">

              <img src="https://images.pexels.com/photos/5911136/pexels-photo-5911136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="responsive image" class="d-block img-fluid" />

              <div class="carousel-caption">
                <div>
                  <h2>The Sociology of Love</h2>
                  <p>Romance and Love In Sociological Discussion.</p>
                  <p>By:Julia Carter</p>
                  <span class="btn btn-sm btn-outline-secondary"><a href="https://thesociologicalreview.org/collections/interviews/the-sociology-of-love/">Learn More</a></span>
                </div>
              </div>
            </a>
          </div>


          <div class="carousel-item">
            <a href="https://www.sandiegouniontribune.com/topic/hello-gen-z">
              <img src="https://images.pexels.com/photos/3419731/pexels-photo-3419731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="responsive image" class="d-block img-fluid" />

              <div class="carousel-caption justify-content-center align-items-center">
                <div>
                  <h2>Gen-Z and Friendships Post Pandemic and You.</h2>
                  <p>Why Gen Z is the most connected generation but also the loneliest.</p>
                  <p>By:Gael Aitor</p>
                  <span class="btn btn-sm btn-outline-secondary"><a href="https://www.sandiegouniontribune.com/opinion/commentary/story/2020-07-24/hello-genz-pandemic-mental-health">Read More</a></span>
                </div>
              </div>
            </a>
          </div>

          <div class="carousel-item">
            <a href="https://www.pewresearch.org/social-trends/2019/02/14/millennial-life-how-young-adulthood-today-compares-with-prior-generations-2/">

              <img src="https://images.pexels.com/photos/8730069/pexels-photo-8730069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="responsive image" class="d-block img-fluid" />


              <div class="carousel-caption justify-content-center align-items-center">
                <div>
                  <h2>Research Shows That Millennials Approaching Family More Differently Than Other Generations.</h2>
                  <p>New Pew Research Shows Millennials Approach to Parenthood Much Unique Than Other Age Groups.</p>
                  <p>By:Amanda Barroso, Kim Parker, Jesse Bennett</p>
                  <span class="btn btn-sm btn-secondary"><a href="https://www.pewresearch.org/social-trends/2020/05/27/as-millennials-near-40-theyre-approaching-family-life-differently-than-previous-generations/">Read More.</a></span>
                </div>
              </div>
            </a>
          </div>

        </div>

        <a class="carousel-control-prev" href="#carousel-2" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carousel-2" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </>

  );
}

export default Nav;