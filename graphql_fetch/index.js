import { import_meta_env_ } from 'ctx-core/env'
import { fetch_response_pair__new } from 'ctx-core/fetch'
import { graphql_url_ } from '../graphql_url/index.js'
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
/**
 * @param {import('../_types/index.js').FetchHttpOpts}in_http_opts
 * @returns {import('../graphql_fetch').graphql_fetch_response_T}
 * @private
 */
export function graphql_fetch_(in_http_opts = {}) {
	return async function graphql_fetch(body, fn_in_http_opts = {}) {
		const url = fn_in_http_opts.url || in_http_opts.url
		if (!url) {
			throw `no url prop`
		}
		const [payload, response] = await fetch_response_pair__new(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				...in_http_opts.headers,
				...fn_in_http_opts.headers,
			},
			body,
			...in_http_opts,
			...fn_in_http_opts
		})
		if (response.ok) {
			if (payload.errors) throw payload
			return payload
		} else {
			if (import_meta_env_().NODE_ENV === 'production') {
				console.error(payload)
				throw `Error fetching graphql`
			} else {
				throw payload
			}
		}
	}
}
export {
	graphql_fetch_ as _graphql_fetch,
	graphql_fetch_ as _fetch__graphql,
}
