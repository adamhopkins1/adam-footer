import React from "react";

$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 10) {
      $(".navbar").addClass("active");
    } else {
      $(".navbar").removeClass("active");
    }
  });
});

const Home = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg fixed-top py-3">
          <div className="container">
            <a
              href="#"
              className="navbar-brand text-uppercase font-weight-bold"
            >
              The Blog
            </a>
            <button
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler navbar-toggler-right"
            >
              <i className="fa fa-bars"></i>
            </button>

            <div
              id="navbarSupportedContent"
              className="collapse navbar-collapse"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a
                    href="#"
                    className="nav-link text-uppercase font-weight-bold"
                  >
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link text-uppercase font-weight-bold"
                  >
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link text-uppercase font-weight-bold"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link text-uppercase font-weight-bold"
                  >
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link text-uppercase font-weight-bold"
                  >
                    Resources
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div
        id="carousel-2"
        className="carousel slide carousel-fade"
        data-ride="carousel"
        data-interval="6000"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carousel-2"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carousel-2" data-slide-to="1"></li>
          <li data-target="#carousel-2" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <a href="https://journals.sagepub.com/doi/10.1111/1467-954X.12082">
              <img
                src="https://images.pexels.com/photos/5911136/pexels-photo-5911136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="responsive image"
                className="d-block img-fluid"
              />

              <div className="carousel-caption">
                <div>
                  <h2>The Sociology of Love</h2>
                  <p>Romance and Love In Sociological Discussion.</p>
                  <p>By:Julia Carter</p>
                  <span className="btn btn-sm btn-outline-secondary">
                    <a href="https://thesociologicalreview.org/collections/interviews/the-sociology-of-love/">
                      Learn More
                    </a>
                  </span>
                </div>
              </div>
            </a>
          </div>

          <div className="carousel-item">
            <a href="https://www.sandiegouniontribune.com/topic/hello-gen-z">
              <img
                src="https://images.pexels.com/photos/3419731/pexels-photo-3419731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="responsive image"
                className="d-block img-fluid"
              />

              <div className="carousel-caption justify-content-center align-items-center">
                <div>
                  <h2>Gen-Z and Friendships Post Pandemic and You.</h2>
                  <p>
                    Why Gen Z is the most connected generation but also the
                    loneliest.
                  </p>
                  <p>By:Gael Aitor</p>
                  <span className="btn btn-sm btn-outline-secondary">
                    <a href="https://www.sandiegouniontribune.com/opinion/commentary/story/2020-07-24/hello-genz-pandemic-mental-health">
                      Read More
                    </a>
                  </span>
                </div>
              </div>
            </a>
          </div>

          <div className="carousel-item">
            <a href="https://www.pewresearch.org/social-trends/2019/02/14/millennial-life-how-young-adulthood-today-compares-with-prior-generations-2/">
              <img
                src="https://images.pexels.com/photos/8730069/pexels-photo-8730069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="responsive image"
                className="d-block img-fluid"
              />

              <div className="carousel-caption justify-content-center align-items-center">
                <div>
                  <h2>
                    Research Shows That Millennials Approaching Family More
                    Differently Than Other Generations.
                  </h2>
                  <p>
                    New Pew Research Shows Millennials Approach to Parenthood
                    Much Unique Than Other Age Groups.
                  </p>
                  <p>By:Amanda Barroso, Kim Parker, Jesse Bennett</p>
                  <span className="btn btn-sm btn-secondary">
                    <a href="https://www.pewresearch.org/social-trends/2020/05/27/as-millennials-near-40-theyre-approaching-family-life-differently-than-previous-generations/">
                      Read More.
                    </a>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#carousel-2"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carousel-2"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>

        <div className="article-list">
          <div className="container">
            <div className="intro">
              <h2 className="text-center">Tech Sociology</h2>
              <p className="text-center">
                Putting a Spotlight on Big Data and Sociological Perspectives.
              </p>
            </div>
            <div className="row articles">
              <div className="col-sm-6 col-md-4 item">
                <a href="https://www.popsci.com/technology/google-ai-wordcraft/">
                  <img
                    className="img-fluid"
                    src="https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                </a>
                <h3 className="name">
                  Google’s AI has a long way to go before writing the next great
                  novel
                </h3>
                <p className="description">
                  Artificial intelligence has come a long way since the 1950s,
                  and it has taken on an impressive array of tasks. It can solve
                  math problems, detect natural disasters, identify different
                  living organisms, pilot ships and more. But for tech giants
                  like Google and Meta, one of their holy grails is formulating
                  an AI that can understand language the way that humans do (a
                  quest that at times, comes with its own set of conflicts).
                </p>
                <a
                  href="https://www.popsci.com/technology/google-ai-wordcraft/"
                  className="action"
                >
                  <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
              <div className="col-sm-6 col-md-4 item">
                <a href="https://www.compact.nl/en/articles/the-economic-and-social-impacts-of-fully-autonomous-vehicles/">
                  <img
                    className="img-fluid"
                    src="https://images.pexels.com/photos/10854966/pexels-photo-10854966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                </a>
                <h3 className="name">
                  THE ECONOMIC AND SOCIAL IMPACTS OF FULLY AUTONOMOUS VEHICLES.
                </h3>
                <p className="description">
                  While many people see autonomous vehicles as the solution to
                  reduce congestion, traffic accidents and greenhouse gas
                  emissions, others believe this technology will result in a
                  loss of jobs in many sectors. Taking a holistic view on this
                  technology, by taking both positive and negative impacts into
                  account and converting them into societal costs and benefits,
                  can result in new insights..
                </p>
                <a
                  href="https://www.compact.nl/en/articles/the-economic-and-social-impacts-of-fully-autonomous-vehicles/"
                  className="action"
                >
                  <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
              <div className="col-sm-6 col-md-4 item">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="https://images.pexels.com/photos/8386423/pexels-photo-8386423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                </a>
                <h3 className="name">
                  Sociological Perspectives on Artificial Intelligence: A
                  Typological Reading
                </h3>
                <p className="description">
                  Sociological interest in studying different aspects of AI and
                  society has increased as AI systems have been commercialized,
                  and AI technologies have become more pervasive in different
                  domains.Research literature has exploded as a
                  consequence.Navigating this vast amount of literature is
                  challenging for those who just entered the field of the
                  sociology of AI.
                </p>
                <a
                  href="https://montrealethics.ai/sociological-perspectives-on-artificial-intelligence-a-typological-reading/"
                  className="action"
                >
                  <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="article-list">
          <div className="container">
            <div className="intro">
              <h2 className="text-center">Consumer Sociology</h2>
              <p className="text-center">
                Cultural Human Economics and Its Effect On society.
              </p>
            </div>
            <div className="row articles">
              <div className="col-sm-6 col-md-4 item">
                <a href="https://www.nature.com/articles/s41599-021-00855-1">
                  <img
                    className="img-fluid"
                    src="https://images.pexels.com/photos/1181769/pexels-photo-1181769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                </a>
                <h3 className="name">
                  Cultural Divergence in popular music: the increasing diversity
                  of music consumption on Spotify across countries
                </h3>
                <p className="description">
                  The digitization of music has changed how we consume, produce,
                  and distribute music. In this paper, we explore the effects of
                  digitization and streaming on the globalization of popular
                  music. While some argue that digitization has led to more
                  diverse cultural markets, others consider that the increasing
                  accessibility to international music would result in a
                  globalized market where a few artists garner all the
                  attention.
                </p>
                <a href="#" className="action">
                  <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
              <div className="col-sm-6 col-md-4 item">
                <a href="https://www.nature.com/articles/s41598-022-23223-8">
                  <img
                    className="img-fluid"
                    src="https://images.pexels.com/photos/1267321/pexels-photo-1267321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                </a>
                <h3 className="name">
                  Institutional similarity drives cultural similarity among
                  online communities
                </h3>
                <p className="description">
                  Human organizations are driven by their rules and cultures.
                  But the effects of rules and cultures on organizational
                  development cannot be understood without untangling their
                  effects on each other.
                </p>
                <a href="#" className="action">
                  <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
              <div className="col-sm-6 col-md-4 item">
                <a href="https://mashable.com/article/why-we-follow-influencers-on-instagram">
                  <img
                    className="img-fluid"
                    src="https://images.pexels.com/photos/7676485/pexels-photo-7676485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                </a>
                <h3 className="name">
                  The science behind why we follow influencers — and how it
                  leads to overconsumption
                </h3>
                <p className="description">
                  Even if you're not walking into every social media interaction
                  with the dark realities of those platforms looming over you,
                  it's not difficult to notice an internal reaction to following
                  influencers.
                </p>
                <a href="#" className="action">
                  <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="article-list">
          <div className="container">
            <div className="intro">
              <h2 className="text-center">Informational Inflation Sociology</h2>
              <p className="text-center">
                How Inflation is impacting society and everyday bottom lines.
              </p>
            </div>
            <div className="row articles">
              <div className="col-sm-6 col-md-4 item">
                <a href="https://www.washingtonpost.com/business/2022/07/03/inflation-homeless-rent-housing/">
                  <img
                    className="img-fluid"
                    src="https://images.pexels.com/photos/9532020/pexels-photo-9532020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                </a>
                <h3 className="name">Inflation is making homelessness worse</h3>
                <p className="description">
                  Rising housing costs, combined with persistent inflation for
                  basic necessities such as gas and food, have left more
                  Americans newly homeless and millions more fearing they’ll
                  soon lose their homes.
                </p>
                <a href="" className="action">
                  <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
              <div className="col-sm-6 col-md-4 item">
                <a href="https://academic.oup.com/jn/article/152/8/1944/6548198">
                  <img
                    className="img-fluid"
                    src="https://images.unsplash.com/photo-1615226160956-64db367be200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80"
                  />
                </a>
                <h3 className="name">
                  Food insecurity risk related to diabetes later in life
                </h3>
                <p className="description">
                  Food insecurity is theorized to affect health through
                  constrained dietary options and a household's strategies
                  enacted to compensate with bouts of food shortages.
                </p>
                <a href="#" className="action">
                  <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
              <div className="col-sm-6 col-md-4 item">
                <a href="https://www.cdc.gov/nchs/data/vsrr/vsrr023.pdf">
                  <img
                    className="img-fluid"
                    src="https://images.unsplash.com/photo-1534954553104-88cb75be7648?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                  />
                </a>
                <h3 className="name">
                  Inflation and Poverty tied to Lower Life Expectancy In the
                  United States
                </h3>
                <p className="description">
                  Life expectancy at birth in the United States declined nearly
                  a year from 2020 to 2021, according to new provisional data
                  from the CDC’s National Center for Health Statistics (NCHS).
                  That decline – 77.0 to 76.1 years – took U.S. life expectancy
                  at birth to its lowest level since 1996. The 0.9 year drop in
                  life expectancy in 2021, along with a 1.8 year drop in 2020,
                  was the biggest two-year decline in life expectancy since
                  1921-1923.
                </p>
                <a href="#" className="action">
                  <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <footer class="footer_area section_padding_130_0">
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-6 col-lg-4">
                <div class="single-footer-widget section_padding_0_130">
                  <div class="footer-logo mb-3"></div>
                  <p>
                    The Blog is a Pop Sociology Blog that Puts a Spotlight on
                    Common Sociological Topics That Readers Can Relate to.
                  </p>
                  <div class="copywrite-text mb-5">
                    <p class="mb-0">
                      Made with <i class="lni-heart mr-1"></i>by
                      <a class="ml-1" href="https://github.com/adamhopkins1">
                        The Blog
                      </a>
                    </p>
                  </div>
                  <div class="footer_social_area">
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      data-original-title="Facebook"
                    >
                      <i class="fa fa-facebook"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      data-original-title="Pinterest"
                    >
                      <i class="fa fa-pinterest"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      data-original-title="Youtube"
                    >
                      <i class="fa fa-youtube"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      data-original-title="Instagram"
                    >
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg">
                <div class="single-footer-widget section_padding_0_130">
                  <h5 class="widget-title">Home</h5>
                  <div class="footer_menu">
                    <ul>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">FAQ &amp; Policy</a>
                      </li>
                      <li>
                        <a href="#">Resources</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg">
                <div class="single-footer-widget section_padding_0_130">
                  <h5 class="widget-title">Location</h5>
                  <div class="footer_menu">
                    <ul>
                      <li>
                        <a href="#">Legal</a>
                      </li>
                      <li>
                        <a href="#">Support</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Term &amp; Data Usage</a>
                      </li>
                      <li>
                        <a href="#">Contribute & Get Paid</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg">
                <div class="single-footer-widget section_padding_0_130">
                  <h5 class="widget-title">Contact</h5>
                  <div class="footer_menu">
                    <ul>
                      <li>
                        <a href="#">Email</a>
                      </li>
                      <li>
                        <a href="#">Mailing Address</a>
                      </li>
                      <li>
                        <a href="#">Phone Number</a>
                      </li>
                      <li>
                        <a href="#">Blog Submission</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
