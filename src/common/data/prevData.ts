import { Product } from '../../features/products/model/productsSlice';
import { nanoid } from '@reduxjs/toolkit';
import cover from '../../assets/cover1.jpg';

export const products: Product[] = [
	{
		id: nanoid(),
		cover: cover,
		Title: 'Counter Strike 2',
		Type: 'Internal',
		subscribeStatus: 'Active',
		daysLeft: 10,
		PriceInUSD: '80 usd',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?',
	},
	{
		id: nanoid(),
		cover: cover,
		Title: 'Counter Strike 2',
		Type: 'External',
		subscribeStatus: 'None active',
		daysLeft: null,
		PriceInUSD: '80 usd',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?',
	},
	{
		id: nanoid(),
		cover: cover,
		Title: 'Counter Strike 2',
		Type: 'Individual',
		subscribeStatus: 'On update',
		daysLeft: 10,
		PriceInUSD: '80 usd',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?',
	},
	{
		id: nanoid(),
		cover: cover,
		Title: 'Counter Strike 2',
		Type: 'Internal',
		subscribeStatus: 'Active',
		daysLeft: 10,
		PriceInUSD: '80 usd',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?',
	},
	{
		id: nanoid(),
		cover: cover,
		Title: 'Counter Strike 2',
		Type: 'Internal',
		subscribeStatus: 'Active',
		daysLeft: 10,
		PriceInUSD: '80 usd',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?',
	},
	{
		id: nanoid(),
		cover: cover,
		Title: 'Counter Strike 2',
		Type: 'Internal',
		subscribeStatus: 'Active',
		daysLeft: 10,
		PriceInUSD: '80 usd',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?',
	},
	{
		id: nanoid(),
		cover: cover,
		Title: 'Counter Strike 2',
		Type: 'Internal',
		subscribeStatus: 'Active',
		daysLeft: 10,
		PriceInUSD: '80 usd',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?',
	},
];
