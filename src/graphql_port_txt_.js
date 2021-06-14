export function graphql_port_txt_(port = process.env.PORT) {
    return (port || 80) === 80 ? '' : `:${port}`;
}
export { graphql_port_txt_ as _graphql_port_txt, graphql_port_txt_ as _txt__port__graphql, };
//# sourceMappingURL=src/graphql_port_txt_.js.map