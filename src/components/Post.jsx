import { useDispatch } from "react-redux"
import { delPost, editPost } from "../redux/postsSlice"
import { useState } from "react"

export default function Post({ id, title, description }) {
  const [isEdit, setIsEdit] = useState(false)
  const [updTitle, setUpdTitle] = useState(title)
  const [updDescription, setUpdDescription] = useState(description)

  const dispatch = useDispatch()
  return (
    <div className={isEdit ? 'form' : 'post'}>
      {isEdit ? (<>
        <div className="form-inputs">
          <input
            type="text"
            placeholder="Enter your title"
            value={updTitle}
            onChange={e => setUpdTitle(e.target.value)}
          />
          <textarea
            placeholder='Enter your descr..'
            onChange={e => setUpdDescription(e.target.value)}
            value={updDescription}
          >

          </textarea>
        </div>
        <button onClick={() => {
          dispatch(editPost({ id, title: updTitle, description: updDescription }))
          setIsEdit(false)
        }}>
          Update
        </button>
      </>
      ) :
        (<>
          <h2>{title}</h2>
          <p>{description}</p>
          <button
            onClick={() => {
              setIsEdit(true)
            }}>Edit</button>
          <button onClick={() => dispatch(delPost({ id }))} >Delete</button>
        </>)}
    </div>
  )
}

