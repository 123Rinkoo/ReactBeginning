import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const locationofExpenditure=['Delhi','Lucknow','Ahmedabad','Banglore','Surat','Guwahati','Hyderabad','Remote','Uttrakhand','Chandigarh'];
  const arr=[];
  for(let i=0;i<100;i++)
  {

    arr.push(<ExpenseItem location={locationofExpenditure[Math.floor(Math.random()*10)]}></ExpenseItem>);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3>This is a tutorial of React</h3>
        {/* <ExpenseItem location={locationofExpenditure[0]}></ExpenseItem>
        <ExpenseItem location={locationofExpenditure[1]}></ExpenseItem>
        <ExpenseItem location={locationofExpenditure[2]}></ExpenseItem>
        <ExpenseItem location={locationofExpenditure[3]}></ExpenseItem> */}
        {arr}
      </header>
    </div>
  );
}

// function App() {
//   const locationofExpenditure=['Delhi','Lucknow','Ahmedabad','Bangalore','Surat','Guwahati','Hyderabad','Remote','Uttrakhand','Chandigarh'];
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h3>This is from React</h3>
          
//         <ExpenseItem location={locationofExpenditure[0]}></ExpenseItem>
//         <ExpenseItem location={locationofExpenditure[1]}></ExpenseItem>
//         <ExpenseItem location={locationofExpenditure[2]}></ExpenseItem>
//         <ExpenseItem location={locationofExpenditure[3]}></ExpenseItem>
//       </header>
//     </div>
//   );
// }

export default App;
