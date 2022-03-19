import { styled } from "@stitches/react";

export const Container = styled('button', {
    background: 'transparent',
    borderRadius: '0.4rem',
    padding: '2.4rem 7.5rem',

    fontWeight: 'bold',
    fontSize: '1.5rem',
    textAlign: 'center',
    variants: {
        isActive: {
            true: {
                color: '#A769B2',
                border: '2px solid #A769B2'
            },
            false: {
                color: '#9B9B9B',
                border: '2px solid #DADADA'
            }
        }
    }
})