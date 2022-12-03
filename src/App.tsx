import pngGarfield from '../assets/Garfield.png';
import svgGarfield from '../assets/Garfield.svg';
import { Comp1 } from './Comp1';
import { Comp2 } from './Comp2';

export const App = () => {
  return (
    <div className="app">
      <h1 className="app-title">{`This is Main page: ${process.env.NODE_ENV} - ${process.env.exampleEnvVariable}`}</h1>
      <img src={pngGarfield} alt="Garfield" width="300" height="400" />
      <img src={svgGarfield} alt="Garfield" width="400" height="400" />
      <Comp1 />
      <Comp2 />
    </div>
  );
};

export default App;
