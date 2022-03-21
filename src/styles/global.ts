import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
    '*': { 
        margin: 0, 
        padding: 0,
        boxSizing: 'border-box',
    },
    '#root': {
        maxWidth: '100vw'
    },
    'body': {
        background: '#F2F2F2',
    },
    'html': {
        fontSize: '62.5%',
        scrollBehavior: 'smooth',
        fontFamily: 'Open Sans, sans-serif'
    },
    'button': {
        fontFamily: 'Open Sans, sans-serif',
        cursor: 'pointer'
    },
    '.react-modal-overlay': {
        background: 'rgba(0, 0, 0, 0.5)',
        position: 'fixed',
        top: '0',
        bottom: '0',
        right: '0',
        left: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingInline: '1rem',
    }
})