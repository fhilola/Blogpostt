import './Article.scss'
import React, { useEffect, useState } from 'react'
import { Container } from '../../utils'
import { useParams } from 'react-router-dom'
import instance from '../../services/api'
import { SingleSkeleton } from '../../helpers/skeleton/CardSkeleton'

const Article = () => {
  const {id} = useParams()
  const [singleProductData, setSingleProductData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    instance(`/api/posts/${id}`)
    .then(data => {
      setSingleProductData(data.data);
      setIsLoading(false)
    })
  },[])
  console.log(singleProductData);
  return (
    <section>
      <Container>
        {
          isLoading ? <SingleSkeleton/> :
          <div className="single__content-wrapper">
            <div className='single__content-img'>
              <img src={singleProductData.image} alt="" />
            </div>
            <div className="single__content">
              <h2>{singleProductData.title}</h2>
              <p>{singleProductData.description}</p>
            </div>
          </div>
        }
      </Container>
    </section>
  )
}

export default Article