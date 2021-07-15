import { has_dom } from '@ctx-core/dom'
import { graphql_port_txt_ } from './graphql_port_txt_.js'
export function graphql_url_(host = '127.0.0.1') {
	if (has_dom) return '/graphql'
	const host_port = `${host}${graphql_port_txt_()}`
	return `http://${host_port}/graphql`
}
export {
	graphql_url_ as _graphql_url,
	graphql_url_ as _url__graphql,
}
