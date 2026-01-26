export default {
    darkMode: "class",
    theme: {
        extend: {
            color: {
                primary: "hsl(var(--primary))",
                primaryForeground: "hsl(var(--primary-foreground))",

                secondary: "hsl(var(--secondary))",
                secondaryForeground: "hsl(var(--secondary-foreground))",

                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",

                muted: "hsl(var(--muted))",
                mutedForeground: "hsl(var(--muted-foreground))",

                component: "hsl(var(--component))",
                componentForeground: "hsl(var(--component-foreground))",

                border: "hsl(var(--border))"
            },
            borderRadius: {
                radius: "var(--radius)"
            },
            fontFamily: {
                fontBody: "var(--font-body)",
                fontHeading: "var(--fount-heading)"
            }
        }
    }
}