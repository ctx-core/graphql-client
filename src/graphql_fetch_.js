import { fetch } from '@ctx-core/fetch';
import { assign } from '@ctx-core/object';
export function graphql_fetch_(in_http_opts = {}) {
    return async function graphql_fetch(body, fn_in_http_opts = {}) {
        const url = fn_in_http_opts.url || in_http_opts.url;
        if (!url) {
            throw `no url prop`;
        }
        const response = await fetch(url, assign({
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
export { graphql_fetch_ as _graphql_fetch, graphql_fetch_ as _fetch__graphql, };
//# sourceMappingURL=src/graphql_fetch_.js.map