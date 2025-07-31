
import { useSelector } from "react-redux"
const Contents = () => {
   const counter =   useSelector((store) => store.counter);
  return (
    <>
  <p className="lead mb-4">
     counter count : {counter}
    </p>
  </>
  )
}
export default Contents;