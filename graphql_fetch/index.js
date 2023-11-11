import { graphql_fetch_ } from '../graphql_fetch_/index.js'
import { graphql_url_ } from '../graphql_url_/index.js'
let in_graphql_fetch
/**
 * @param {string}body
 * @param {import('../_types/index.js/index.js').FetchHttpOpts}fn_in_http_opts
 * @returns {Promise<import('./index.d.ts/index.js').graphql_fetch_response_T>}
 */
export function graphql_fetch(
	body,
	fn_in_http_opts = {}
) {
	if (!in_graphql_fetch) {
		in_graphql_fetch = graphql_fetch_({
			url: graphql_url_()
		})
	}
	return in_graphql_fetch(body, fn_in_http_opts)
}
export {
	graphql_fetch as fetch_graphql,
	graphql_fetch as fetch__graphql,
}
