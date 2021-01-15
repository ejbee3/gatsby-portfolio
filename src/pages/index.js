import React, { useState } from "react"

import headerImage from "../images/portfolio-pic.jpg"
import jsImage from "../images/js.png"
import tsImage from "../images/ts.png"
import reactImage from "../images/react.png"
import graphqlImage from "../images/graphql.png"
import csharpImage from "../images/csharp.png"
import sqlImage from "../images/sql.png"
import dotNetImage from "../images/netCore.png"
import plusImage from "../images/plus.png"
import logo from "../images/portfolio-logo.png"
import discord from "../images/discord.png"
import pylogo from "../images/pylogo.png"
import php from "../images/php-logo.png"
import reactProject from "../images/react-project.png"

import { Link } from "gatsby"

export default function Home() {
  const [hover, setHover] = useState(Array(4).fill(false));
  const [copySuccess, setCopySuccess] = useState("");

  const toggleHover = id => {
    const newHover = hover.map((status, idx) => {
      if (idx === id) {
        return !status
      }
      return status
    })
    setHover(newHover)
  }

  console.log("Wow, you inspected the element, are you some sort of leet h4ck3r person?")
  console.log("Send me tweets about how awful my website looks on your device, please 😎")

  function copyEmail() {
    navigator.permissions.query({name:"clipboard-write"}).then(function(result) {
      if (result.state === 'granted' || result.state === 'prompt') {
        navigator.clipboard.writeText("joe.baranski49@gmail.com")
        setCopySuccess("Copied!")
      } else {
        setCopySuccess("Copy not supported")
      }
    })
  }

  return (
      <div className="main-container">
      <nav>
        <button className="logo-btn"
        onClick={() => window.scrollTo(0,0)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === '') {
            window.scrollTo(0,0)
          }
        }}>
          <img 
         className="logo-icon" src={logo} 
         alt="anonymous function with my initials JB" 
         />
        </button>
        
        <a href="https://github.com/ejbee3" target="_blank" rel="noopener noreferrer">Github</a>
        <a href="https://www.linkedin.com/in/joe-baranski/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://twitter.com/ejbee3" target="_blank" rel="noopener noreferrer">Twitter</a>
      </nav>
    <header>
      <section>
      <h1 className="welcome">Joe Baranski,</h1>
      <h1 className="welcome">Junior Fullstack Developer</h1>
      <p style={{fontStyle: "italic", padding: "0.5rem 0.5rem 0.5rem 1.2rem"}}>
        My first programming experience was in middle school when
        I learned how to ping my away message on AIM without the help of a friend.
      </p>
      </section>
      <figure>
      <img className="leaf-border" src={headerImage} alt="me climbing a palm tree on a beach" />
      <Link style={{textDecoration: "none"}} to="/scuba-trip">
        <figcaption>Context?</figcaption>
      </Link>
      
      </figure>
      
    </header>
    <main>
        <h2 style={{marginTop: 2 + "rem", marginBottom: 1 + "rem", textDecoration: "underline"}}>SKILLS:</h2>
      <section className="skills">
        <div className="logo-block">
          <h3>frontend</h3>
          <article className="frontend">
            <img src={reactImage} alt="react teal icon" />
            <img src={jsImage} alt="javascript yellow icon" />
            <img src={tsImage} alt="typescript blue icon" />
            <img src={graphqlImage} alt="graphql pink icon" />
          </article>
        </div>
        <div>
        <img style={{marginTop: 1 + "rem"}} src={plusImage} alt="black heavy plus sign" />
        </div>
        <div className="logo-block">
          <h3>backend</h3>
          <article className="backend">
            <img src={csharpImage} alt="purple csharp icon" />
            <img src={sqlImage} alt="blue postgreSQL elephant icon" />
            <img src={dotNetImage} alt="purple dotNetCore icon" />
          </article>
        </div>
      </section>
      <h2 style={{textDecoration: "underline"}}>PROJECTS:</h2>
      <section className="projects">
        <div>
          <Link to="/projects/my-discord-bot" 
                style={hover[0] ? {backgroundColor: "#2a3439"} : {backgroundColor : "#cfebf7"}}
                onMouseEnter={() => toggleHover(0)}
                onMouseLeave={() => toggleHover(0)}>
            <img src={discord} alt="black discord logo"></img>
          </Link>
        </div>
        <div>
        <Link to="/projects/py-man" 
                style={hover[1] ? {backgroundColor: "#2a3439"} : {backgroundColor : "#cfebf7"}}
                onMouseEnter={() => toggleHover(1)}
                onMouseLeave={() => toggleHover(1)}>
            <img src={pylogo} alt="black and grey python logo"></img>
          </Link>
          </div>
        <div>
          <Link to="/projects/react-website" style={hover[2] ? {backgroundColor: "#2a3439"} : {backgroundColor : "#cfebf7"}}
                onMouseEnter={() => toggleHover(2)}
                onMouseLeave={() => toggleHover(2)}>
            <img src={reactProject} alt="teal react logo and words"></img>
          </Link>
          </div>
        <div>
          <Link to="/projects/php" style={hover[3] ? {backgroundColor: "#2a3439"} : {backgroundColor : "#cfebf7"}}
                onMouseEnter={() => toggleHover(3)}
                onMouseLeave={() => toggleHover(3)}>
            <img src={php} alt="black and blue php logo"></img></Link>
          </div>
        
      </section>
    </main>
    <footer>
    © Joe Baranski, 2021 -- email: joe.baranski49@gmail.com <button onClick={copyEmail}>Copy?</button> {copySuccess}
    </footer>
    </div>
  )}

