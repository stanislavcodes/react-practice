export const getFilteredProducts = (
  products,
  userId,
  categoryId,
  query,
) => {
  let filteredProducts = [...products];

  if (userId > 0) {
    filteredProducts = filteredProducts.filter(
      product => product.user.id === userId,
    );
  }

  if (categoryId > 0) {
    filteredProducts = filteredProducts.filter(
      product => product.categoryId === categoryId,
    );
  }

  if (categoryId > 0) {
    filteredProducts = filteredProducts.filter(
      product => product.categoryId === categoryId,
    );
  }

  if (query) {
    const normalizedQuery = query
      .toLowerCase()
      .split(' ')
      .filter(Boolean)
      .join(' ');

    filteredProducts = filteredProducts.filter(
      product => product.name.toLowerCase().includes(normalizedQuery),
    );
  }

  return filteredProducts;
};
