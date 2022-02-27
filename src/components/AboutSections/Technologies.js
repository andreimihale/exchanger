import React from "react";
import "./AboutSections.scss";

const Technologies = () => (
  <>
    <div>Apps and technologies used for this project:</div>
    <ul>
      <li>Concepts app for sketching the app</li>
      <li>Figma for designing and prototyping the app</li>
      <li>VSCode as text editor</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>React</li>
      <li>MaterialUI</li>
      <li>SASS for styling components</li>
      <li>Axios for fetching data</li>
      <li>Moment for formating dates</li>
      <li>
        PropTypes for enforcing types of properties that are passed to
        components
      </li>
      <li>Babel for code compiling</li>
      <li>
        ESLint with Airbnb extension and Prettier, plus a little bit of changes,
        for identifying and reporting problems
      </li>
      <li>
        Husky, Lint-Staged, ESLint for checking errors on commit. If we have any
        error then the commit will fail
      </li>
      <li>Pretty-Quick before commiting to sanitze code</li>
    </ul>
  </>
);

export default Technologies;
