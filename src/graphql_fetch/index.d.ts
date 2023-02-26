import type { FetchHttpOpts } from '../_types'
export declare function graphql_fetch<data_T extends unknown = unknown>(
	body:string, fn_in_http_opts?:FetchHttpOpts
):Promise<graphql_fetch_response_T<data_T>>
export interface graphql_fetch_response_T<data_T extends unknown = unknown> {
	data:data_T
}
export {
	graphql_fetch as fetch_graphql,
	graphql_fetch as fetch__graphql,
}
