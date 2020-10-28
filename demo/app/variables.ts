import { locals } from './variables.scss';
import { Screen } from '@nativescript/core/platform';

export const primaryColor: string = locals.primaryColor;
export const darkColor: string = locals.darkColor;
export const backgroundColor: string = locals.backgroundColor;
export const actionBarHeight: number = parseFloat(locals.actionBarHeight);
export const actionBarButtonHeight: number = parseFloat(
    locals.actionBarButtonHeight
);
export const screenHeightDips = Screen.mainScreen.heightDIPs;
export const screenWidthDips = Screen.mainScreen.widthDIPs;
