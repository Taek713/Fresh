import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import $ from 'jquery';







// portfolio
$('.gallery ul li a').click(function() {
  var itemID = $(this).attr('href');
  $('.gallery ul').addClass('item_open');
  $(itemID).addClass('item_open');
  return false;
});
$('.close').click(function() {
  $('.port, .gallery ul').removeClass('item_open');
  return false;
});

$(".gallery ul li a").click(function() {
  $('html, body').animate({
      scrollTop: parseInt($("#top").offset().top)
  }, 400);
});

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
