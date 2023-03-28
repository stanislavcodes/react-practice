import React, { useState } from 'react';

const CategoryButton = ({ title, onCategoryClick }) => (
  <button
    type="button"
    data-cy="Category"
    className="button mr-2 my-1 is-info"
    aria-label={`${title} filter button`}
    onClick={onCategoryClick}
  >
    {title}
  </button>
);

export const Filters = ({
  users,
  categories,
  onUserFilterChange,
  onCategoryFilterChange,
  onQueryFilterChange,
}) => {
  const temp = 0;
  const [query, setQuery] = useState('');

  const handleQueryChange = (event) => {
    const newQuery = event.target.value;

    onQueryFilterChange(newQuery);
    setQuery(newQuery);
  };

  const handleAllCategoriesClick = () => {};

  return (
    <nav className="panel">
      <p className="panel-heading">
        Filters
        {temp}
      </p>

      <p className="panel-tabs has-text-weight-bold">
        <a data-cy="FilterAllUsers" href="#/" className="is-active">
          All
        </a>

        {users.map(user => (
          <a
            data-cy="FilterUser"
            href="#/"
            key={user.id}
            onClick={() => onUserFilterChange(user.id)}
          >
            {user.name}
          </a>
        ))}
      </p>

      <div className="panel-block">
        <p className="control has-icons-left has-icons-right">
          <input
            data-cy="SearchField"
            type="text"
            className="input"
            placeholder="Search"
            value={query}
            onChange={handleQueryChange}
          />

          <span className="icon is-left">
            <i className="fas fa-search" aria-hidden="true" />
          </span>

          {query && (
            <span className="icon is-right">
              <button
                data-cy="ClearButton"
                type="button"
                className="delete"
                aria-label="clear-button"
              />
            </span>
          )}
        </p>
      </div>

      <div className="panel-block is-flex-wrap-wrap">
        <a
          href="#/"
          data-cy="AllCategories"
          className="button is-success mr-6 is-outlined"
          onClick={handleAllCategoriesClick}
        >
          All
        </a>

        {categories.map(category => (
          <CategoryButton
            title={category.title}
            onCategoryClick={() => onCategoryFilterChange(category.id)}
          />
        ))}
      </div>

      <div className="panel-block">
        <a
          data-cy="ResetAllButton"
          href="#/"
          className="button is-link is-outlined is-fullwidth"
        >
          Reset all filters
        </a>
      </div>
    </nav>
  );
};
