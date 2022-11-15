import { createRoot } from 'react-dom/client';
import App from './App';
import './old-styles.css';
import './styles.scss';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />)