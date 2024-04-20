import "/src/Components/Navbar/Navbar.css"

export default function Navbar() {
  return (
    <>
      <div className="Navbar">
        <div>
          <img className="logo-img" src="/public/Images/AI logo.png" />
        </div>

        <ul className="main-navbar-links">
          <li className="navbar-links">About</li>
          <li className="navbar-links">Solution</li>
          <li className="navbar-links">Portfolio</li>
          <li className="navbar-links">News</li>
          <button className="navbar-links-button">Contact Us</button>
        </ul>
      </div>
    </>
  );
}
