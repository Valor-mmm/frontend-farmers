interface ShopDetails {
  location: { longitude: number; latitude: number };
  name: string;
}

export function useShop() {
  const addShop = async (shopDetails: ShopDetails) => {
    console.log("shopDetails", JSON.stringify(shopDetails));
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

  return { addShop };
}
