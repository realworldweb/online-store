
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
                      thumbnail(size: 200) {
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
                      description
                    }
                    cursor
                  }
                  }
              }`,
        }),
    })
    const data = await response.json();
    const projects = data.data.products.edges;

    return projects.map((product: any) => { return {...product.node, description: JSON.parse(product.node.description), price: product.node.pricing.priceRangeUndiscounted.stop.gross.amount, cursor : product.cursor}})
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
                    description
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

export{
    getProducts,
    getMoreProducts,

}