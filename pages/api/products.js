export async function findProducts() {
  try {
  
    const response = await fetch(`http://localhost:3001/api/products`, {  
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });
    
    const respuesta = await response.json();
    return respuesta.products;
  } catch (error) {
      console.log(error);
    return null;
  }
}

export async function findProductsParameter( parameter ) {
  try {

    const response = await fetch(`http://localhost:3001/api/products/${parameter}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const respuesta = await response.json();
    return respuesta.products

  } catch (error) {
    console.log(error);
    return null;
  }
}
