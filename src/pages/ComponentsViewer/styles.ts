import { styled } from "@stitches/react";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    'div': {
        display: 'flex',
        gap: '0.5rem'
    }
})