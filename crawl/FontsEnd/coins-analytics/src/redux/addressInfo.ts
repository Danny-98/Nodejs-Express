import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type token = {
  symbol: string;
  contracAddress: string;
  quantity: string | number;
  value: string | number;
};

type holderType = {
  rank?: string;
  link?: string;
  quantity?: string | number;
  percentage?: string;
  value?: string | number;
  address: string;
};
type transaction = {
  txnHash: string;
  method?: string;
  age?: string;
  from?: string;
  status?: string;
  to?: string;
  value?: string | number;
};

export type Trending = {
  item: {
    id: string;
    coin_id: number;
    name: string;
    symbol: string;
    market_cap_rank: number;
    thumb: string;
    small: string;
    large: string;
    slug: string;
    price_btc: number;
    score: number;
  };
};

export interface AddressState {
  holder: holderType;
  transactions: Array<transaction>;
  tokenHolding: {
    totalValue: string | number;
    tokens: Array<token>;
  };
}

export interface InitialState {
  trendings: Array<Trending>;
  transactions: Array<transaction>;
  tokenHolding: {
    totalValue: string | number;
    tokens: Array<token>;
  };
}

const initialState: InitialState = {
  trendings: [],
  transactions: [],
  tokenHolding: {
    totalValue: "",
    tokens: [],
  },
};

export const addressSlice = createSlice({
  name: "addresInfo",
  initialState,
  reducers: {
    setTransactions: (state, action: PayloadAction<Array<transaction>>) => {
      state.transactions = action.payload;
    },
    setTokenHolding: (
      state,
      action: PayloadAction<{ totalValue: string; tokens: Array<token> }>
    ) => {
      state.tokenHolding.totalValue = action.payload.totalValue;
      state.tokenHolding.tokens = action.payload.tokens;
    },
    setTrendings: (state, action: PayloadAction<Array<Trending>>) => {
      state.trendings = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTokenHolding, setTransactions, setTrendings } =
  addressSlice.actions;

export default addressSlice.reducer;
