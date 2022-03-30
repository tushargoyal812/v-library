import { Navbar } from "../../components/navbar/navbar"
import { Sidebar } from "../../components/sidebar/sidebar"
import { useVideo } from "../../context/video-context"

export const WatchLater=()=>{
    const {watchLater}=useVideo()
    return (
        <>
        <Navbar/>
        <div class="product-main-sidebar ">
        <Sidebar/>
        <main class="product-main p-1">
            <div>
                <span id="hamburger" class="material-icons">
                    menu
                </span>
            </div>
            {/* <div class="showing p-2">
                Showing All Products
            </div> */}
            <div class="all-products">
                {watchLater.map(video=>(
                    <div className="card quiz-card">
                    <div className="card-main-section quiz-card-main">
                        <img src={video.image} className="product-img quiz-img" alt="category-image" />
                        <main className="middle p-1">
                            <p className="para"></p>
                            <div className="flex space-between mt-1">
                                {/* <a href="/rules/movie-rules.html"><button className="btn start-quiz-btn quiz-bg-color">Watch Later</button></a> */}
                            </div>
                        </main>
                    </div>
                </div>
                ))}
           </div>
        </main>
        </div>
        </>
    )
}