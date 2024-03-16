import { CustomTable } from "./components/CustomTable";
import data from "./data/data.json";

const App = () => {
  return (
    <div>
      <CustomTable items={data} />
    </div>
  );
};

export default App;
