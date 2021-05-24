import { fetch } from '@ctx-core/fetch';
import { assign } from '@ctx-core/object';
export function _graphql_fetch(in_http_opts = {}) {
    return async function graphql_fetch(body, fn_in_http_opts = {}) {
        const response = await fetch(fn_in_http_opts.url || in_http_opts.url, assign({
            method: 'POST',
            headers: assign({
                'Content-Type': 'application/json',
            }, in_http_opts.headers, fn_in_http_opts.headers),
            body,
        }, in_http_opts, fn_in_http_opts));
        if (!response.ok) {
            if (process.env.NODE_ENV === 'production') {
                console.error(await response.text());
                throw `Error fetching graphql`;
            }
            else {
                throw (await response.text());
            }
        }
        const payload = await response.json();
        if (payload.errors)
            throw payload;
        return payload;
    };
}
export { _graphql_fetch as _fetch__graphql };
