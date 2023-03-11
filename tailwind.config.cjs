/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    colors: {
      "base": "#d8cdcd",
      "content": "#48322e",
      "accent": "#ad8a85",
    },
		extend: {
      fontFamily: {
        bebasneue: ["BebasNeue"],
        nunito: ["Nunito"],
      },
      typography: {
        DEFAULT: {
          css: { color: "#48322e", }
        }
      }
    },
	},
	plugins: [require("@tailwindcss/typography")]
}
