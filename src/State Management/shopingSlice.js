import { createSlice, createAsyncThunk, isRejectedWithValue, current } from "@reduxjs/toolkit";

export const fetch_products = createAsyncThunk("fetch_product", async (data , {rejectWithValue}) => {
        const response = await fetch('https://fakestoreapi.com/products');
        try {
            const result = await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
})

export const shoppingSlice = createSlice({
    name: "shoppingapp",
    initialState: {
      allProducts: [],
      loading: false,
      error: null,
      cart: JSON.parse(localStorage.getItem("cartproduct")) || [],
      searchData: JSON.parse(localStorage.getItem("cartproduct")),
    },
    reducers: {
      searchProduct: (state, action) => {
        state.searchData = action.payload;
      },
  
      addToCart: (state, action) => {
        const { id, title, price, image } = action.payload;
        const obj = {
          id,
          title,
          price,
          image,
        };
        const currentCart = [...state.cart, obj];
        state.cart = currentCart;
        localStorage.setItem("cartproduct", JSON.stringify(currentCart));
      },
      
      removeFromCart: (state, action) => {
        state.cart = state.cart.filter((ele) => ele.id !== action.payload);
        localStorage.setItem("cartproduct", JSON.stringify(state.cart));
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetch_products.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetch_products.fulfilled, (state, action) => {
          state.loading = false;
          state.allProducts = action.payload;
        })
        .addCase(fetch_products.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    }
  });
  
  export const { addToCart, removeFromCart, searchProduct } = shoppingSlice.actions;
  export default shoppingSlice.reducer;
  
