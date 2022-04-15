import { fetch_response_pair_ } from '@ctx-core/fetch-undici'
import { assign } from '@ctx-core/object'
export function graphql_fetch_(in_http_opts = {}) {
	return async function graphql_fetch(body, fn_in_http_opts = {}) {
		const url = fn_in_http_opts.url || in_http_opts.url
		if (!url) {
			throw `no url prop`
		}
		const [payload, response] = await fetch_response_pair_(url, assign({
			method: 'POST',
			headers: assign({
				'Content-Type': 'application/json'
			}, in_http_opts.headers, fn_in_http_opts.headers),
			body
		}, in_http_opts, fn_in_http_opts))
		if (response.ok) {
			if (payload.errors) throw payload
			return payload
		} else {
			if (process.env.NODE_ENV === 'production') {
				console.error(payload)
				throw `Error fetching graphql`
			} else {
				throw payload
			}
		}
	}
}
export { graphql_fetch_ as _graphql_fetch, graphql_fetch_ as _fetch__graphql, }