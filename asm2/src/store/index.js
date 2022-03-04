import { createSlice, configureStore } from "@reduxjs/toolkit";
import { STAFFS } from "../shared/staffs";

const staffSlice = createSlice({
  name: "staff",
  initialState: {
    totalStaffs: STAFFS,
    staffs: STAFFS,
    isOpenNewStaff: false,
    nameInput: "",
    nameIsValid: false,
    dobIsValid: false,
    startIsValid: false,
    nameTouched: false,
    dobTouched: false,
    startIsValid: false,
    formIsValid: false,
    nameError: "",
    dobError: "",
    startError: "",
  },
  reducers: {
    filterStaff(state, action) {
      const filterStaffs = state.totalStaffs.filter(
        (staff) =>
          staff.name.slice(staff.name.lastIndexOf(" ") + 1).toLowerCase() ===
          action.payload
      );
      state.staffs = filterStaffs;
    },

    addNewStaff(state, action) {
      state.totalStaffs.push(action.payload);
    },

    openNewStaff(state) {
      state.isOpenNewStaff = true;
    },
    closeNewStaff(state) {
      state.nameInput = "";
      state.isOpenNewStaff = false;
      state.nameTouched = false;
      state.dobTouched = false;
      state.startTouched = false;
      state.nameIsValid = false;
      state.dobIsValid = false;
      state.startIsValid = false;
      state.formIsValid = false;
      state.nameError = "";
      state.dobError = "";
      state.startError = "";
    },
    changeNameInput(state, action) {
      state.nameInput = action.payload;
    },

    nameValidHandler(state) {
      state.nameIsValid = true;
    },
    nameInvalidHandler(state) {
      state.nameIsValid = false;
    },
    dobValidHandler(state) {
      state.dobIsValid = true;
    },
    dobInvalidHandler(state) {
      state.dobIsValid = false;
    },
    startValidHandler(state) {
      state.startIsValid = true;
    },
    startInvalidHandler(state) {
      state.startIsValid = false;
    },

    formValidHandler(state) {
      state.formIsValid = true;
    },
    formInvalidHandler(state) {
      state.formIsValid = false;
    },

    nameTouchedHandler(state) {
      state.nameTouched = true;
    },
    dobTouchedHandler(state) {
      state.dobTouched = true;
    },
    startTouchedHandler(state) {
      state.startTouched = true;
    },

    editNameError(state, action) {
      state.nameError = action.payload;
    },
    editDobError(state, action) {
      state.dobError = action.payload;
    },

    editStartError(state, action) {
      state.startError = action.payload;
    },
  },
});

const store = configureStore({
  reducer: staffSlice.reducer,
});

export const staffActions = staffSlice.actions;

export default store;
