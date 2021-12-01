import React from 'react';

function Meme() {
  return (
    <main className="w-75 mx-auto mt-5">
      <div class="row">
        <div class="col">
          <input type="text" class="form-control" placeholder="Top text" aria-label="First name" />
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="bottom text" aria-label="Last name" />
        </div>
      </div>
      <button className="btn form-control btnGet mt-3">Get a new meme image  🖼</button>
    </main>
  )
}

export default Meme;
