import React from "react";

const Blogroll = () => {
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

      <div class="container">
        <div class="page-header">
          <h1>
            The Blog Staff Blogs <small>Blog / Blogroll</small>
          </h1>
        </div>

        <div class="row">
          <div class="col-md-8">
            <article id="">
              <header>
                <div class="meta">
                  Written by <span class="author">Adam H</span>{" "}
                  <span class="date">11/16/22</span> |{" "}
                  <span class="comments">
                    <span class="badge">4</span> Comments
                  </span>
                </div>
                <h2>
                  <a href="">Blog title</a>
                </h2>
              </header>
              <div class="entry-content">
                <a href="">
                  <img
                    src="http://placehold.it/750x420"
                    alt=""
                    class="img-fluid"
                  />
                </a>
                <p class="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
                  aliquid fuga dolorum est ab fugit, eveniet quam minus
                  reiciendis harum accusamus a velit, vero impedit, dolor.
                  Sapiente architecto &hellip;
                </p>

                <a href="#" class="btn btn-primary">
                  Read More{" "}
                  <span
                    class="glyphicon glyphicon glyphicon-chevron-right"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>
              <footer></footer>
            </article>
            <article id="">
              <header>
                <div class="meta">
                  Written by <span class="author">Author Name</span>{" "}
                  <span class="date">1/30/16</span> |{" "}
                  <span class="comments">
                    <span class="badge">4</span> Comments
                  </span>
                </div>
                <h2>
                  <a href="">Blog title</a>
                </h2>
              </header>
              <div class="entry-content">
                <a href="">
                  <img
                    src="http://placehold.it/750x420"
                    alt=""
                    class="img-fluid"
                  />
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
                  aliquid fuga dolorum est ab fugit, eveniet quam minus
                  reiciendis harum accusamus a velit, vero impedit, dolor.
                  Sapiente architecto non quo.
                </p>

                <a href="#" class="btn btn-primary">
                  Read More{" "}
                  <span
                    class="glyphicon glyphicon glyphicon-chevron-right"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>
              <footer></footer>
            </article>
            <article id="">
              <header>
                <div class="meta">
                  Written by <span class="author">Author Name</span>{" "}
                  <span class="date">1/30/16</span> |{" "}
                  <span class="comments">
                    <span class="badge">4</span> Comments
                  </span>
                </div>
                <h2>
                  <a href="">Blog title</a>
                </h2>
              </header>
              <div class="entry-content">
                <a href="">
                  <img
                    src="http://placehold.it/750x420"
                    alt=""
                    class="img-fluid"
                  />
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
                  aliquid fuga dolorum est ab fugit, eveniet quam minus
                  reiciendis harum accusamus a velit, vero impedit, dolor.
                  Sapiente architecto non quo.
                </p>

                <a href="#" class="btn btn-primary">
                  Read More{" "}
                  <span
                    class="glyphicon glyphicon glyphicon-chevron-right"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>
              <footer></footer>
            </article>
            <article id="">
              <header>
                <div class="meta">
                  Written by <span class="author">Author Name</span>{" "}
                  <span class="date">1/30/16</span> |{" "}
                  <span class="comments">
                    <span class="badge">4</span> Comments
                  </span>
                </div>
                <h2>
                  <a href="">Blog title</a>
                </h2>
              </header>
              <div class="entry-content">
                <a href="">
                  <img
                    src="http://placehold.it/750x420"
                    alt=""
                    class="img-fluid"
                  />
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
                  aliquid fuga dolorum est ab fugit, eveniet quam minus
                  reiciendis harum accusamus a velit, vero impedit, dolor.
                  Sapiente architecto non quo.
                </p>

                <a href="#" class="btn btn-primary">
                  Read More{" "}
                  <span
                    class="glyphicon glyphicon glyphicon-chevron-right"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>
              <footer></footer>
            </article>

            <nav>
              <ul class="pagination">
                <li class="disabled">
                  <a href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="active">
                  <a href="#">
                    1 <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
                <li>
                  <a href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <aside class="col-md-4">
            <div class="card mb-3">
              <h3 class="card-header mb-3">Join our Newsletter</h3>
              <form class="form-horizontal">
                <div class="form-group">
                  <div class="col-sm-12">
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail3"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <div class="col-sm-12">
                    <button type="submit" class="btn btn-primary">
                      Join Us
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <h3>Recent Posts</h3>
            <div class="list-group  mb-3">
              <a href="#" class="list-group-item active">
                <h4 class="list-group-item-heading">List group item heading</h4>
                <p class="list-group-item-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam,
                  optio eum &hellip;
                </p>
              </a>
              <a href="#" class="list-group-item">
                <h4 class="list-group-item-heading">List group item heading</h4>
                <p class="list-group-item-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam,
                  optio eum &hellip;
                </p>
              </a>
              <a href="#" class="list-group-item">
                <h4 class="list-group-item-heading">List group item heading</h4>
                <p class="list-group-item-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam,
                  optio eum &hellip;
                </p>
              </a>
              <a href="#" class="list-group-item">
                <h4 class="list-group-item-heading">List group item heading</h4>
                <p class="list-group-item-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam,
                  optio eum &hellip;
                </p>
              </a>
            </div>

            <div class="container">
              <h3>Follow Us</h3>
              <div class="social">
                <a href="">
                  <i class="fa fa-3x fa-facebook-square"></i>
                </a>
                <a href="">
                  <i class="fa fa-3x fa-twitter-square"></i>
                </a>
                <a href="">
                  <i class="fa fa-3x fa-linkedin-square"></i>
                </a>
                <a href="">
                  <i class="fa fa-3x fa-google-plus-square"></i>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <footer className="footer_area section_padding_130_0">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-footer-widget section_padding_0_130">
                <div className="footer-logo mb-3"></div>
                <p>
                  The Blog is a Pop Sociology Blog that Puts a Spotlight on
                  Common Sociological Topics That Readers Can Relate to.
                </p>
                <div className="copywrite-text mb-5">
                  <p className="mb-0">
                    Made with <i className="lni-heart mr-1"></i>by
                    <a className="ml-1" href="https://github.com/adamhopkins1">
                      The Blog
                    </a>
                  </p>
                </div>
                <div className="footer_social_area">
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Facebook"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Pinterest"
                  >
                    <i className="fa fa-pinterest"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Youtube"
                  >
                    <i className="fa fa-youtube"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Instagram"
                  >
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg">
              <div className="single-footer-widget section_padding_0_130">
                <h5 className="widget-title">About</h5>
                <div className="footer_menu">
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Corporate Sale</a>
                    </li>
                    <li>
                      <a href="#">Terms &amp; Policy</a>
                    </li>
                    <li>
                      <a href="#">Community</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg">
              <div className="single-footer-widget section_padding_0_130">
                <h5 className="widget-title">Support</h5>
                <div className="footer_menu">
                  <ul>
                    <li>
                      <a href="#">Help</a>
                    </li>
                    <li>
                      <a href="#">Support</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Term &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Help &amp; Support</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg">
              <div className="single-footer-widget section_padding_0_130">
                <h5 className="widget-title">Contact</h5>
                <div className="footer_menu">
                  <ul>
                    <li>
                      <a href="#">Call Centre</a>
                    </li>
                    <li>
                      <a href="#">Email Us</a>
                    </li>
                    <li>
                      <a href="#">Term &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Help Center</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Blogroll;


