import React, { useState } from 'react'
import Enviar from '../../Assets/Enviar'
import useFetch from '../../Hooks/useFetch'
import { COMMENT_POST } from '../../api'
import Error from '../Helper/Error'
import styles from './PhotoCommentsForm.module.css'

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const [comment, setComment] = useState('')
  const { request, error } = useFetch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { url, options } = COMMENT_POST(id, { comment })
    const { response, json } = await request(url, options)
    if (response.ok) {
      setComment('')
      setComments((comments) => [...comments, json])
    }
  }

  return (
    <form
      className={`${styles.form} ${single ? styles.single : ''}`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      ></textarea>
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error error={error}></Error>
    </form>
  )
}

export default PhotoCommentsForm
