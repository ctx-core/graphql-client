import { _graphql_fetch } from './_graphql_fetch'
import { _graphql_url } from './_graphql_url'
export const graphql_fetch = _graphql_fetch({
	url: _graphql_url(),
})
export {
	graphql_fetch as fetch_graphql,
	graphql_fetch as fetch__graphql,
}
