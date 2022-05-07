import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList({ items, onItemChange }) {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event){
    setSearch(console.log(event.target.value))
  }

  return (
    <div className="ShoppingList">
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search/>
      <ItemForm onItemFormSubmit={onItemChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
