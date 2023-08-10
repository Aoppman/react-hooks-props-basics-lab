import React from "react";

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

function Links(props) {
  return (
    <div>
    <h3>Links</h3>
    <a href={ props.github }>{ props.github }</a>
    <a href={ props.linkedin }>{ props.linkedin }</a>
    </div>
  );
}


export default About;
