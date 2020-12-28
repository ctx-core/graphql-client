import type { FetchHttpOpts } from './FetchHttpOpts';
export declare function _graphql_fetch<O extends unknown = unknown>(in_http_opts?: FetchHttpOpts): graphql_fetch_type<O>;
export declare type graphql_fetch_type<O extends unknown = unknown> = (body: string, fn_in_http_opts: FetchHttpOpts) => Promise<O>;
export { _graphql_fetch as _fetch__graphql };
