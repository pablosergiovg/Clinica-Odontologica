
import { Routes, Route } from "react-router-dom";
import Layout from "./Routes/Layout";
import { routes } from './navigation/Routes'; 

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        {routes.map(({ id, path, Element }) => (<Route key={id} path={path} element={<Element/>} />))}
      </Route>
    </Routes>
  );
}

export default App;