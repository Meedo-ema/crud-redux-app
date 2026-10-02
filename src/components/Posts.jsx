import { useState } from 'react'
import Post from './Post'
import { useDispatch, useSelector } from 'react-redux'
import { addPost } from '../redux/postsSlice'

export default function Posts() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts.items)
  return (
    <div>
      <div className="form">
        <div className="form-inputs">
          <input
            type="text"
            placeholder="Enter your title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder='Enter your descr..'
            onChange={e => setDescription(e.target.value)}
            value={description}
          >

          </textarea>
        </div>
        <button
          disabled={!title || !description}
          onClick={() => {
            dispatch(addPost({ id: Date.now(), title, description }))
            setTitle('')
            setDescription('')
          }
          }
        >Add Post</button>

      </div>
      <div className="posts">
        {posts && posts.map((post) =>
          <Post key={post.id} id={post.id} title={post.title} description={post.description} />)}
      </div>
    </div>
  )
}

