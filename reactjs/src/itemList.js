const ItemList = ({items, handleCheck, handleDelete}) => {
  return(
    <ul>
    {items.map((item) => (
      <li className='items'>
          <input type="checkbox"
            onChange={() => handleCheck(item.id)}
            checked={item.checked}
          />
          <label
          style={(item.checked) ? {textDecoration: 'line-through'} : null}
          onDoubleClick={() => handleCheck(item.id)}
          >{item.item}</label>
          <button
            onClick={() => handleDelete(item.id)}
          >X</button>
      </li>
    ))}
  </ul>
  )
}
export default ItemList