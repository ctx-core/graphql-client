import { assign } from '@ctx-core/object'
import { _has__dom } from '@ctx-core/dom'
import { fetch } from '@ctx-core/fetch'
export interface FetchHttpHeaders {
	'Content-Type'?:string
}
export interface FetchHttpOpts {
	url?:string
	headers?:FetchHttpHeaders,
}
export function _fetch__graphql(http_opts__1:FetchHttpOpts = {}) {
	return async function fetch__graphql(
		body:string,
		http_opts__2:FetchHttpOpts = {},
	) {
		const response = await fetch(http_opts__2.url || http_opts__1.url, assign({
			method: 'POST',
			headers: assign({
				'Content-Type': 'application/json',
			}, http_opts__1.headers, http_opts__2.headers),
			body,
		}, http_opts__1, http_opts__2))
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
export function _url__graphql(host = '127.0.0.1') {
	if (_has__dom()) return '/graphql'
	const host_port = `${host}${_txt__port__graphql()}`
	return `http://${host_port}/graphql`
}
export function _txt__port__graphql(port = process.env.PORT) {
	return (port || 80) === 80 ? '' : `:${port}`
}
export const fetch__graphql = _fetch__graphql({
	url: _url__graphql(),
})
