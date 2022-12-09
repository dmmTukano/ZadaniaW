export interface IRegisterStep1Form {
  step?: number;
  firstName: string;
  lastName: string;
  email: string;
  firstStepfinish?: boolean;
}

export interface IRegisterStep2Form {
  step?: number;
  password: string;
  confirmPassword: string;
  secondStepfinish?: boolean;
}

export interface IRegisterStep3Form {
  step?: number;
  planSub: string;
  rodo: boolean;
  rules: boolean;
  thirdStepfinish?: boolean;
}

export interface IRegisterSteps {
  firstStep: IRegisterStep1Form;
  secondStep: {step?: number; secondStepfinish: boolean};
  thirdStep: IRegisterStep3Form;
}
