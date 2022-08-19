import React, { useState } from 'react'

function CreateArea(params) {
  const [inputTitle, setInputTitle] = useState('')
  const [inputSubTitle, setInputSubTitle] = useState('')
  function handleChangeTitle(params) {
    const newInputTitle = params.target.value
    setInputTitle(newInputTitle)
  }
  function handleChangeSubTitle(params) {
    const newInputSubTitle = params.target.value
    setInputSubTitle(newInputSubTitle)
  }
  return (
    <div>
      <form>
        <input
          onChange={handleChangeTitle}
          name="title"
          value={inputTitle}
          placeholder="Title"
        />
        <textarea
          onChange={handleChangeSubTitle}
          name="content"
          value={inputSubTitle}
          placeholder="Take a note..."
          rows="3"
        />
        <button>Add</button>
      </form>
    </div>
  )
}

export default CreateArea
