import { useColorScheme } from './useColorScheme';
import { Colors } from '../constants/Colors';

export function useThemeColor() {
  const colorScheme = useColorScheme();
  return Colors[colorScheme ?? 'light'];
}
