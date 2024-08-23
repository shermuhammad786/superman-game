import "./fighting.css"
import superman from "../../assets/superman/waiting-for-fighting.webp"

export default function Fighting() {
  const changeDirection = (e) => {
    console.log(e);
  }
  return (
    <div>
      <div className="">
        <img src={superman} alt="" onClick={(e) => changeDirection(e)} />
        {/* <img src={supermanWalk} alt="" /> */}

      </div>
    </div>
  )
}
