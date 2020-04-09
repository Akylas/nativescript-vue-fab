/// <reference path="./node_modules/tns-platform-declarations/ios.d.ts" />
/// <reference path="./node_modules/tns-platform-declarations/android-26.d.ts" />
/// <reference path="./vue.shim.d.ts" />

declare module '*.scss' {
    export const locals;
}

// Augment the NodeJS global type with our own extensions
declare namespace NodeJS {
    interface Global {
        // Add custom properties here.
        isIOS: boolean;
        isAndroid: boolean;
    }
}
declare const TNS_ENV;
