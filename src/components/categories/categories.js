import axios from 'axios'
import { useState } from 'react'
import './categories.css'
export const Categories=()=>{

    const [category,setCategory]=useState([])

    axios.get('/api/categories')
    .then(res=>setCategory(res.data.categories))
    return(
        <main className="quizzes-main flex centered mt-3">
            {category.map(item=>(
                <div className="card quiz-card">
                <div className="card-main-section quiz-card-main">
                    <img src={item.image} className="product-img quiz-img" alt="category-image" />
                    <main className="middle p-1">
                        <p className="para">{item.categoryName}</p>
                        {/* <div className="small-1">Take part in the amazing quiz and test your knowledge about Phir Hera Pheri Movie</div> */}
                        <div className="flex space-between mt-1">
                            {/* <div>3 questions</div> */}
                            <a href="/rules/movie-rules.html"><button className="btn start-quiz-btn quiz-bg-color">Watch Now</button></a>
                        </div>
                    </main>
                </div>
            </div>
            ))}
        </main>
    )
}