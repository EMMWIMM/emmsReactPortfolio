import React from "react";




export default function Portfolio() {
  return (
    <div>
      <h1>Emm's Portfolio</h1>
      <div className="container">
        <div className="card" style={cardStyle}>
          <img
            className="card-img-top"
            src={props.image}
            alt="Card cap"
          />
          <div className="card-body">
          <h5 className="card-title">NoteTaker2000</h5>
            <p className="card-text">Description: {props.description}</p>
            <a href="#" className="btn btn-primary">
            <a href="#" className="btn btn-primary">
              Adopt {props.name}
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="card" style={cardStyle}>
          <img
            className="card-img-top"
            src={props.image}
            alt="Card cap"
          />
          <div className="card-body">
          <h5 className="card-title">ReadMeGenerator</h5>
            <p className="card-text">Description: {props.description}</p>
            <a href="#" className="btn btn-primary">
            <a href="#" className="btn btn-primary">
              Adopt {props.name}
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="card" style={cardStyle}>
          <img
            className="card-img-top"
            src={props.image}
            alt="Card cap"
          />
          <div className="card-body">
          <h5 className="card-title">dailyPlanner</h5>
            <p className="card-text">Description: {props.description}</p>
            <a href="#" className="btn btn-primary">
            <a href="#" className="btn btn-primary">
              Adopt {props.name}
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="card" style={cardStyle}>
          <img
            className="card-img-top"
            src={props.image}
            alt="Card cap"
          />
          <div className="card-body">
          <h5 className="card-title">PasswordGenerator</h5>
            <p className="card-text">Description: {props.description}</p>
            <a href="#" className="btn btn-primary">
            <a href="#" className="btn btn-primary">
              Adopt {props.name}
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="card" style={cardStyle}>
          <img
            className="card-img-top"
            src={props.image}
            alt="Card cap"
          />
          <div className="card-body">
          <h5 className="card-title">TimedQuizGame</h5>
            <p className="card-text">Description: {props.description}</p>
            <a href="#" className="btn btn-primary">
            <a href="#" className="btn btn-primary">
              Adopt {props.name}
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="card" style={cardStyle}>
          <img
            className="card-img-top"
            src={props.image}
            alt="Card cap"
          />
          <div className="card-body">
          <h5 className="card-title">Name: {props.name}</h5>
            <p className="card-text">Description: {props.description}</p>
            <a href="#" className="btn btn-primary">
            <a href="#" className="btn btn-primary">
              Adopt {props.name}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


// export default function Card(props) {
//   const cardStyle = {
//     width: '18rem',
//   };

  // Helper function that generates a random width for our placeholder images
  // const randomWidth = () => {
  //   const number = Math.random() * (300 - 200) + 200;
  //   return number.toString().split('.')[0];
  // };

//   return (
//     <div className="container">
//       <div className="card" style={cardStyle}>
//         <img
//           className="card-img-top"
//           src={props.image}
//           alt="Card cap"
//         />
//         <div className="card-body">
//         <h5 className="card-title">Name: {props.name}</h5>
//           <p className="card-text">Description: {props.description}</p>
//           <a href="#" className="btn btn-primary">
//           <a href="#" className="btn btn-primary">
//             Adopt {props.name}
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
