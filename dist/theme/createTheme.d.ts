export function createTheme(theme: {
    palette: {
        primary: string;
        grey: string;
        [key: string]: string;
    };
    radius?: string;
}): {
    radius: string;
    palette: {
        primary: string;
        grey: string;
        dark: string;
        dark800: string;
        secondary: string;
        darkBlue: string;
        light: string;
        backdrop: string;
        borderLight: string;
        border: string;
        borderFocus: string;
    };
};
export function calculateVariants(color: any): {
    [k: string]: string;
};
