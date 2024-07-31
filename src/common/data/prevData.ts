import { Product } from '../../features/products/model/productsSlice';
import { nanoid } from '@reduxjs/toolkit';
import cover from '../../assets/cover1.jpg';

export const products: Product[] = [
	{
		id: '1',
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
		id: '2',
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
		id: '3',
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
		id: '4',
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
		id: '5',
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
		id: '234',
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
		id: '23456',
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
