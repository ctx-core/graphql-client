import type { FetchHttpOpts } from './FetchHttpOpts';
export declare function graphql_fetch<data_type extends unknown = unknown>(body: string, fn_in_http_opts?: FetchHttpOpts): Promise<graphql_fetch_response_type<data_type>>;
export interface graphql_fetch_response_type<data_type extends unknown = unknown> {
    data: data_type;
}
export { graphql_fetch as fetch_graphql, graphql_fetch as fetch__graphql, };
