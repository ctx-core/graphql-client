import { fetch } from '@ctx-core/fetch'
import { assign } from '@ctx-core/object'
import type { FetchHttpOpts } from './FetchHttpOpts'
export function _graphql_fetch(in_http_opts = {} as FetchHttpOpts) {
	return async function fetch__graphql(
		body:string,
		http_opts__2:FetchHttpOpts = {},
	) {
		const response = await fetch(http_opts__2.url || in_http_opts.url, assign({
			method: 'POST',
			headers: assign({
				'Content-Type': 'application/json',
			}, in_http_opts.headers, http_opts__2.headers),
			body,
		}, in_http_opts, http_opts__2))
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
		return payload
	}
}
export const _fetch__graphql = _graphql_fetch
