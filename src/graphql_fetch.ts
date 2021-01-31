import { _graphql_fetch, graphql_fetch_type } from './_graphql_fetch'
import { _graphql_url } from './_graphql_url'
import type { FetchHttpOpts } from './FetchHttpOpts'
let in_graphql_fetch: graphql_fetch_type
export function graphql_fetch<O extends unknown = unknown>(
	body:string,
	fn_in_http_opts:FetchHttpOpts = {},
) {
	if (!in_graphql_fetch) {
		in_graphql_fetch = _graphql_fetch<O>({
			url: _graphql_url(),
		})
	}
	return in_graphql_fetch(body, fn_in_http_opts) as Promise<O>
}
export {
	graphql_fetch as fetch_graphql,
	graphql_fetch as fetch__graphql,
}
