interface thumbnail {
	url: string;
	alt: string;
}

interface Item {
	name: string;
	id: string;
	description: any;
	thumbnail: thumbnail;
	price: number;
	cursor?: string;
	seoTitle?: string;
	rating?: number;
	seoDescription?: string;
	category: any;
}

interface CartItem {
	id: string;
	name: string;
	price: number;
	qty: number;
	image: thumbnail;
}

export type { Item, CartItem };

