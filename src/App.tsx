import './App.css';
import ResultsTable from './table';

function App() {
  const dataArray = [
    {id: 0, date: "2020-01-21", location: "Track Day #1 Bankstown", title: "Start 2", action: "View"},
    {id: 1, date: "2020-01-21", location: "Track Day #1 Bankstown", title: "Evan warm up 2", action: "View"},
    {id: 2, date: "2020-01-21", location: "Track Day #1 Bankstown", title: "Evan warm up 3", action: "View"},
    {id: 3, date: "2020-01-21", location: "Track Day #1 Bankstown", title: "Wheel speed calibration 4100RPM", action: "View"},
  ]

  return (
    <ResultsTable data={dataArray}></ResultsTable>
  );
}

export default App;
