import React, { useState, useEffect } from "react";
import "./cardStyle.css";

function Card(props) {
  const [number, setNumber] = useState(0);
  const [locations, setLocations] = useState([]);

  const getRoute = () => {
    const routeArray = props.sloc;
    const resultLocations = [];

    const routes = {
      RT101: ["Tiruchendur", "Tuticorin", "Madurai", "Trichy", "Perungulathur", "Chennai"],
      RT102: ["Tiruchendur", "Tuticorin", "Madurai", "Karur", "Salem", "Hosur", "Bengaluru"],
      RT103: ["Tirunelveli", "Madurai", "Trichy", "Perungulathur", "Chennai"],
      RT104: ["Tuticorin", "Madurai", "Salem", "Coimbatore"],
      RT105: ["Coimbatore", "Erode", "Salem", "Dharmapuri", "Hosur", "Bengaluru"],
      RT106: ["Coimbatore", "Erode", "Salem", "Viluppuram", "Tindivanam", "Chennai"],
      RT107: ["Goa", "Belgaum", "Kolhapur", "Satara", "Pune", "Mumbai"],
      RT108: ["Mumbai", "Vadodara", "Udaipur", "Jaipur", "New Delhi"],
      RT109: ["Chennai", "Nellore", "Ongole", "Hyderabad"],
      RT110: ["Bengaluru", "Dharmavaram", "Anantapur", "Mahbubnagar", "Hyderabad"],
      RT201: ["Tuticorin, India", "Chennai, India"],
      RT202: ["Madurai, India", "Chennai, India"],
      RT203: ["Madurai, India", "Bengaluru, India"],
      RT210: ["Chennai, India", "Doha, Qatar"],
      RT211: ["Mumbai, India", "Doha, Qatar"],
      RT212: ["Bengaluru, India", "Doha, Qatar"],
      RT220: ["New Delhi, India", "Dubai, UAE", "New York, USA"],
      RT221: ["Mumbai, India", "Dubai, UAE", "New York, USA"],
      RT222: ["Chennai, India", "Dubai, UAE", "New York, USA"],
      RT230: ["Dubai, UAE", "Port Louis, Singapore"],
      RT231: ["Trichy, India", "Port Louis, Singapore"],
      RT232: ["Chennai, India", "Bali, Indonesia"]
    };

    routeArray.forEach((route) => {
      let opt = [];
      if (props.stype === "Buses" || props.stype === "Flights") {
        for (const obj in routes) {
          if (route === obj) {
            opt = routes[obj].map((arr) => <li key={arr}> {arr} </li>);
          }
        }
      } else if (props.stype === "Hotels") {
        opt = <li key={route}> {route} </li>;
      }
      const dropdown = (
        <div key={route} className="journey">
          <ul> {opt} </ul>
        </div>
      );
      resultLocations.push(dropdown);
    });
    setNumber(resultLocations.length);
    setLocations(resultLocations);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getRoute();
  }, []);

  return (
    <section className="card">
      <h3>{props.sname}</h3>
      <p>
        {number} {props.stype} available
      </p>
      <div>{locations}</div>
    </section>
  );
}

export default Card



















// import React, { Component } from "react";
// import "./cardStyle.css";

// export default class Card extends Component {
//   state = {
//     number: 0,
//     locations: []
//   };
//   getRoute = () => {
//     this.setState({ locations: [] });
//     let routeArray = this.props.sloc;
//     let opt = [],
//       resultLocations = [];
//     const routes = {
//       RT101: [
//         "Tiruchendur",
//         "Tuticorin",
//         "Madurai",
//         "Trichy",
//         "Perungulathur",
//         "Chennai"
//       ],
//       RT102: [
//         "Tiruchendur",
//         "Tuticorin",
//         "Madurai",
//         "Karur",
//         "Salem",
//         "Hosur",
//         "Bengaluru"
//       ],
//       RT103: ["Tirunelveli", "Madurai", "Trichy", "Perungulathur", "Chennai"],
//       RT104: ["Tuticorin", "Madurai", "Salem", "Coimbatore"],
//       RT105: [
//         "Coimbatore",
//         "Erode",
//         "Salem",
//         "Dharmapuri",
//         "Hosur",
//         "Bengaluru"
//       ],
//       RT106: [
//         "Coimbatore",
//         "Erode",
//         "Salem",
//         "Viluppuram",
//         "Tindivanam",
//         "Chennai"
//       ],
//       RT107: ["Goa", "Belgaum", "Kolhapur", "Satara", "Pune", "Mumbai"],
//       RT108: ["Mumbai", "Vadodara", "Udaipur", "Jaipur", "New Delhi"],
//       RT109: ["Chennai", "Nellore", "Ongole", "Hyderabad"],
//       RT110: [
//         "Bengaluru",
//         "Dharmavaram",
//         "Anantapur",
//         "Mahbubnagar",
//         "Hyderabad"
//       ],
//       RT201: ["Tuticorin, India", "Chennai, India"],
//       RT202: ["Madurai, India", "Chennai, India"],
//       RT203: ["Madurai, India", "Bengaluru, India"],
//       RT210: ["Chennai, India", "Doha, Qatar"],
//       RT211: ["Mumbai, India", "Doha, Qatar"],
//       RT212: ["Bengaluru, India", "Doha, Qatar"],
//       RT220: ["New Delhi, India", "Dubai, UAE", "New York, USA"],
//       RT221: ["Mumbai, India", "Dubai, UAE", "New York, USA"],
//       RT222: ["Chennai, India", "Dubai, UAE", "New York, USA"],
//       RT230: ["Dubai, UAE", "Port Louis, Singapore"],
//       RT231: ["Trichy, India", "Port Louis, Singapore"],
//       RT232: ["Chennai, India", "Bali, Indonesia"]
//     };

//     routeArray.forEach(route => {
//       if (this.props.stype === "Buses" || this.props.stype === "Flights") {
//         for (var obj in routes) {
//           if (route === obj) {
//             opt = routes[obj].map(arr => <li key={arr}> {arr} </li>);
//           }
//         }
//       } else if (this.props.stype === "Hotels") {
//         opt = <li key={route}> {route} </li>;
//       }
//       let dropdown = (
//         <div key={route} className="journey">
//           <ul> {opt} </ul>
//         </div>
//       );
//       resultLocations.push(dropdown);
//     });
//     this.setState({
//       number: resultLocations.length,
//       locations: resultLocations
//     });
//   };

//   componentDidMount = () => {
//     this.getRoute();
//   };

//   render() {
//     return (
//       <section className="card">
//         <h3>{this.props.sname}</h3>
//         <p>
//           {this.state.number} {this.props.stype} available
//         </p>
//         <div> {this.state.locations} </div>
//       </section>
//     );
//   }
// }
