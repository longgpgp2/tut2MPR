import { useRef } from "react";
let Cell = ({ parentKey, childrenKey, clickHandler}) => {
    let [x,y]= [parentKey, childrenKey]
    const thisRef = useRef(null)
    let click = () => {
        let obj = clickHandler([x, y])
        if(obj.isChanged){
        let direction = obj.direction
        direction==="V"? thisRef.current.className = "d-inline-block p-4  border border-dark  bg-danger" : thisRef.current.className = "d-inline-block p-4  border border-dark  bg-primary"
        console.log("you have clicked!", x, y, direction)}
    }
    return (
        <div ref = {thisRef} onClick={click} className="d-inline-block p-4  border border-dark"></div>
    );
}
export default Cell;