import { graphql_fetch_ } from './graphql_fetch_.js'
import { graphql_url_ } from './graphql_url_.js'
let in_graphql_fetch
export function graphql_fetch(body, fn_in_http_opts = {}) {
	if (!in_graphql_fetch) {
		in_graphql_fetch = graphql_fetch_({
			url: graphql_url_()
		})
	}
	return in_graphql_fetch(body, fn_in_http_opts)
}
export { graphql_fetch as fetch_graphql, graphql_fetch as fetch__graphql, }
