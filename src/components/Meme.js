import React from 'react';
import memesData from './memesData';

function Meme() {

  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg' 
  })

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])

  function getMemeImage() {
    //const memeArray = allMemes.data.memes;
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        randomImage: url
      }
    });
  }

  function handleTextChange(event) {
    const { name, value } = event.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main className="w-75 mx-auto mt-5">
      <div className="row">
        <div className="col">
          <input 
            type="text"
            className="form-control"
            placeholder="Top text" 
            aria-label="Top text" 
            name="topText"
            value={meme.topText}
            onChange={handleTextChange}
          />
        </div>
        <div className="col">
          <input 
            type="text" 
            className="form-control" 
            placeholder="bottom text" 
            aria-label="bottom text" 
            name="bottomText"
            value={meme.bottomText}
            onChange={handleTextChange}
          />
        </div>
      </div>
      <button 
        className="btn form-control btnGet mt-3" 
        onClick={getMemeImage}>Get a new meme image  🖼
      </button>
      <div className="meme">
        <img src={meme.randomImage} alt="Meme" className="meme-image" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}

export default Meme;
