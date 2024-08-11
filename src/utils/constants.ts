import colors from 'tailwindcss/colors'

export const NAV_THEME = {
    light: {
        background: colors.neutral[50],
        text: colors.gray[800],
        border: colors.gray[600],
        notification: colors.blue[500],
        error: colors.red[500],
    },
    dark: {
        background: colors.gray[900],
        text: colors.gray[50],
        border: colors.gray[100],
        notification: colors.orange[500],
        error: colors.red[500],
    }
}