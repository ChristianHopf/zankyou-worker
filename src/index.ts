/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const html = `
			<!DOCTYPE html>
			<html>
				<head><title>Worker Page</title></head>
				<body>
					<h1>Cloudflare Worker Says Hi</h1>
					<p>I hope you have a wonderful life</p>
				</body>
			</html>`;

		return new Response(html, {
			headers: { 'content-type': 'text/html' },
		});
	},
} satisfies ExportedHandler<Env>;
