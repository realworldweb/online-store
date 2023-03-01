
const url = "https://twstg2.eu.saleor.cloud/graphql/"

const getProducts = async (amount = 8) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query:
            `query GetProducts{
            products(channel: "uk", first: ${amount}) {
                  edges {
                    node {
                      id
                      thumbnail(size: 400) {
                        url
                        alt
                      }
                      pricing {
                        priceRangeUndiscounted {
                          stop {
                            gross {
                              currency
                              amount
                            }
                          }
                        }
                      }
                      name
                    }
                    cursor
                  }
                  }
              }`,
        }),
    })
    const data = await response.json();
    const products = data.data.products.edges;

    return products.map((product: any) => { return {...product.node, description: JSON.parse(product.node.description), price: product.node.pricing.priceRangeUndiscounted.stop.gross.amount, cursor : product.cursor}})
;

}

const getMoreProducts = async (after:string, amount = 8) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query:
            `query GetProducts{
            products(channel: "uk", first: ${amount}, after: "${after}") {

                edges {
                  node {
                    id
                    }
                  }
                  cursor
                  pageInfo {
                 hasNextPage
                  }

                }
              }`,
        }),
    })
    const data = await response.json();

    return data.data;
}

const getProduct = async (id: string) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        query:
        `query GetProduct{
          product( channel: "uk", id: "${id}") {

            name
            id
            description
            thumbnail(size: 200) {
              url
              alt
            }
            pricing {
              priceRangeUndiscounted {
                stop {
                  gross {
                    amount
                  }
                }
              }
            }
          }
          }`,
    }),
});
const data = await response.json();
const product = data.data.product;

return {...product, description: JSON.parse(product.description), price: product.pricing.priceRangeUndiscounted.stop.gross.amount};
}

export{
    getProducts,
    getMoreProducts,
    getProduct,

}