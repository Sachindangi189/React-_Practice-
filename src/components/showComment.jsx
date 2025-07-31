import { useState } from "react";
import Comment from "./comment";

const ShowComment = () => {
  let [comments,setComments] = useState([
    {
     username : "sachin@12",
    Remarks :"nice person",
    Rating : "5"
  }
]);

  let addNewComment = (newcomment) => {
   setComments( (currComment)=> [...currComment,newcomment]);
  }

  return (
   <div>
    <h2>All comments</h2>
    {comments.map((comment,idx) => (
       <div className="comment" key={idx}>
     <span>username = {comment.username}</span>
     &nbsp;&nbsp;
     <span>Rating = {comment.Rating}</span>
     &nbsp;&nbsp;
     <span>Remarks = {comment.Remarks}</span>
    </div>

    ))}
   
    <Comment addNewComment = {addNewComment}/>
   </div>
  )
}

 export default ShowComment;