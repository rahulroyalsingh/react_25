import './App.css';
import React from 'react'
function App() {
    const students = ['Rahul','Garun','Devesh','Raja'];
    //map looping
   // students.map((item) => {
   //     console.warn("My name is:", item)
 //   });

    //display names using for loop

  //  for(let i=0; i<students.length;i++)
   // {
  //      console.warn("in for loop My name is:",student[i])
  //  }
    return (
        <div className="App">
            <h1>Handling array using List</h1>
            {
              students.map((data)=>
              <h1>[data]</h1>
            )  
            }
        </div>
    );
}
export default App;