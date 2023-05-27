interface ShopDetails {
  location: { longitude: number; latitude: number };
  name: string;
}

export function useShop() {
  const addShop = async (shopDetails: ShopDetails) => {
    return fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/farmers`, {
      method: "POST",
      body: JSON.stringify(shopDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        return data.id;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addCategories = async (categories: string[], shopId: string) => {
    return fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/farmers/${shopId}/products`,
      {
        method: "POST",
        body: JSON.stringify(
          categories.map((item, index) => ({
            name: `Dummy Product ${index}${item}`,
            groceryType: item,
            price: {
              value: 1,
              perUnit: "kg",
            },
          }))
        ),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        return data.id;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { addShop, addCategories };
}
