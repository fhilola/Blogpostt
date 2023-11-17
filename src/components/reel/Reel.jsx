import './Reel.scss'
import React, { useEffect, useState } from 'react'
import instance from '../../services/api'
import { Container } from '../../utils'
import ArticleCard from '../article-card/ArticleCard'
import CardSkeleton from '../../helpers/skeleton/CardSkeleton'

const Reel = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    console.log(isLoading);

    useEffect(() => {
        instance('api/posts')
            .then(res => {
                console.log(res);
                setData(res.data.data)
                setIsLoading(false)

            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='home__reel'>
            <Container>
                <h2>Today`s trending articles</h2>
                <div className="reel__wrapper">
                    {isLoading && <CardSkeleton cards={data.length}/>}
                    {
                        data.map(article =>
                        <ArticleCard 
                        image={article.image}
                        title={article.title}
                        description={article.description}
                        author={article.author}
                        createdAt={article.createdAt}
                        category={article.category}
                        />
                    )
                    }
                </div>
            </Container>
        </div>
    )
}

export default Reel