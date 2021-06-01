import { fetch } from '@ctx-core/fetch'
import { assign } from '@ctx-core/object'
import type { FetchHttpOpts } from './FetchHttpOpts'
export function graphql_fetch_<O1 extends unknown = unknown>(
	in_http_opts = {} as FetchHttpOpts
):graphql_fetch_T<O1> {
	return async function graphql_fetch<O2 extends unknown = O1>(
		body:string,
		fn_in_http_opts:FetchHttpOpts = {},
	):Promise<O2> {
		const url = fn_in_http_opts.url || in_http_opts.url
		if (!url) {
			throw `no url prop`
		}
		const response = await fetch(url, assign({
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
		return payload as O2
	}
}
export type graphql_fetch_T<O extends unknown = unknown> =
	(body:string, fn_in_http_opts:FetchHttpOpts)=>Promise<O>
export {
	graphql_fetch_ as _graphql_fetch,
	graphql_fetch_ as _fetch__graphql,
}
