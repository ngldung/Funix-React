import "./ColSelect.css"

const ColSelect = props => {
const changeColHandler = (event) => {
    const select = event.target.value;
    console.log(select);
    let col
    switch (select) {
        case "2": 
        col = 6;
        break;
        case "3":
        col = 4;
        break;
        case "6":
        col = 2;
        break
    }
    console.log(col);
    props.onSelectCol(col);
}

return <div className='col-select'>
<div className='col-select__control'>
  <label>Số cột hiển thị</label>
  <select value={props.initialCol} onChange={changeColHandler}>
    <option value='2'>2</option>
    <option value='3'>3</option>
    <option value='6'>6</option>
  </select>
</div>
</div>
}

export default ColSelect;
