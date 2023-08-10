import React from "react";
import Links from "./Links"

function LogBio(props) {
  if (props.bio) {
    return (
      <>
      <p>{ props.bio }</p>
      </>
    );
  } else {
    return null;
  }
}


function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      { LogBio(props) }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github="https://github.com/liza" linkedin="https://www.linkedin.com/in/liza/" />
    </div>
  );
}




export default About;
