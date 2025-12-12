'use client';

import { createTheme } from '@mantine/core';

// Central Mantine theme created with createTheme
const mantineTheme = createTheme({
  colorScheme: 'light',
  primaryColor: 'teal',
  fontFamily: "var(--font-space-grotesk), var(--font-roboto-mono), system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
  headings: {
    fontFamily: "var(--font-space-grotesk), sans-serif",
    sizes: {
      h1: { fontSize: 40 },
    },
  },
  components: {
    Button: {
      defaultProps: {
        radius: 'md',
      },
      styles: (theme) => ({
        root: {
          borderRadius: 12,
          paddingLeft: 18,
          paddingRight: 18,
        },
      }),
    },
    Badge: {
      styles: () => ({
        root: {
          borderWidth: 1,
        },
      }),
    },
  },
});

export default mantineTheme;
