import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

export default function Nav(){
    const [hoverIndex, setHoverIndex] = useState(null);

  const navlinks = (index) => ({
    border: '1px solid black',
    padding: '0.5em 1.5em',
    borderRadius: '.5em',
    textDecoration: 'none',
    backgroundColor: hoverIndex === index ? '#72729a' : 'blue',
    color: 'white',
    marginRight: '1em',
  });

  return (
    <section id='nav' className="relative" style={{ height: '4em', alignContent: 'center',borderBottom: '1px solid #aaa2a2' }}>
      <div className="container">
        <div className="grid" style={{display:'grid', gridTemplateColumns: 'auto auto', alignItems: 'center',}}>
            <div className="d-grid">
                <h2 className='' style={{fontWeight:'bold'}}>Sayrabhg</h2>
            </div>
            <div className="d-grid">
                <nav style={{justifySelf:'end'}}>
                    {['Home', 'About', 'Resume', 'Projects'].map((label, i) => (
                    <Link
                        key={label}
                        to={`/${label.toLowerCase()}`}
                        style={navlinks(i)}
                        onMouseEnter={() => setHoverIndex(i)}
                        onMouseLeave={() => setHoverIndex(null)}
                    >
                        {label}
                    </Link>
                    ))}
                </nav>
            </div>
        </div>
      </div>
    </section> )
}