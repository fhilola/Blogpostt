import Skeleton from "react-loading-skeleton"

const CardSkeleton = ({cards}) => {
  return Array(cards).fill('hello').map(item =>
    <div className="card-skeleton" style={{padding: '16px', boxShadow: '0px 0px 10px #0000004d'}}>
        <div className="image-skeleton" style={{marginBottom:'30px'}}>
            <Skeleton height={200}/>
        </div>
        <div className="skeleton-content">
            <Skeleton count={5} style={{marginBottom:'10px'}}/>
        </div>
    </div>
    )
  
}

export default CardSkeleton