import { useRef } from "react"

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  const inputRef = useRef();
  return(
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        type="text"
        id="addItem"
        autoFocus
        ref={inputRef}
        required
        placeholder="Add Item" 
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
       />

       <button className="btn"
       type="submit" 
       aria-label="Add Item"
       onClick={() => inputRef.current.focus()}
       >
        +
       </button>
    </form>

  )
}

export default AddItem