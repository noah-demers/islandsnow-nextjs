'use client';

const menuItems = ['MEN', 'WOMEN', 'KIDS', 'BRANDS', 'SEARCH'];

const MiddleMenu = () => (
  <div className="row justify-content-center pt-4">
    {menuItems.map((item) => (
      <div className="col-1" key={item}>
        <div className="dropdown">
          <div className="dropdown-toggle">
            <strong>{item}</strong>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default MiddleMenu;
