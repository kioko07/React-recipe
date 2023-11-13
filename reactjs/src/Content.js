  import ItemList from "./itemList"

  const Content = ({items, handleCheck, handleDelete}) => {
    return (
      <main>
        {items.length ? (
            <ItemList
              items={items}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />
       ) : (
        <h3 className="empty">Your List is Empty...</h3>
       )}
      </main>
    )
  }

  export default Content 