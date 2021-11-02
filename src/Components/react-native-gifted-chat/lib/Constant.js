import { Platform } from 'react-native';
export const MIN_COMPOSER_HEIGHT = Platform.select({
    ios: 33,
    android: 50,
    web: 34,
});
export const MAX_COMPOSER_HEIGHT = 150;
export const DEFAULT_PLACEHOLDER = 'Digite uma mensagem...';
export const DATE_FORMAT = 'll';
export const TIME_FORMAT = 'LT';
//# sourceMappingURL=Constant.js.map