import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./Footer.css"
// import { FaArrowUp } from 'react-icons/fa';
import $ from 'jquery';
const Footer = () => {
  $(document).ready(function () {
    "use strict";
  
    //Scroll back to top
  
    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > offset) {
        $('.progress-wrap').addClass('active-progress');
      } else {
        $('.progress-wrap').removeClass('active-progress');
      }
    });
  });

  return (
    <footer className="footer pt-3">
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md="auto" className="text-center">
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <p className='copyright'>&copy; {new Date().getFullYear()} QuadbTech. All rights reserved.</p>
            </div>
            {/* <div className="scroll-to-top" onClick={handleScrollToTop}>
              <FaArrowUp />
            </div> */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
