import React from 'react';
import memesData from './memesData';

function Meme() {

  const [memeImage, setMemeImage] = React.useState("");

  let url;
  function getMemeImage() {
    const memeArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    url = memeArray[randomNumber].url
    setMemeImage(url);
  }

  return (
    <main className="w-75 mx-auto mt-5">
      <div className="row">
        <div className="col">
          <input type="text" className="form-control" placeholder="Top text" aria-label="First name" />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="bottom text" aria-label="Last name" />
        </div>
      </div>
      <button 
        className="btn form-control btnGet mt-3" 
        onClick={getMemeImage}>Get a new meme image  🖼
      </button>
      <img src={memeImage} alt="Meme" className="meme-image" />
    </main>
  )
}

export default Meme;
