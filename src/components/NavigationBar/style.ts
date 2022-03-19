import { styled } from "@stitches/react";

export const Container = styled('nav', {
    display: 'flex',
    width: '100%',
    '> button': {
        flex: '1'
    },
    variants: {
        isVisible: {
            false: {
                display: 'none'
            }
        }
    }
})