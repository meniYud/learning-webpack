import pngGarfield from '../assets/Garfield.png';
import svgGarfield from '../assets/Garfield.svg';


export const App = () => {
    return <div className='app'>
        <h1 className='app-title'>Main page</h1>
        <img src={pngGarfield} alt="Garfield" width="300" height="400"/>
        <img src={svgGarfield} alt="Garfield" width="400" height="400"/>
    </div>
}

export default App;