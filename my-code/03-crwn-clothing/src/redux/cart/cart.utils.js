export const addItemToCart = (cartItems, item) => {
  const existing = cartItems.find(i => i.id === item.id);

  if (existing) {
    return cartItems.map(i => 
      i.id === item.id 
        ? { ...i, quantity: i.quantity + 1 }
        : i
    );
  }

  return [...cartItems, { ...item, quantity: 1 } ];
};