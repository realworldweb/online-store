/*constants*/
import { apiUrl } from "../constants";

const getCategories = async (level = 1 , amount = 100) => {
	try {
		const response = await fetch(apiUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				query: `query GetCategories {
                    categories(level: ${level}, first: ${amount}) {
                        edges {
                          node {
                            id
                            name
                          }
                        }
                      }
                }`,
			}),
		});

		const data = await response.json();
        const categories = data.data.categories.edges;

        return categories.map((category: any) => ({...category.node}));

	} catch (err) {
		console.error(err);
		return null;
	}
};

export {
    getCategories
}