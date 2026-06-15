function VideoCard(props){
    return(
  <div class="card" style={{width: "18rem;"}}>
    <img src="..." class="card-img-top" alt="..."></img>
    <div class="card-body">
        <img src={props.img} height='250px' width='250px'  />
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.channel}</p>
    <p class="card-text">{props.views}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    )
}export default VideoCard