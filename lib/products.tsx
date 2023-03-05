
const url = 'https://twstg2.eu.saleor.cloud/graphql/';

const getProducts = async (amount = 8) => {
	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				query: `query GetProducts{
              products(channel: "uk", first: ${amount}) {
  
                    edges {
                      node {
                        id
                        rating
                        name
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
                      }
                    }
                    totalCount
                    pageInfo {
                      endCursor
                      hasNextPage
                      hasPreviousPage
                      startCursor
                    }
                    }
                }`,
			}),
		});

		const data = await response.json();
    console.log(data);
		let products = data.data.products.edges;

		products = products.map((product: any) => {
			return {
				...product.node,
				price: product.node.pricing.priceRangeUndiscounted.stop.gross.amount,
			};
		});

		const pageInfo = data.data.products.pageInfo;

		return { products, pageInfo, totalCount: data.data.products.totalCount };
	} catch (err) {
		console.error(err);
		return null;
	}
};

const getMoreProducts = async (after: string, amount = 8) => {
	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				query: `query GetProducts{
            products(channel: "uk", first: ${amount} after: "${after}") {
  
                  edges {
                    node {
                      id
                      name
                      rating
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
                    }
                  }
                  totalCount
                  pageInfo {
                    endCursor
                    hasNextPage
                    hasPreviousPage
                    startCursor
                  }
                  }
              }`,
			}),
		});

		const data = await response.json();
    console.log(data);
		let products = data.data.products.edges;

		products = products.map((product: any) => {
			return {
				...product.node,
				price: product.node.pricing.priceRangeUndiscounted.stop.gross.amount,
			};
		});

		const pageInfo = data.data.products.pageInfo;

		return { products, pageInfo, totalCount: data.data.products.totalCount };
	} catch (err) {
		console.error(err);
		return null;
	}
};

const getProduct = async (id: string) => {
	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				query: `query GetProduct{
              product( channel: "uk", id: "${id}") {
    
                name
                id
                description
                rating
                seoDescription
                seoTitle
                thumbnail(size: 250) {
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
                category {
                  slug
                  products(channel: "uk", first: 8, ) {
                    edges {
                      node {
                        name
                        id
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

		return {
			...product,
			description: JSON.parse(product.description),
			price: product.pricing.priceRangeUndiscounted.stop.gross.amount,
		};
	} catch (err) {
		console.error(err);
		return null;
	}
};

export { getProducts, getMoreProducts, getProduct };
