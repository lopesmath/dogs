import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch'
import { ONEPHOTO_GET } from '../../api'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import PhotoContent from './PhotoContent'
import Head from '../Helper/Head'

const Photo = () => {
  const { id } = useParams()

  const { data, loading, error, request } = useFetch()

  useEffect(() => {
    const { url, options } = ONEPHOTO_GET(id)
    request(url, options)
  }, [request, id])

  if (error) return <Error console error={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent single={true} data={data} />
      </section>
    )
}

export default Photo
