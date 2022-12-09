import {StackNavigationProp} from '@react-navigation/stack';

export type RegisterRouterParamList = {
  Success: undefined;
  RegisterStep1Screen: undefined;
  RegisterStep2Screen: undefined;
  RegisterStep3Screen: undefined;
};

export type RegisterRouterParam = StackNavigationProp<RegisterRouterParamList>;
