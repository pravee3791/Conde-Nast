import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import './App.css';
import Home from './pages/home/home';
import NewsDetails from "./pages/newsDetails/newsDetails";

function App() {
  return (
    <>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path ='newsDetails' element={<NewsDetails></NewsDetails>}></Route>
        </Routes>
      </Router>
      </Provider>
    </>
  );
}

export default App;
