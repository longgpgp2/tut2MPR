import { useEffect, useState } from "react";
import Row from "./Row";

let Board = ({size}) => {
    let [direction, setDirection] = useState("V");
    let [gameMatrix, setGameMatrix] = useState([]);
    useEffect(() => {
        let matrix = Array(size).fill().map(() => Array(size).fill(null));
        setGameMatrix([...matrix]);
    }, [])
    console.log(gameMatrix);

    const renderList = () => {
        let rows = [];
        for (let i = 0; i < size; i++) {
            rows.push(<Row key = {i} parentKey={i} size={size} clickHandler={clickHandler}/>);
        }
        return rows;
    };

    let clickHandler = ([x, y]) => {
        let isChanged=false
        if(direction==="V"){
        if(x<4)
        if(!gameMatrix[x][y] && !gameMatrix[x+1][y]){
        let matrix = gameMatrix
        direction === "V"? setDirection("H"): setDirection("V")
        matrix[x][y] = direction
        matrix[x+1][y] = direction
        setGameMatrix(matrix)
        isChanged=true
        }}
else
        if(direction==="H")
        if(y<4)
        if(!gameMatrix[x][y] && !gameMatrix[x][y+1]){
        let matrix = gameMatrix
        direction === "V"? setDirection("H"): setDirection("V")
        matrix[x][y] = direction
        matrix[x][y+1] = direction
        console.log(matrix)
        setGameMatrix(matrix)
        isChanged=true
        }
        return {
            direction: direction,
            isChanged: isChanged
        }
    }
    return (
        <div className="table table-bordered">
            {renderList()}
        </div>
    )
}
export default Board;