import { _graphql_fetch } from './_graphql_fetch';
import { _graphql_url } from './_graphql_url';
let in_graphql_fetch;
export function graphql_fetch(body, fn_in_http_opts = {}) {
    if (!in_graphql_fetch) {
        in_graphql_fetch = _graphql_fetch({
            url: _graphql_url(),
        });
    }
    return in_graphql_fetch(body, fn_in_http_opts);
}
export { graphql_fetch as fetch_graphql, graphql_fetch as fetch__graphql, };
