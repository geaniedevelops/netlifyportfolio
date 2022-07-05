import { Outlet } from "react-router-dom";
import Navigation from "./elements/navigation";
import './resources/styles/app.css';

export default function App() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <Outlet />
      <footer></footer>
    </div>
  );
}