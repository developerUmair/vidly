import React from "react";

const ListGroup = (props) => {
  const { onItemSelect, items, textProperty, valueProperty, selectedItem } =
    props;
  const allGenres = [{ _id: "00019", name: "All Genres" }, ...items];
  return (
    <div className="list-group">
      {allGenres.map((item) => (
        <a
          key={item[valueProperty]}
          href="#"
          className={`list-group-item list-group-item-action ${
            item.name === selectedItem ? "active" : ""
          }`}
          onClick={() => onItemSelect(item.name)}
        >
          {item[textProperty]}
        </a>
      ))}
    </div>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
