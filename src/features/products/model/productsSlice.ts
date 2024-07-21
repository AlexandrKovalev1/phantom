import { productsApi } from '../api/api';
import { createAppSlice } from '../../../common/utils/createAppSilce';

export type Product = {
	id: string;
	cover: string;
	Title: string;
	Type: 'Internal' | 'External' | 'Individual';
	subscribeStatus: 'Active' | 'None active' | 'On update';
	daysLeft: number | null;
	PriceInUSD: string;
	description: string | null;
};

const slice = createAppSlice({
	name: 'products',
	initialState: {
		products: [] as Product[],
	},
	reducers: create => ({
		fetchProducts: create.asyncThunk<{ products: Product[] }>(
			async () => {
				const res = await productsApi.getProducts();
				return { products: res.data };
			},
			{
				fulfilled: (state, action) => {
					state.products = action.payload.products;
				},
			},
		),
	}),
	selectors: {
		selectProducts: state => state.products,
	},
});

export const productsThunks = slice.actions;
export const productsReducer = slice.reducer;
export const { selectProducts } = slice.selectors;
