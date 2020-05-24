export interface FetchHttpHeaders {
    'Content-Type'?: string;
}
export interface FetchHttpOpts {
    url?: string;
    headers?: FetchHttpHeaders;
}
export declare function _fetch__graphql(http_opts__1?: FetchHttpOpts): (body: string, http_opts__2?: FetchHttpOpts) => Promise<any>;
export declare function _url__graphql(host?: string): string;
export declare function _txt__port__graphql(port?: string): string;
export declare const fetch__graphql: (body: string, http_opts__2?: FetchHttpOpts) => Promise<any>;
