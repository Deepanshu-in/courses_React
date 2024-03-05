import { useState } from 'react';
import Card from './Card';
export default function Cards({courses,category}){
    const [likedCourses,setLikedCourses]=useState([]);
    let allCourses=[];
    const getCourses=()=>{
        if(category==="All"){
            Object.values(courses).forEach((courseCategory)=>{
                courseCategory.forEach((course)=>{
                    allCourses.push(course);
                })
            })
            //console.log(allCourses);
            return allCourses;
        }
        else{
            //passing array of only specific category
            return courses[category];
        }
        
    }
    return(
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {
                getCourses().map((course)=>{
                    return  <Card course={course} key={course.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
                })
            }
        </div>
    );
}