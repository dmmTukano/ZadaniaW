import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from 'redux/store';
import {
  IRegisterStep1Form,
  IRegisterStep3Form,
  IRegisterSteps,
} from 'types/form';

const initialState: IRegisterSteps = {
  firstStep: {step: 1, firstName: '', lastName: '', email: ''},
  secondStep: {step: 2, secondStepfinish: false},
  thirdStep: {step: 3, planSub: '', rodo: false, rules: false},
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    resetRegisterForm: state => {
      state.firstStep = {step: 1, firstName: '', lastName: '', email: ''};
      state.secondStep = {step: 2, secondStepfinish: false};
      state.thirdStep = {step: 3, planSub: '', rodo: false, rules: false};
    },
    firstStepSuccess: (state, action: PayloadAction<IRegisterStep1Form>) => {
      state.firstStep.firstName = action.payload.firstName;
      state.firstStep.lastName = action.payload.lastName;
      state.firstStep.email = action.payload.email;
      state.firstStep.firstStepfinish = true;
    },
    secondStepSuccess: state => {
      state.secondStep.secondStepfinish = true;
    },
    thirdStepSuccess: (state, action: PayloadAction<IRegisterStep3Form>) => {
      state.thirdStep.planSub = action.payload.planSub;
      state.thirdStep.rodo = action.payload.rodo;
      state.thirdStep.rules = action.payload.rules;
      state.thirdStep.thirdStepfinish = true;
    },
  },
});

export const {
  firstStepSuccess,
  secondStepSuccess,
  thirdStepSuccess,
  resetRegisterForm,
} = registerSlice.actions;
export default registerSlice.reducer;
export const selectFirstStepState = (state: RootState) =>
  state.register.firstStep;
export const selectSecondStepState = (state: RootState) =>
  state.register.secondStep;
export const selectThirdStepState = (state: RootState) =>
  state.register.thirdStep;
