interface thumbnail {
    url: string;
    alt: string
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

export type {
    Item
}