import { import_meta_env_ } from 'ctx-core/env'
/**
 * @param {number|string}port
 * @returns {string}
 * @private
 */
export function graphql_port_txt_(port = import_meta_env_().PORT) {
	return (port || 80) === 80 ? '' : `:${port}`
}
export {
	graphql_port_txt_ as _graphql_port_txt,
	graphql_port_txt_ as _txt__port__graphql,
}
