import { is_browser_ } from 'ctx-core/env'
import { graphql_port_txt_ } from '../graphql_port_txt/index.js'
export function graphql_url_(host = '127.0.0.1', port = 80) {
	if (is_browser_()) return '/graphql'
	const host_port = `${host}${graphql_port_txt_(port)}`
	return `http://${host_port}/graphql`
}
export {
	graphql_url_ as _graphql_url,
	graphql_url_ as _url__graphql,
}
