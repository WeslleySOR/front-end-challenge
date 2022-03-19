import { styled } from "@stitches/react";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.7rem',
    'span': {
        fontWeight: '400',
        fontSize: '1.6rem',
        color: '#9B9B9B'
    },
    'input': {
        padding: '1.7rem 10.3rem',
        border: '1px solid #CCCCCC',
        borderRadius: '0.4rem',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: '2.4rem',
        background: '#FFFBE6',
        color: '#0A261D',
        '&::placeholder': {
            color: '#9B9B9B'
        }
    }
})