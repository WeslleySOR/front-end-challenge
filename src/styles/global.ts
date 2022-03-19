import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
    '*': { 
        margin: 0, 
        padding: 0,
        boxSizing: 'border-box',
    },
    '#root': {
        paddingBlock: '2rem',
        '> div': {
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh',
            'div': {
                display: 'flex',
                gap: '0.5rem'
            }
        }
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