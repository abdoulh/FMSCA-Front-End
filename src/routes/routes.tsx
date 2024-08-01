import { Routes, Route } from "react-router-dom";
import TableView from "../components/TableView";



const Navigation = () => {   
  return (
    <Routes>
      <Route path="/" element={<TableView />} />

    </Routes>
  );
};

export default Navigation;
