import "./Footer.css"

function Footer() {
  return (
    <footer>
        <div className="col">
          <h3>Abstract</h3>
          <a href="https://app.abstract.com/start-branches-trial">Start Trial</a>
          <a href="https://www.abstract.com/pricing">Pricing</a>
          <a href="https://app.abstract.com/download">Download</a>
        </div>

        <div  className="col">
          <h3>Resources</h3>
          <a href="https://www.abstract.com/blog">Blog</a>
          <a href="https://www.abstract.com/help">Help Center</a>
          <a href="https://www.abstract.com/release-notes">Release Notes</a>
          <a href="https://status.abstract.com/">Status</a>
        </div>

        <div  className="col">
          <h3>Community</h3>
          <a href="https://twitter.com/goabstract"> Twitter</a>
          <a href="https://www.linkedin.com/company/17950473/">LinkedIn</a>
          <a href="https://facebook.com/Abstract/">Facebook</a>
          <a href="https://dribbble.com/abstract">Dribbble</a>
          <a href="https://www.abstract.com/podcast">Potcast</a>
        </div>

        <div className="col">
          <div id="inner">
            <h3>Company</h3>
            <a href="https://www.abstract.com/about">About Us</a>
            <a href="https://abstract.breezy.hr/">Careers</a>
            <a href="https://www.abstract.com/legal">Legal</a>
          </div>

          <div className="inner-col" >
            <h4>Contact Us</h4>
            <a href="#"><strong>info@abstract.com</strong></a>
          </div>
        </div>

      <div className="col brand" id="copyright">
        <svg xmlns="http://www.w3.org/2000/svg" className="test" viewBox="0 0 200 51" preserveAspectRatio="xMinYMid slice">
          <g fill="#fff">
            <path d="M25.41 0C5.08 0 0 5.08 0 25.41s5.08 25.41 25.41 25.41 25.41-5.08 25.41-25.41S45.74 0 25.41 0zm-4.17 39.31A9.73 9.73 0 1 1 31 29.58a9.75 9.75 0 0 1-9.76 9.73zm17.67-.4h-4.77V16.67H11.91v-4.76h27z"></path>
            <circle cx="21.24" cy="29.58" r="4.96"></circle>
          </g>
        </svg>
        <p>© Copyright 2023</p>
        <p>Abstract Studio Design, Inc.</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
