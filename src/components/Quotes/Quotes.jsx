/* eslint-disable react/prop-types */
import { FaTwitter } from 'react-icons/fa';

function Quotes({data, handleClick}) {
    return (
        <>
            <div className="Quote__Box" id="quote-box">
                        <div className="Text" id="text">{data ? data.text : "Loading..."}</div>
                        <button className='btn' type='button' onClick={handleClick} id="new-quote">New Quote</button>
                        <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=davidbayquotes&text=${data ? data.text : ""}`} className="Tweet__Quote" id="tweet-quote" target='noreferrer _blank'><FaTwitter /></a>
                        <span className="Author" id="author">{data ? data.author : "Unknown"}</span>
                        <a href='https://github.com/David4bay' className="Creator">Coded by David Bayode</a>
            </div>
        </>
    )
}

export default Quotes;