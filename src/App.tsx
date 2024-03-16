import { CustomTable } from "./components/CustomTable";
import data from "./data/data.json";

const options = [5, 10, 15];

const App = () => {
  return (
    <div>
      <CustomTable items={data} options={options} />
    </div>
  );
};

export default App;
