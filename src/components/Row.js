import Cell from "./Cell";

let Row = ({ size, parentKey, clickHandler}) => {
    // const cellRefs= {}
    // for (let i=0; i<size;i++){
    //     const newRef = {
    //         [i]:useRef(null)
    //     }
    //     cellRefs={cellRefs, ...newRef}
    // }
    const renderList = () => {
        
        let row = [];
        for (let i = 0; i < size; i++) {
            row.push(<Cell id={i} key = {i} parentKey={parentKey} childrenKey={i} clickHandler={clickHandler} />);
        }

        return row;
    };
    return <div >{renderList()}</div>;
};
export default Row;
