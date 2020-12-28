import { fetch } from '@ctx-core/fetch'
import { assign } from '@ctx-core/object'
import type { FetchHttpOpts } from './FetchHttpOpts'
export function _graphql_fetch<O extends unknown = unknown>(in_http_opts = {} as FetchHttpOpts): graphql_fetch_type<O> {
	return async function graphql_fetch(
		body:string,
		fn_in_http_opts:FetchHttpOpts = {},
	) {
		const response = await fetch(fn_in_http_opts.url || in_http_opts.url, assign({
			method: 'POST',
			headers: assign({
				'Content-Type': 'application/json',
			}, in_http_opts.headers, fn_in_http_opts.headers),
			body,
		}, in_http_opts, fn_in_http_opts))
		if (!response.ok) {
			if (process.env.NODE_ENV === 'production') {
				console.error(await response.text())
				throw `Error fetching graphql`
			} else {
				throw (await response.text())
			}
		}
		const payload = await response.json()
		if (payload.errors) throw payload
		return payload as O
	}
}
export type graphql_fetch_type<O extends unknown = unknown> =
	(body:string, fn_in_http_opts:FetchHttpOpts) => Promise<O>
export {
	_graphql_fetch as _fetch__graphql
}
