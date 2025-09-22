import { Link } from "react-router-dom";
import { useState } from "react";
import "./styles/Nav.css";

export default function Nav() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const navlinks = (index) => ({
    border: "1px solid yellow",
    padding: "0.5em 1.5em",
    borderRadius: ".5em",
    textDecoration: "none",
    backgroundColor: hoverIndex === index ? "#46b93cff" : "blue",
    color: "white",
    marginRight: "1em",
    display: "inline-block",
  });

  return (
    <section
      id="nav"
      className="relative"
      style={{
        height: "4em",
        alignContent: "center",
        borderBottom: "1px solid #aaa2a2",
      }}
    >
      <div className="container">
        <div
          className="grid position-relative"
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <div className="d-grid">
            <h2 className="text-white" style={{ fontWeight: "bold" }}>
              Sayrabhg
            </h2>
          </div>

          {/* Nav Menu */}
          <div className="d-grid position-relative">
            <div
              id="drop"
              className={`nav-menu ${menuOpen ? "show" : ""}`}
              style={{ justifySelf: "end" }}
            >
              {["Home", "About", "Resume", "Projects"].map((label, i) => (
                <Link
                  key={label}
                  to={`/${label.toLowerCase()}`}
                  style={navlinks(i)}
                  onMouseEnter={() => setHoverIndex(i)}
                  onMouseLeave={() => setHoverIndex(null)}
                  onClick={() => setMenuOpen(false)} // close on link click
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Hamburger Button */}
            <button
              className={`hamburger-button ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
