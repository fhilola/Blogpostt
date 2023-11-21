import Skeleton from "react-loading-skeleton"

export const CardSkeleton = ({ cards }) => {
    return Array(cards).fill('hello').map(item =>
        <div className="card-skeleton" style={{ padding: '16px', boxShadow: '0px 0px 10px #0000004d' }}>
            <div className="image-skeleton" style={{ marginBottom: '30px' }}>
                <Skeleton height={200} />
            </div>
            <div className="skeleton-content">
                <Skeleton count={5} style={{ marginBottom: '10px' }} />
            </div>
        </div>
    )
}

export const SingleSkeleton = () => {
    return (
        <div className="skeleton__wrapper" width={1200} style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', gap: '0 20px' }}>
            <Skeleton width={500} height={200} />
            <div width={600}>
                <Skeleton count={4} width={600} height={30} style={{ marginBottom: '20px' }} />
            </div>
        </div>
    )
}