import { styled } from "@stitches/react";

export const Container = styled('button', {
    padding: '1.4rem 5.7rem',
    fontSize: '1.6rem',
    textAlign: 'center',
    border: 'none',
    variants: {
        isActive: {
            true: {
                color: '#4DD0E1',
                background: '#FFFFFF',
                borderRadius: '4px 4px 0px 0px',
                borderBottom: '3px solid #4DD0E1'
            },
            false: {
                color: '#9B9B9B',
            }
        }
    }
})