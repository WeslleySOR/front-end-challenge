import { styled } from "@stitches/react";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    background: '#FFFFFF',
    alignItems: 'center',
    width: '100%',
    padding: '36px  16px 64px 16px',
    '@media (min-width: 768px)':{
        justifyContent: 'center',
        padding: '64px 16px',
    },
})