import VideoLancamento from "Components/VideoLancamento";
import "./Banner.css"

const Banner = () => {
    return (
        <div className="banner">
            <h2>Assista agora mesmo os lançamentos da semana!</h2>
            <p>Não perca as novidades!</p>
            <div className="videos-lancamento">
                <VideoLancamento video="https://i.ytimg.com/vi/ZY3-MFxVdEw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBS9pc6mdYSygHZqcwqBT75vcct9A" />
                <VideoLancamento video="https://i.ytimg.com/vi/iVNR-6v8lZU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBbsJYaQUG9zF4k4VRPU5DRTaRqZA" />
                <VideoLancamento video="https://i.ytimg.com/vi/mMMqMk2buzs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMzqwP6zvo-WGydiW0AASZ_rAVXw" />
            </div>
        </div>
    )
}

export default Banner;
