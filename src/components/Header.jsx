import logo from "../assets/chef-claude-icon.png";

export default function Header() {
  return (
    <header id="header">
      <nav>
        <figure className="logo">
          <img src={logo} alt="Chef Claude Logo" />
          <figcaption>Chef Claude</figcaption>
        </figure>
      </nav>
    </header>
  );
}
