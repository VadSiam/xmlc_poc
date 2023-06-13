import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mockNewsCampaigns } from '../../mocks/newsCampaigns';

export interface NewsCampaign {
  date: {
    from: string;
    to: string;
  }
  body: string;
}
export interface NewsCampaignsState {
  campaigns: NewsCampaign[]
}

const initialState: NewsCampaignsState = {
  campaigns: mockNewsCampaigns,
};

export const newsCampaignsSlice = createSlice({
  name: 'newsCampaigns',
  initialState,
  reducers: {
    createNewsCampaign: (state, action: PayloadAction<NewsCampaign>) => {
      state.campaigns.push(action.payload);
    },
  },
});

export const { createNewsCampaign } = newsCampaignsSlice.actions;

export default newsCampaignsSlice.reducer;
