import { graphql_fetch_, graphql_fetch_T } from './graphql_fetch_'
import { graphql_url_ } from './graphql_url_'
import type { FetchHttpOpts } from './FetchHttpOpts'
let in_graphql_fetch: graphql_fetch_T
export function graphql_fetch<data_T extends unknown = unknown>(
	body:string,
	fn_in_http_opts:FetchHttpOpts = {},
) {
	if (!in_graphql_fetch) {
		in_graphql_fetch = graphql_fetch_<data_T>({
			url: graphql_url_(),
		})
	}
	return in_graphql_fetch(body, fn_in_http_opts) as Promise<graphql_fetch_response_I<data_T>>
}
export interface graphql_fetch_response_I<data_T extends unknown = unknown> {
	data: data_T
}
export type graphql_fetch_response_T = graphql_fetch_response_I
export type graphql_fetch_response_type = graphql_fetch_response_T
export {
	graphql_fetch as fetch_graphql,
	graphql_fetch as fetch__graphql,
}
