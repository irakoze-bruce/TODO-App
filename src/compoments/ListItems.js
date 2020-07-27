/** @format */

import React from "react";
import style from "./ListItems.module.css";

function ListItems(props) {
  const items = props.newItems;
  const listItems = items.map((item) => {
    return (
      <div key={item.key} className={style.list}>
        <p>
          <input
            value={item.text}
            key={item.key}
            onChange={(e) => props.updateItems(e.target.value)}
          />
          <span>
            <i
              className='fas fa-trash'
              onClick={() => props.deleteItem(item.key)}
            ></i>
          </span>
        </p>
      </div>
    );
  });

  return <div>{listItems}</div>;
}

export default ListItems;
