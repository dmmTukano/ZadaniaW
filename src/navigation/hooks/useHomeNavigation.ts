import {useNavigation} from '@react-navigation/native';
import {RegisterRouterParam} from 'navigation/types/router';

export default function useHomeNavigation() {
  return useNavigation<RegisterRouterParam>();
}
