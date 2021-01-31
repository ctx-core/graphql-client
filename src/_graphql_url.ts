import { has__dom } from '@ctx-core/dom'
import { _graphql_port_txt } from './_graphql_port_txt'
export function _graphql_url(host = '127.0.0.1') {
	if (has__dom) return '/graphql'
	const host_port = `${host}${_graphql_port_txt()}`
	return `http://${host_port}/graphql`
}
export const _url__graphql = _graphql_url
