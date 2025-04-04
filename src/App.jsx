import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import OpenHiring from './showcase_pages/OpenHiring.jsx';
import SOTD from './showcase_pages/SOTD.jsx';
import GaiaPark from './showcase_pages/GaiaPark.jsx';
import SpeakSilent from './showcase_pages/SpeakSilent.jsx';
import Excalibur from './showcase_pages/Excalibur.jsx';

const router = createHashRouter([
    {
        element: <Layout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/openhiring', element: <OpenHiring /> },
            { path: '/sotd', element: <SOTD /> },
            { path: '/gaiapark', element: <GaiaPark /> },
            { path: '/speaksilent', element: <SpeakSilent /> },
            { path: '/excalibur', element: <Excalibur /> },
        ]
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
