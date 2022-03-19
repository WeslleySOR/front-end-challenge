import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
    '*': { 
        margin: 0, 
        padding: 0,
        boxSizing: 'border-box',
    },
    'body': {
        background: '#F2F2F2'
    },
    'html': {
        fontSize: '62.5%',
        scrollBehavior: 'smooth',
        fontFamily: 'Open Sans, sans-serif'
    },
    'button': {
        fontFamily: 'Open Sans, sans-serif',
        cursor: 'pointer'
    }
})