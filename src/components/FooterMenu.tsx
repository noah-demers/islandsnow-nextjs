'use client';

const FooterMenu = () => (
  <footer>
    <div className="container py-4">
      <div className="row">
        {/* Column 1 */}
        <div className="col-md-4 mb-3">
          <h5 className="text-uppercase">Navigation</h5>
          <hr />
          <ul className="list-unstyled">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Employment</a></li>
            <li><a href="#">Videos</a></li>
          </ul>
        </div>
        {/* Column 2 */}
        <div className="col-md-4 mb-3">
          <h5 className="text-uppercase">Main Menu</h5>
          <hr />
          <ul className="list-unstyled">
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">Kids</a></li>
          </ul>
        </div>
        {/* Column 3 */}
        <div className="col-md-4 mb-3">
          <h5 className="text-uppercase">Connect</h5>
          <hr />
          <form className="d-flex">
            <input type="text" className="form-control me-2" placeholder="Enter Email Address" />
            <button type="submit" className="btn btn-dark">Join</button>
          </form>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterMenu;
