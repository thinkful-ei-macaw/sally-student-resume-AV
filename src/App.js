import React from 'react';
import './App.css';
import Name from './Name.js';

function App() {
  let ourName = <Name currentName='Rhonda'/>;
  return (
    <main className='App'>
      <header>

        <h1>{ourName}s Resume</h1>

      </header>
      <section>
        <header>
          <h2>{ourName} Student Contact Info:</h2>
        </header>
        <address>
          <a href="mailto:sallystudent@mozilla.org">{ourName}student@mozilla.org</a>
          <br />
          <a href="tel:1-562-867-5309">1-562-867-5309</a>
          <br />
          <img id="resume-pic" src="https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg" alt="Sally Student and she may be Ilana's Doppelganger" />
        </address>
      </section>

      <section>
        <header>
          <h2>Education</h2>
        </header>
        <ul>
          <li>Comedy Central High School</li>
          <li>New York Community College - AA </li>
          <li>Columbia University - BS Computer Science</li>
          <li>Thinkful - Data Analytics</li>
        </ul>
      </section>

      <section>
        <header>
          <h2>Employment History</h2>
        </header>
        <ul>
          <li>Company: Oracle</li>
          <li>Job Title: Software Engineer</li>
          <li>Dates: 01/2018 - Present</li>
          <li>Description: Writing and maintaining various software</li>
        </ul>
        <ul>
          <li>Company: Fungi Perfecti</li>
          <li>Job Title: Mycologist</li>
          <li>Dates: 01/2016 - 01/2018</li>
          <li>Description: Growing and cloning various mushrooms for Seattle restaurants</li>
        </ul>
        <ul>
          <li>Company: Sibley Birds</li>
          <li>Job Title: iOS Developer</li>
          <li>Dates: 01/2015 - 01/2016</li>
          <li>Description: Machine learning and app development for bird identification</li>
        </ul>
      </section>
    </main>
  );
}

export default App;