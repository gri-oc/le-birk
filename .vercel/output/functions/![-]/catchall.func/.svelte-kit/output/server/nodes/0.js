import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BnMz8AJp.js","_app/immutable/chunks/B7lwSDVp.js","_app/immutable/chunks/niWfwRiV.js","_app/immutable/chunks/CyxhOYHB.js"];
export const stylesheets = ["_app/immutable/assets/0.B2SYk3GR.css"];
export const fonts = [];
