export const ButtonStyles = {
    baseStyle: {
        position: "relative",
        height: "auto",
        paddingTop: 2,
        paddingRight: 4,
        paddingBottom: 2,
        paddingLeft: 4,
        borderRadius: "4px",
        "::after": {
            content: "''",
            position: "absolute",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            opacity: "0",
            border: "1px solid white",
            bg: "transparent",
            borderRadius: "4px",
            transition: "all 150ms linear",
        },
        ":hover": {
            background: "#145591",
            color: "white",
            border: "1px solid #145591",
        },
        ":focus": {
            outline: 'none',
            boxShadow: 'none',
            background: "#1971C2",
            color: "white",
            border: "1px solid #1971C2",
        },
        '&:focus::after': {
            opacity: 1,
            margin: "px",
        }
    },
    variants: {
        primary: {
            background: "#1971C2",
            color: "white",
            border: "1px solid #1971C2",
        },
        secondary: {
            background: "transparent",
            color: "#1971C2",
            border: "1px solid #1971C2",
        }
    },
    defaultProps: {
        variant: 'primary',
    }
};