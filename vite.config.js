import { sveltekit } from '@sveltejs/kit/vite';
import { fileURLToPath, URL } from "url";



const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
			"@models": fileURLToPath(new URL("./src/models", import.meta.url)),
			"@components": fileURLToPath(new URL("./src/components", import.meta.url)),
		},
	  },
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
