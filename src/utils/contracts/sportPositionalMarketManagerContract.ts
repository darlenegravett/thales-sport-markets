import { Network } from 'enums/network';

const sportPositionalMarketManagerContract = {
    addresses: {
        [Network.OptimismMainnet]: '0xFBffEbfA2bF2cF84fdCf77917b358fC59Ff5771e',
        [Network.OptimismGoerli]: '0xae56177e405929c95E5d4b04C0C87E428cB6432B',
        [Network.ArbitrumOne]: '0x72ca0765d4bE0529377d656c9645600606214610',
        [Network.Base]: '0xB0EE5C967F209f24f7eF30c2C6Da38346a87E089',
    },
    abi: [
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'address', name: '_whitelistAddress', type: 'address' },
                { indexed: false, internalType: 'bool', name: '_flag', type: 'bool' },
            ],
            name: 'AddedIntoWhitelist',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }],
            name: 'CreatorCapitalRequirementUpdated',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'address', name: '_market', type: 'address' },
                { indexed: false, internalType: 'uint256', name: '_newStartTime', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: '_expiry', type: 'uint256' },
            ],
            name: 'DatesUpdatedForMarket',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'address', name: '_parentMarket', type: 'address' },
                { indexed: false, internalType: 'address', name: '_doubleChanceMarket', type: 'address' },
                { indexed: false, internalType: 'uint256', name: 'tag', type: 'uint256' },
                { indexed: false, internalType: 'string', name: 'label', type: 'string' },
            ],
            name: 'DoubleChanceMarketCreated',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'bool', name: '_isDoubleChanceSupported', type: 'bool' }],
            name: 'DoubleChanceSupportChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'uint256', name: 'duration', type: 'uint256' }],
            name: 'ExpiryDurationUpdated',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'address', name: 'market', type: 'address' },
                { indexed: true, internalType: 'address', name: 'creator', type: 'address' },
                { indexed: true, internalType: 'bytes32', name: 'gameId', type: 'bytes32' },
                { indexed: false, internalType: 'uint256', name: 'maturityDate', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'expiryDate', type: 'uint256' },
                { indexed: false, internalType: 'address', name: 'up', type: 'address' },
                { indexed: false, internalType: 'address', name: 'down', type: 'address' },
                { indexed: false, internalType: 'address', name: 'draw', type: 'address' },
            ],
            name: 'MarketCreated',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'bool', name: 'enabled', type: 'bool' }],
            name: 'MarketCreationEnabledUpdated',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: 'market', type: 'address' }],
            name: 'MarketExpired',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'address', name: 'market', type: 'address' },
                { indexed: false, internalType: 'string', name: 'gameLabel', type: 'string' },
            ],
            name: 'MarketLabel',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'contract SportPositionalMarketManager',
                    name: 'receivingManager',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'contract SportPositionalMarket[]',
                    name: 'markets',
                    type: 'address[]',
                },
            ],
            name: 'MarketsMigrated',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'contract SportPositionalMarketManager',
                    name: 'migratingManager',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'contract SportPositionalMarket[]',
                    name: 'markets',
                    type: 'address[]',
                },
            ],
            name: 'MarketsReceived',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'uint256', name: 'duration', type: 'uint256' }],
            name: 'MaxTimeToMaturityUpdated',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'address', name: '_market', type: 'address' },
                { indexed: false, internalType: 'uint256', name: '_homeOdds', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: '_awayOdds', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: '_drawOdds', type: 'uint256' },
            ],
            name: 'OddsForMarketRestored',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'address', name: 'oldOwner', type: 'address' },
                { indexed: false, internalType: 'address', name: 'newOwner', type: 'address' },
            ],
            name: 'OwnerChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: 'newOwner', type: 'address' }],
            name: 'OwnerNominated',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'bool', name: 'isPaused', type: 'bool' }],
            name: 'PauseChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: 'migratingManager', type: 'address' }],
            name: 'SetMigratingManager',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: '_obratiner', type: 'address' }],
            name: 'SetObtainerAddress',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'address', name: '_sportPositionalMarketFactory', type: 'address' },
            ],
            name: 'SetSportPositionalMarketFactory',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: 'theRundownConsumer', type: 'address' }],
            name: 'SetTherundownConsumer',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: '_address', type: 'address' }],
            name: 'SetsUSD',
            type: 'event',
        },
        { inputs: [], name: 'acceptOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
        {
            inputs: [
                { internalType: 'uint256', name: 'index', type: 'uint256' },
                { internalType: 'uint256', name: 'pageSize', type: 'uint256' },
            ],
            name: 'activeMarkets',
            outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'apexConsumer',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'cancelTimeout',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: 'market', type: 'address' }],
            name: 'createDoubleChanceMarketsForParent',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'bytes32', name: 'gameId', type: 'bytes32' },
                { internalType: 'string', name: 'gameLabel', type: 'string' },
                { internalType: 'uint256', name: 'maturity', type: 'uint256' },
                { internalType: 'uint256', name: 'initialMint', type: 'uint256' },
                { internalType: 'uint256', name: 'positionCount', type: 'uint256' },
                { internalType: 'uint256[]', name: 'tags', type: 'uint256[]' },
                { internalType: 'bool', name: 'isChild', type: 'bool' },
                { internalType: 'address', name: 'parentMarket', type: 'address' },
            ],
            name: 'createMarket',
            outputs: [{ internalType: 'contract ISportPositionalMarket', name: '', type: 'address' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'customMarketCreationEnabled',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: 'delta', type: 'uint256' }],
            name: 'decrementTotalDeposited',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '', type: 'address' }],
            name: 'doubleChanceMarkets',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '', type: 'address' },
                { internalType: 'uint256', name: '', type: 'uint256' },
            ],
            name: 'doubleChanceMarketsByParent',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address[]', name: 'markets', type: 'address[]' }],
            name: 'expireMarkets',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'expiryDuration',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '_index', type: 'uint256' }],
            name: 'getActiveMarketAddress',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: 'market', type: 'address' }],
            name: 'getDoubleChanceMarketsByParentMarket',
            outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: 'delta', type: 'uint256' }],
            name: 'incrementTotalDeposited',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_owner', type: 'address' },
                { internalType: 'contract IERC20', name: '_sUSD', type: 'address' },
            ],
            name: 'initialize',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: 'candidate', type: 'address' }],
            name: 'isActiveMarket',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '', type: 'address' }],
            name: 'isDoubleChance',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: 'candidate', type: 'address' }],
            name: 'isDoubleChanceMarket',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'isDoubleChanceSupported',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: 'candidate', type: 'address' }],
            name: 'isKnownMarket',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_market', type: 'address' }],
            name: 'isMarketPaused',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_address', type: 'address' }],
            name: 'isWhitelistedAddress',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'lastPauseTime',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'marketCreationEnabled',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256', name: 'index', type: 'uint256' },
                { internalType: 'uint256', name: 'pageSize', type: 'uint256' },
            ],
            name: 'maturedMarkets',
            outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'needsTransformingCollateral',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_owner', type: 'address' }],
            name: 'nominateNewOwner',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'nominatedOwner',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'numActiveMarkets',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'numMaturedMarkets',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'oddsObtainer',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'owner',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'paused',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'market', type: 'address' },
                { internalType: 'uint256', name: '_outcome', type: 'uint256' },
            ],
            name: 'resolveMarket',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_market', type: 'address' },
                { internalType: 'uint256', name: '_outcome', type: 'uint256' },
                { internalType: 'uint8', name: '_homeScore', type: 'uint8' },
                { internalType: 'uint8', name: '_awayScore', type: 'uint8' },
                { internalType: 'address', name: '_consumer', type: 'address' },
            ],
            name: 'resolveMarketWithResult',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_market', type: 'address' },
                { internalType: 'uint256', name: '_homeOdds', type: 'uint256' },
                { internalType: 'uint256', name: '_awayOdds', type: 'uint256' },
                { internalType: 'uint256', name: '_drawOdds', type: 'uint256' },
            ],
            name: 'restoreInvalidOddsForMarket',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: 'value', type: 'uint256' }],
            name: 'reverseTransformCollateral',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'sUSD',
            outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '_cancelTimeout', type: 'uint256' }],
            name: 'setCancelTimeout',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '_expiryDuration', type: 'uint256' }],
            name: 'setExpiryDuration',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'bool', name: '_isDoubleChanceSupported', type: 'bool' }],
            name: 'setIsDoubleChanceSupported',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'bool', name: 'enabled', type: 'bool' }],
            name: 'setMarketCreationEnabled',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_market', type: 'address' },
                { internalType: 'bool', name: '_paused', type: 'bool' },
            ],
            name: 'setMarketPaused',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_oddsObtainer', type: 'address' }],
            name: 'setOddsObtainer',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_owner', type: 'address' }],
            name: 'setOwner',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'bool', name: '_paused', type: 'bool' }],
            name: 'setPaused',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_sportPositionalMarketFactory', type: 'address' }],
            name: 'setSportPositionalMarketFactory',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_theRundownConsumer', type: 'address' }],
            name: 'setTherundownConsumer',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address[]', name: '_whitelistedAddresses', type: 'address[]' },
                { internalType: 'bool', name: '_flag', type: 'bool' },
                { internalType: 'uint8', name: '_group', type: 'uint8' },
            ],
            name: 'setWhitelistedAddresses',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_address', type: 'address' }],
            name: 'setsUSD',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'sportPositionalMarketFactory',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'theRundownConsumer',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'totalDeposited',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: 'proxyAddress', type: 'address' }],
            name: 'transferOwnershipAtInit',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'sender', type: 'address' },
                { internalType: 'address', name: 'receiver', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'transferSusdTo',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: 'value', type: 'uint256' }],
            name: 'transformCollateral',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_market', type: 'address' },
                { internalType: 'uint256', name: '_newStartTime', type: 'uint256' },
            ],
            name: 'updateDatesForMarket',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '', type: 'address' }],
            name: 'whitelistedAddresses',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '', type: 'address' }],
            name: 'whitelistedCancelAddresses',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
    ],
};

export default sportPositionalMarketManagerContract;
