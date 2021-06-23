import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get('screen');

export const CARD = {
    CARD_WIDTH: width * 0.9,
    CARD_HEIGHT: height * 0.7,
    CARD_BORDER_RADIUS: 20,
    OUT_OF_SCREEN: width + 0.5 * width,
};

export const COLORS = {
    like: '#00eda6',
    nope: '#ff006f'
}

export const ACTION_OFFSET = 100