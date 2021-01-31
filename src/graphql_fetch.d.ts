import type { FetchHttpOpts } from './FetchHttpOpts';
export declare function graphql_fetch<O extends unknown = unknown>(body: string, fn_in_http_opts?: FetchHttpOpts): Promise<O>;
export { graphql_fetch as fetch_graphql, graphql_fetch as fetch__graphql, };
