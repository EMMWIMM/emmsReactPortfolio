import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function Portfolio() {
  return (
    <div>
      <h2>Emm's Portfolio</h2>
      <div className="container">
        <div className="card" >
          <img
            className="card-img-top"
            src='./notesnip.PNG'

          />
          <div className="card-body">
          <h5 className="card-title">NoteTaker2000</h5>
            <p className="card-text">Description: A note taking app used to make and save notes that persist in a Database made up of JSON and JAVASCRIPT</p>
            <a href="https://github.com/EMMWIMM/noteTaker2000" className="btn btn-primary"> Github repo</a>
            <a href="https://notetaker2000.herokuapp.com/notes" className="btn btn-primary">
              Deployed app
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="card" >
          <img
            className="card-img-top"
            src='./readmesnip.PNG'

          />
          <div className="card-body">
          <h5 className="card-title">ReadMeGenerator</h5>
            <p className="card-text">Description:a README.md file generator using javascript and the command line only</p>
            <a href="https://github.com/EMMWIMM/ReadMeGenerator" className="btn btn-primary">
              Github repo
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="card">
          <img
            className="card-img-top"
            src='./dlyplnrsnip.PNG'

          />
          <div className="card-body">
          <h5 className="card-title">dailyPlanner</h5>
            <p className="card-text">Description: a dailey planner with input feilds who's content will persist if saved by the user</p>

            <a href="https://github.com/EMMWIMM/dailyPlanner" className="btn btn-primary">
              Github repo
            </a>
            <a href="https://emmwimm.github.io/dailyPlanner/" className="btn btn-primary"> Deployed app</a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="card" >
          <img
            className="card-img-top"
            src='./pswsnip.PNG'

          />
          <div className="card-body">
          <h5 className="card-title">PasswordGenerator</h5>
            <p className="card-text">Description: a random password generator</p>
            <a href="https://github.com/EMMWIMM/passwordGenerator" className="btn btn-primary">  Github repo
            </a>
            <a href="https://emmwimm.github.io/passwordGenerator/" className="btn btn-primary">
              Deployed app
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="card" >
          <img
            className="card-img-top"
            src='./quizgmsnip.PNG'

          />
          <div className="card-body">
          <h5 className="card-title">TimedQuizGame</h5>
            <p className="card-text">Description:  A timed quiz game that keeps your score and input name/initials once you've completed the quiz</p>
            <a href="https://github.com/EMMWIMM/timedQuizGame" className="btn btn-primary"> Github repo </a>
            <a href="https://emmwimm.github.io/timedQuizGame/" className="btn btn-primary">
              Deployed app
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="card" >
          <img
            className="card-img-top"
            src='./pmksnip.PNG'

          />
          <div className="card-body">
          <h5 className="card-title">Name: Poketeam Builder</h5>
            <p className="card-text">Description: The purpose of this project is to provide the user with a Pokemon team builder.
The user is able to search a pokemon monster and be presented with a gif, its type, and 4 abilities.</p>
            <a href="https://github.com/zacfisher1990/poketeam_builder" className="btn btn-primary"> Github repo </a>
            <a href="https://zacfisher1990.github.io/poketeam_builder/" className="btn btn-primary">
              Deployed app
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
