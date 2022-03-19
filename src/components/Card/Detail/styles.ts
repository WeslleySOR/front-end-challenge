import { styled } from "@stitches/react";

export const Container = styled('div', {
    width: '31rem',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '6rem',
    padding: '1.7rem',
    border: '1px solid #E4E3E3',
    borderRadius: '0.8rem',
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.2)',
    '> div': {
        display: 'flex',
        flexDirection: 'column',
        'span': {
            color: '#9B9B9B',
            fontSize: '1.2rem',
            '&:last-of-type': {
                color: '#0A261D',
                fontSize: '2.4rem'
            }
        },
    }
})