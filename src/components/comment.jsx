import { useState } from "react";

const Comment = ({addNewComment}) =>{

  const [formData,setFormData] = useState({
    username : "",
    Remarks :"",
    Rating : "5"
  })

 const handleInputChange = (event) => {
  setFormData((currData) => {
    return {...currData,[event.target.name] : event.target.value}
  })
 };

 const handleSubmit = (event) => {
  event.preventDefault();
  addNewComment(formData);
  setFormData({
    username : "",
    Remarks :"",
    Rating : ""
  })
 }

  return (
  <div className="content">
    <h4>Give a comment</h4>
     <form onSubmit={handleSubmit}>
      <label htmlFor="user">User</label>
    <input type="text" placeholder="Enter username" value={formData.username} onChange={handleInputChange} id="user" name="username" />
    <label htmlFor="remark">Remarks</label>
    <textarea cols="5" placeholder="Remarks" value={formData.Remarks} onChange={handleInputChange} id="remark" name="Remarks"></textarea>
    <label htmlFor="rating"> Rating</label>
    <input type="number" placeholder="Rating" min={1} max={5} value={formData.Rating} onChange={handleInputChange} id="rating" name="Rating"/>
    <button type="submit">Submit</button>
  </form>
  </div>
  )
}

export default Comment;