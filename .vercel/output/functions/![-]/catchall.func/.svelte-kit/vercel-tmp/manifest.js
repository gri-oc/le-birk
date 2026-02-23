export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["apple-touch-icon.png","cursor-fork-click.png","cursor-fork.png","cursor-frame-0.png","cursor-frame-1.png","cursor-frame-2.png","cursor-frame-3.png","cursor-frame-4.png","cursor-spoon-click.svg","cursor-spoon.svg","favicon.ico","favicon.png","images/birch-bark.jpg","images/closer.jpg","images/gallery-1.jpg","images/gallery-2.jpg","images/gallery-3.jpg","images/gallery-4.jpg","images/gallery-5.jpg","images/gallery-6.jpg","images/hero.jpg","images/logo-birk-only-web.png","images/logo-birk-only.png","images/logo-web.png","images/logo.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.B8dMegCx.js",app:"_app/immutable/entry/app.CI8xASI0.js",imports:["_app/immutable/entry/start.B8dMegCx.js","_app/immutable/chunks/BWr51q1_.js","_app/immutable/chunks/niWfwRiV.js","_app/immutable/chunks/Bs0sq7Ae.js","_app/immutable/chunks/Dv4RsI-H.js","_app/immutable/entry/app.CI8xASI0.js","_app/immutable/chunks/niWfwRiV.js","_app/immutable/chunks/7h0FSiGj.js","_app/immutable/chunks/B7lwSDVp.js","_app/immutable/chunks/Dv4RsI-H.js","_app/immutable/chunks/CyxhOYHB.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
