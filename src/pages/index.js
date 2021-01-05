import React from "react"
import headerImage from "../images/portfolio-pic.jpg"
import jsImage from "../images/js.png"
import tsImage from "../images/ts.png"
import reactImage from "../images/react.png"
import graphqlImage from "../images/graphql.png"
import csharpImage from "../images/csharp.png"
import sqlImage from "../images/sql.png"
import dotNetImage from "../images/netCore.png"
import plusImage from "../images/plus.png"

export default function Home() {

  return (
    <div>
    <header>
      <section>
      <h1 className="welcome" style={{margin: "auto 0", textAlign: "center"}}>Hi, I'm Joe!</h1>
      <p style={{fontStyle: "italic", padding: 0.5 + "rem"}}>
        I'm a junior dev from the Tampa Area. 
        My first programming experience was in middle school when
        I learned how to ping my away message on AIM without the help of a friend.
      </p>
      </section>
      <figure>
      <img className="leaf-border" src={headerImage} alt="me climbing a palm tree on a beach" />
      <figcaption>Context?</figcaption>
      </figure>
      
    </header>
    <main>
        <h2 style={{marginTop: 2 + "rem", marginBottom: 1 + "rem"}}>SKILLS:</h2>
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
      <h2>PROJECTS:</h2>
    </main>
    </div>
  )}
