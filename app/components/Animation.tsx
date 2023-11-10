
const Animation = () => {
    return ( 
        <div className="page">
            <video className="w-full" width="320" height="240" controls autoPlay muted loop>
                <source src="videos/animation.mp4" type="video/mp4" />
            </video>
        </div>
     );
}
 
export default Animation;