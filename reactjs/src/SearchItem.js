const SearchItem = ({search, setSearch}) => {
  return(
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="SearchItem">Search</label>
      <input 
      type="text" 
      id="search"
      role="searchbox"
      required
      autoFocus
      placeholder="Search Items"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
      
    </form>
  )
}
 export default SearchItem