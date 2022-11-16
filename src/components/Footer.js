import React from 'react';

const Footer = () =>{
    return(
        <>
        <footer className="footer_area section_padding_130_0">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-footer-widget section_padding_0_130">
                <div className="footer-logo mb-3"></div>
                <p>The Blog is a Pop Sociology Blog that Puts a Spotlight on Common Sociological Topics That Readers Can Relate to.</p>
                <div className="copywrite-text mb-5">
                  <p className="mb-0">Made with <i className="lni-heart mr-1"></i>by<a className="ml-1" href="https://github.com/adamhopkins1">The Blog</a></p>
                </div>
                <div className="footer_social_area"><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook"><i className="fa fa-facebook"></i></a><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Pinterest"><i className="fa fa-pinterest"></i></a><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Youtube"><i className="fa fa-youtube"></i></a><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a></div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg">
              <div className="single-footer-widget section_padding_0_130">
                <h5 className="widget-title">About</h5>
                <div className="footer_menu">
                  <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Corporate Sale</a></li>
                    <li><a href="#">Terms &amp; Policy</a></li>
                    <li><a href="#">Community</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg">
              <div className="single-footer-widget section_padding_0_130">
                <h5 className="widget-title">Support</h5>
                <div className="footer_menu">
                  <ul>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Term &amp; Conditions</a></li>
                    <li><a href="#">Help &amp; Support</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg">
              <div className="single-footer-widget section_padding_0_130">
                <h5 className="widget-title">Contact</h5>
                <div className="footer_menu">
                  <ul>
                    <li><a href="#">Call Centre</a></li>
                    <li><a href="#">Email Us</a></li>
                    <li><a href="#">Term &amp; Conditions</a></li>
                    <li><a href="#">Help Center</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer> 
      </>  
    )
    
}

export default Footer;