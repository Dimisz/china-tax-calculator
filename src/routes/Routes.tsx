import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import PopulatedForm from "../components/prepopulated-form/PopulatedForm";
import InitialInputForm from "../components/prepopulated-form/InitialInputForm";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <InitialInputForm /> },
      { path: 'salaries-by-month', element: <PopulatedForm/> },
      { path: '*', element: <Navigate replace to='/not-found' />}
    ]
  }
]);