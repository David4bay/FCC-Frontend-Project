/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import Quotes from '../Quotes/Quotes';
import './Home.scss';


function Home({data, handleClick}) {

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100%'}} className="Home">
            <Quotes handleClick={handleClick} data={data} />
        </div>
    )
}



export default Home;