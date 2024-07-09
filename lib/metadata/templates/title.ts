import type { Route } from 'nextjs-routes';

import config from 'configs/app';

const TEMPLATE_MAP: Record<Route['pathname'], string> = {
  '/': '%network_name% blockchain explorer - View %network_name% stats',
  '/txs': '%network_name% transactions - %network_name% explorer',
  '/txs/kettle/[hash]': '%network_name% kettle %hash% transactions',
  '/tx/[hash]': '%network_name% transaction %hash%',
  '/blocks': '%network_name% blocks',
  '/block/[height_or_hash]': '%network_name% block %height_or_hash%',
  '/block/countdown/[height]': '%network_name% block countdown',
  '/accounts': '%network_name% top accounts',
  '/address/[hash]': '%network_name% address details for %hash%',
  '/verified-contracts': 'Verified %network_name% contracts lookup - %network_name% explorer',
  '/contract-verification': '%network_name% verify contract',
  '/address/[hash]/contract-verification': '%network_name% contract verification for %hash%',
  '/tokens': 'Tokens list - %network_name% explorer',
  '/token/[hash]': '%network_name% token details',
  '/token/[hash]/instance/[id]': '%network_name% NFT instance',
  '/apps': '%network_name% DApps - Explore top apps',
  '/apps/[id]': '%network_name% marketplace app',
  '/stats': '%network_name% stats - %network_name% network insights',
  '/api-docs': '%network_name% API docs - %network_name% developer tools',
  '/graphiql': 'GraphQL for %network_name% - %network_name% data query',
  '/search-results': '%network_name% search result for %q%',
  '/auth/profile': '%network_name% - my profile',
  '/account/watchlist': '%network_name% - watchlist',
  '/account/api-key': '%network_name% - API keys',
  '/account/custom-abi': '%network_name% - custom ABI',
  '/account/tag-address': '%network_name% - private tags',
  '/account/verified-addresses': '%network_name% - my verified addresses',
  '/public-tags/submit': '%network_name% - public tag requests',
  '/withdrawals': '%network_name% withdrawals - track on %network_name% explorer',
  '/visualize/sol2uml': '%network_name% Solidity UML diagram',
  '/csv-export': '%network_name% export data to CSV',
  '/deposits': '%network_name% deposits (L1 > L2)',
  '/output-roots': '%network_name% output roots',
  '/dispute-games': '%network_name% dispute games',
  '/batches': '%network_name% tx batches (L2 blocks)',
  '/batches/[number]': '%network_name% L2 tx batch %number%',
  '/blobs/[hash]': '%network_name% blob %hash% details',
  '/ops': 'User operations on %network_name% - %network_name% explorer',
  '/op/[hash]': '%network_name% user operation %hash%',
  '/404': '%network_name% error - page not found',
  '/name-domains': '%network_name% name domains - %network_name% explorer',
  '/name-domains/[name]': '%network_name% %name% domain details',
  '/validators': '%network_name% validators list',
  '/gas-tracker': '%network_name% gas tracker - Current gas fees',

  // service routes, added only to make typescript happy
  '/login': '%network_name% login',
  '/sprite': '%network_name% SVG sprite',
  '/api/metrics': '%network_name% node API prometheus metrics',
  '/api/log': '%network_name% node API request log',
  '/api/media-type': '%network_name% node API media type',
  '/api/proxy': '%network_name% node API proxy',
  '/api/csrf': '%network_name% node API CSRF token',
  '/api/healthz': '%network_name% node API health check',
  '/api/config': '%network_name% node API app config',
  '/api/sprite': '%network_name% node API SVG sprite content',
  '/auth/auth0': '%network_name% authentication',
  '/auth/unverified-email': '%network_name% unverified email',
};

const TEMPLATE_MAP_ENHANCED: Partial<Record<Route['pathname'], string>> = {
  '/token/[hash]': '%network_name% %symbol% token details',
  '/token/[hash]/instance/[id]': '%network_name% token instance for %symbol%',
  '/apps/[id]': '%network_name% - %app_name%',
  '/address/[hash]': '%network_name% address details for %domain_name%',
};

export function make(pathname: Route['pathname'], isEnriched = false) {
  const template = (isEnriched ? TEMPLATE_MAP_ENHANCED[pathname] : undefined) ?? TEMPLATE_MAP[pathname];
  const postfix = config.meta.promoteBlockscoutInTitle ? ' | Blockscout' : '';

  return (template + postfix).trim();
}
