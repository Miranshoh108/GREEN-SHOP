import { createSlice } from "@reduxjs/toolkit";
interface InitialStatetype {
  modalAuthorizationVisiblty: boolean;
}
const initialState: InitialStatetype = {
  modalAuthorizationVisiblty: false,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalAuthorizationVisiblty(state) {
      state.modalAuthorizationVisiblty = !state.modalAuthorizationVisiblty;
    },
  },
});

export const { setModalAuthorizationVisiblty } = modalSlice.actions;
export default modalSlice.reducer;
