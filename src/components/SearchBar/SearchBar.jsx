import css from './SearchBar.module.css'

 export default function SearchBar({onSearch}) {

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
	const searchImg = form.elements.searchImg.value;
  console.log(searchImg);
  
    form.reset();
  };


  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text" 
          name="searchImg" 
          
          //  autocomplete="off"
          //  autofocus
          placeholder="Search images and photos"
         
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}


