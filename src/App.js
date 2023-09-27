import React, { useState } from "react";
import "./App.css";
import Widget from "./Components/Widget";
import Card from "./Components/Card";
import axios from "axios";


function App() {
  const [results, setResults] = useState([]);
  const [category, setCategory] = useState([]);

  const makeAJAXcall = (category, searchQuery) => {
    let updatedResults = [];
    let categoryStates = [];
    let categoriesList = ["Buses", "Flights", "Hotels"];

    axios
      .get("bookmytrip-service.json")
      .then((response) => {
        if (category !== "All") {
          var bmtServices = response.data[category];
          bmtServices.forEach((elem) => {
            if (
              elem.serviceName.toLowerCase().search(searchQuery.toLowerCase()) !==
              -1
            ) {
              updatedResults.push(elem);
              categoryStates.push(category);
            }
          });
          setResults(updatedResults);
          setCategory(categoryStates);
        } else {
          categoriesList.forEach((cate) => {
            var bmtServices = response.data[cate];
            bmtServices.forEach((elem) => {
              if (
                elem.serviceName.toLowerCase().search(searchQuery.toLowerCase()) !==
                -1
              ) {
                updatedResults.push(elem);
                categoryStates.push(cate);
              }
            });
            setResults(updatedResults);
            setCategory(categoryStates);
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

//   handleSubmit = () => {
//     this.setState({ results: [] });
//     let category = document.querySelector("input[type=radio]:checked").value;
//     let searchQuery = document.querySelector("#search").value;
//     this.makeAJAXcall(category, searchQuery);
//   };

  const handleSubmit = (cat, squery) => {
    setResults([]);
    makeAJAXcall(cat, squery);
  };

  console.log("results: ", results)


  return (
    <React.Fragment>
      <header>
        <div className="grid1200">
          <Widget onSubmit={handleSubmit} > </Widget>
        </div>
      </header>
      <main>
        <div className="grid1200">
          {results.map((res, ind) => (
            <Card
              key={res.serviceID}
              stype={category[ind]}
              sname={res.serviceName}
              sloc={res.locations}
            />
          ))}
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;




















// export default class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       results: [],
//       category: []
//     };
//   }

//   updateState = results => {
//     this.setState({ results });
//   };

//   makeAJAXcall = (category, searchQuery) => {
//     let results = [],
//       categoryStates = [];
//     let categoriesList = ["Buses", "Flights", "Hotels"];
//     axios
//       .get("bookmytrip-service.json")
//       .then(response => {
//         if (category !== "All") {
//           var bmtServices = response.data[category];
//           bmtServices.forEach(elem => {
//             if (
//               elem.serviceName
//                 .toLowerCase()
//                 .search(searchQuery.toLowerCase()) !== -1
//             ) {
//               results.push(elem);
//               categoryStates.push(category);
//             }
//           });
//           this.setState({ results, category: categoryStates });
//         } else {
//           categoriesList.forEach(cate => {
//             var bmtServices = response.data[cate];
//             bmtServices.forEach(elem => {
//               if (
//                 elem.serviceName
//                   .toLowerCase()
//                   .search(searchQuery.toLowerCase()) !== -1
//               ) {
//                 results.push(elem);
//                 categoryStates.push(cate);
//               }
//             });
//             this.setState({ results, category: categoryStates });
//           });
//         }
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };

//   handleSubmit = () => {
//     this.setState({ results: [] });
//     let category = document.querySelector("input[type=radio]:checked").value;
//     let searchQuery = document.querySelector("#search").value;
//     this.makeAJAXcall(category, searchQuery);
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <header>
//           <div className="grid1200">
//             <Widget onSubmit={this.handleSubmit}> </Widget>
//           </div>
//         </header>
//         <main>
//           <div className="grid1200">
//             {this.state.results.map((res, ind) => (
//               <Card
//                 key={res.serviceID}
//                 stype={this.state.category[ind]}
//                 sname={res.serviceName}
//                 sloc={res.locations}
//               />
//             ))}
//           </div>
//         </main>
//       </React.Fragment>
//     );
//   }
// }
