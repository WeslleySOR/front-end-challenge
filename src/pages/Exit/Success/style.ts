import { styled } from "@stitches/react";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '36px  16px 64px 16px',
    height: '100%',
    'span': {
        marginTop: '14px',
        textAlign:'center',
        color: '#4A4A4A',
        fontSize: '16px',
        textTransform: 'uppercase'
    }
})