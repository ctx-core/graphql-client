import type { FetchHttpOpts } from './_types'
export declare function graphql_fetch_<O1 extends unknown = unknown>(
	in_http_opts?:FetchHttpOpts
):graphql_fetch_T<O1>;
export declare type graphql_fetch_T<O extends unknown = unknown> =
	(body:string, fn_in_http_opts?:FetchHttpOpts)=>Promise<O>;
export { graphql_fetch_ as _graphql_fetch, graphql_fetch_ as _fetch__graphql, }
