import { toast } from "react-toastify";

import { FcLike, FcLikePlaceholder } from "react-icons/fc";
export default function Card({ course, setLikedCourses, likedCourses }) {
  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      //agar phle se liked h toh remove krna h
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like removed");
    } else {
      //agar phle se liked nhi h toh
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast("Liked successfully");
    }
  }
  return (
    <div className="w-[300px] bg-slate-700 rounded-md overflow-hidden bg-opacity-80 border">
      <div className="relative">
        <img alt="Img" src={course.image.url}></img>
        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center">
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize={"1.70rem"} />
            ) : (
              <FcLikePlaceholder fontSize={"1.55rem"} />
            )}
          </button>
        </div>
      </div>
      <div className="text-white p-4">
        <p className="font-extrabold text-lg leading-6">{course.title}</p>
        <p className="mt-2">
          {course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
}
