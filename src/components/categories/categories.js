import axios from 'axios'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { useAuth } from '../../context/auth-context'
import './categories.css'
export const Categories=()=>{

    const {category,setCategory,setSentCategory}=useAuth()


    useEffect(()=>{
        getCategory()
    },[])

    const getCategory=async() =>{
        try {
         const response= await axios.get('/api/categories')
         setCategory(response.data.categories);
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <main className="quizzes-main flex centered mt-3">
            {category.map(item=>(
                <Link onClick={()=>setSentCategory(item)} to={`/filtered/${item._id}`} id="video-category" key={item.id} className="card quiz-card">
                <div className="card-main-section quiz-card-main">
                    <img src={item.image} className="product-img quiz-img" alt="category-image" />
                    <main id="category-name" className="middle p-1">
                        <p className="para">{item.categoryName}</p>
                    </main>
                </div>
            </Link>
            ))}
        </main>
    )
}