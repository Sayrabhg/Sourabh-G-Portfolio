import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./styles/Nav.css";
import Toggle from "./SubPages.jsx/NightBtn";

export default function Nav() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

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
      <div className="container-fluid px-3">
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
            <h2 className="text-color m-0" style={{ fontWeight: 700 }}>
              Sayrabh-G-Portfolio
            </h2>
          </div>

          {/* Nav Menu */}
          <div className="d-flex position-relative justify-content-end align-items-center gap-4">

            <a onClick={() => { navigate('/certification') }} className="text-white firstA" style={{ cursor: 'pointer', fontStyle: 'italic' }}>Certified by</a>

            <Toggle />

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

              <a onClick={() => { navigate('/certification') }} className="text-white secondA" style={{ cursor: 'pointer', fontStyle: 'italic' }}>Certified by</a>
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

// vilas kurve
// 8830642918
