import {createRoot} from 'react-dom/client'
import './index.css'
import './ui/TrackItem.module.css'
import './ui/TrackDetail.module.css'
import {MainPage} from "./MainPage.tsx";
// import {Counter} from "./ui/Counter.tsx";

const rootEl = document.getElementById('root');
const reactRoot = createRoot(rootEl!);

reactRoot.render(
    <>
        {/*<Counter/>*/}
        <MainPage/>
    </>
)


