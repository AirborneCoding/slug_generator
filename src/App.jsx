import React, { useState } from 'react';
const SlugGenerator = () => {
  const [inputText, setInputText] = useState('');
  const [slug, setSlug] = useState('');

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const generateSlug = () => {
    // Convert input text to lowercase and replace spaces with dashes
    const generatedSlug = inputText.toLowerCase().replace(/\s+/g, '-');
    setSlug(generatedSlug);
  };

  return (
    <>
      <div className='father' >
        <h2>Slug Generator</h2>
        <input
          type="text"
          placeholder="Enter text"
          value={inputText}
          onChange={handleChange}
        />
        <button onClick={generateSlug}>Generate Slug</button>
        {slug && (
          <div>
            <h2 className='s'>{slug}
              <br />
              {/* {slug.length} */}
            </h2>
          </div>
        )}
      </div>
    </>
  );
};

export default SlugGenerator;
