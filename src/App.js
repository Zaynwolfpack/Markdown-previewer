import './App.scss';
import React, { useState } from 'react';
import { FaBold, FaItalic, FaQuoteLeft, FaLink, FaCode, FaList, FaListOl,  } from 'react-icons/fa'
import { AiFillPicture } from "react-icons/ai";
import { marked } from 'marked';
 

function App() {
const [text, setText] = useState(`
 ### Heading
 # H1
 ## H2
 ### H3
 **bold text**
 *italicized text*
 \`code\`

 1. First item
 2. Second item
 3. Third item

 > blockquote

 - First item
 - Second item
 - Third item

 [title](https://www.example.com)
 ![alt text](image.jpg)
 \`\`\`
 {
   "firstName": "John",
   "lastName": "Smith",
   "age": 25
 }
 \`\`\`

`);
 
 marked.setOptions({
  breaks: true
 })       

  return (
    <div className="App">
        <div className='title-div'>
          <div className='title' >Markdown Previewer && Editing Toolbar </div>
        </div>
        <div className='editor-wrap'>
          <div className='toolbar'>
            <div className='spacer'></div>
            <i title='Bold' className='toolbarIcon'><FaBold /></i>
            <i title='Italic' className='toolbarIcon'><FaItalic /></i>
            <div className='spacer'></div>
            <i title='Block Quote' className='toolbarIcon'><FaQuoteLeft /></i>
            <i title='Link' className='toolbarIcon'><FaLink /></i>
            <i title='Inline Code' className='toolbarIcon'><FaCode /></i>
            <i title='Image' className='toolbarIcon'><AiFillPicture /></i>
            <div className='spacer'></div>
            <i title='Bullet List' className='toolbarIcon'><FaList /></i>
            <i title='Numbered List' className='toolbarIcon'><FaListOl /></i>
          </div>
        <textarea id="editor" type="text" 
        placeholder='this is my placeholder text' 
        onChange={(event) => {
          setText(event.target.value)
        }}
        value={text}
        ></textarea>
   ~     </div>
        <div className='previewWrap'>
          <div id='preview' dangerouslySetInnerHTML={{
            __html: marked(text)}}>
          </div>
        </div>
      </div>
  );
}

export default App;

