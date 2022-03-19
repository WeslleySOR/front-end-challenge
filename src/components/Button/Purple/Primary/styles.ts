import { styled } from "@stitches/react";

export const Container = styled('button', {
    border: 'none',
    borderRadius: '0.4rem',
    padding: '2.4rem 7.5rem',

    fontWeight: 'bold',
    fontSize: '1.5rem',
    textAlign: 'center',

    transition: 'background 0.2s, color 0.2s',
    variants: {
        isActive: {
            true: {
                background: '#A769B2',
                color: '#FFFFFF',
            },
            false: {
                background: '#DADADA',
                color: '#9B9B9B'
            }
        }
    }
})