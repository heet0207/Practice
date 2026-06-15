import VideoCard from "./VideoCard"
// import h1 from "./h1.jpg"
import h2 from "./h2.png"
function VideoGrid(){
    const videos=[{
        img:h2,
        id:1,
        title:"React Tutorial",
        channel:"code Academy",
        views:"120K"
    },
    {
        img:h2,
        id:2,
        title:"React Tutorial",
        channel:"code Academy",
        views:"120K"
    },
    {
        img:h2,
        id:3,
        title:"React Tutorial",
        channel:"code Academy",
        views:"120K"
    },
    {
        img:h2,
        id:4,
        title:"React Tutorial",
        channel:"code Academy",
        views:"120K"
    },
    {
        img:h2,
        id:5,
        title:"React Tutorial",
        channel:"code Academy",
        views:"120K"
    },
    {
        img:h2,
        id:6,
        title:"React Tutorial",
        channel:"code Academy",
        views:"120K"
    },]
    return(
        <div className="video-grid">{
            videos.map((a)=>(
                <VideoCard key={a.id} img={a.img} title={a.title} channel={a.channel} views={a.views} />
            ))
        }
        </div>
    )
}export default VideoGrid