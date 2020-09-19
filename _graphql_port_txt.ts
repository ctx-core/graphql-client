export function _graphql_port_txt(port = process.env.PORT) {
	return (port || 80) === 80 ? '' : `:${port}`
}
export const _txt__port__graphql = _graphql_port_txt
