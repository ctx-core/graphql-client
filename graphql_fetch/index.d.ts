import type { FetchHttpOpts } from '../_types/index.js'
export declare function graphql_fetch<data_T = unknown>(
	body:string, fn_in_http_opts?:FetchHttpOpts
):Promise<graphql_fetch_response_T<data_T>>
export interface graphql_fetch_response_T<data_T = unknown> {
	data:data_T
}
export {
	graphql_fetch as fetch_graphql,
	graphql_fetch as fetch__graphql,
}
export declare function graphql_fetch_<
	O1 = unknown
>(in_http_opts?:FetchHttpOpts):graphql_fetch_T<O1>
export declare type graphql_fetch_T<O = unknown> =
	(body:string, fn_in_http_opts?:FetchHttpOpts)=>Promise<graphql_fetch_response_T<O>>
export {
	graphql_fetch_ as _graphql_fetch,
	graphql_fetch_ as _fetch__graphql,
}
