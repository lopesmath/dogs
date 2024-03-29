import React, { useEffect, useState } from 'react'
import FeedPhotosItem from './FeedPhotosItem'
import useFetch from '../../Hooks/useFetch'
import { PHOTO_GET } from '../../api'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import styles from './FeedPhotos.module.css'

const FeedPhotos = ({ page, user, setModalPhoto, setInfinite }) => {
  const { data, loading, error, request } = useFetch()

  useEffect(() => {
    const fetchPhotos = async () => {
      const total = 6
      const { url, options } = PHOTO_GET({ page, total, user })
      const { response, json } = await request(url, options)
      if (response && response.ok && json.length < total) setInfinite(false)
    }
    fetchPhotos()
  }, [request, user, page, setInfinite])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    )
}

export default FeedPhotos
