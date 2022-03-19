import { styled } from "@stitches/react";

export const Container = styled('button', {
    border: 'none',
    borderRadius: '0.4rem',
    padding: '2.4rem 7.5rem',

    fontWeight: 'bold',
    fontSize: '1.5rem',
    textAlign: 'center',
    variants: {
        isActive: {
            true: {
                background: '#28DD91',
                color: '#FFFFFF',
            },
            false: {
                background: '#DADADA',
                color: '#9B9B9B'
            }
        }
    }
})