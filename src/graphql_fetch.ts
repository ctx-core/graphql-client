import { graphql_fetch_, graphql_fetch_type } from './graphql_fetch_'
import { graphql_url_ } from './graphql_url_'
import type { FetchHttpOpts } from './FetchHttpOpts'
let in_graphql_fetch: graphql_fetch_type
export function graphql_fetch<data_type extends unknown = unknown>(
	body:string,
	fn_in_http_opts:FetchHttpOpts = {},
) {
	if (!in_graphql_fetch) {
		in_graphql_fetch = graphql_fetch_<data_type>({
			url: graphql_url_(),
		})
	}
	return in_graphql_fetch(body, fn_in_http_opts) as Promise<graphql_fetch_response_type<data_type>>
}
export interface graphql_fetch_response_type<data_type extends unknown = unknown> {
	data: data_type
}
export {
	graphql_fetch as fetch_graphql,
	graphql_fetch as fetch__graphql,
}
