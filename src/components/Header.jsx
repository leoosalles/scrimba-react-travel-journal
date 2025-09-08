import globe from "../images/globe.png";

function Header() {
  return (
    <header className="header">
      <img className="logo" src={globe} alt="Travel Journal logo" />
      <h1>my travel journal.</h1>
    </header>
  )
};

export { Header }