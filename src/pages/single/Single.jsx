import SideBars from "../../components/sidebars/SideBars"
import SinglePost from "../../pages/singlepost/SinglePost"
import "./single.css"


export default function Single() {
  return(
  <div className="single">
     <SinglePost/>
     <SideBars/>
  </div>
  )
}
