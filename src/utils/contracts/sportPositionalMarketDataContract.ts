import { Network } from 'enums/network';

const sportPositionalMarketDataContract = {
    addresses: {
        [Network.OptimismMainnet]: '0xd8Bc9D6840C701bFAd5E7cf98CAdC2ee637c0701',
        [Network.OptimismGoerli]: '0x202209397e2A26dc3243bD4bF46480C1f6661032',
        [Network.ArbitrumOne]: '0x503e7F2C19384Ff68B445E21850fDC61f34434e6',
        [Network.Base]: '0x3d4139934d7C54dF2b969C2a40029C869b7a8Cfb',
    },
    abi: [
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'address',
                    name: 'oldOwner',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'address',
                    name: 'newOwner',
                    type: 'address',
                },
            ],
            name: 'OwnerChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'address',
                    name: 'newOwner',
                    type: 'address',
                },
            ],
            name: 'OwnerNominated',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'bool',
                    name: 'isPaused',
                    type: 'bool',
                },
            ],
            name: 'PauseChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'address',
                    name: '_consumer',
                    type: 'address',
                },
            ],
            name: 'SetConsumer',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'address',
                    name: '_oddsObtainer',
                    type: 'address',
                },
            ],
            name: 'SetOddsObtainer',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'address',
                    name: '_sportsAMM',
                    type: 'address',
                },
            ],
            name: 'SetSportsAMM',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'address',
                    name: '_voucherEscrow',
                    type: 'address',
                },
            ],
            name: 'SetVoucherEscrow',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'address',
                    name: '_manager',
                    type: 'address',
                },
            ],
            name: 'SportPositionalMarketManagerChanged',
            type: 'event',
        },
        {
            inputs: [],
            name: 'acceptOwnership',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'consumer',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'getBaseOddsForAllActiveMarkets',
            outputs: [
                {
                    components: [
                        {
                            internalType: 'address',
                            name: 'market',
                            type: 'address',
                        },
                        {
                            internalType: 'uint256[]',
                            name: 'odds',
                            type: 'uint256[]',
                        },
                    ],
                    internalType: 'struct SportPositionalMarketData.ActiveMarketsOdds[]',
                    name: '',
                    type: 'tuple[]',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address[]',
                    name: '_marketBatch',
                    type: 'address[]',
                },
            ],
            name: 'getCombinedOddsForBatchOfMarkets',
            outputs: [
                {
                    components: [
                        {
                            internalType: 'address',
                            name: 'mainMarket',
                            type: 'address',
                        },
                        {
                            components: [
                                {
                                    internalType: 'uint256[2]',
                                    name: 'tags',
                                    type: 'uint256[2]',
                                },
                                {
                                    internalType: 'uint256[6]',
                                    name: 'odds',
                                    type: 'uint256[6]',
                                },
                            ],
                            internalType: 'struct SportPositionalMarketData.CombinedOdds[]',
                            name: 'combinedOdds',
                            type: 'tuple[]',
                        },
                    ],
                    internalType: 'struct SportPositionalMarketData.SameGameParlayMarket[]',
                    name: 'sgpMarkets',
                    type: 'tuple[]',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_mainMarket',
                    type: 'address',
                },
            ],
            name: 'getCombinedOddsForMarket',
            outputs: [
                {
                    components: [
                        {
                            internalType: 'address',
                            name: 'mainMarket',
                            type: 'address',
                        },
                        {
                            components: [
                                {
                                    internalType: 'uint256[2]',
                                    name: 'tags',
                                    type: 'uint256[2]',
                                },
                                {
                                    internalType: 'uint256[6]',
                                    name: 'odds',
                                    type: 'uint256[6]',
                                },
                            ],
                            internalType: 'struct SportPositionalMarketData.CombinedOdds[]',
                            name: 'combinedOdds',
                            type: 'tuple[]',
                        },
                    ],
                    internalType: 'struct SportPositionalMarketData.SameGameParlayMarket',
                    name: 'sgpMarket',
                    type: 'tuple',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'market',
                    type: 'address',
                },
            ],
            name: 'getMarketData',
            outputs: [
                {
                    components: [
                        {
                            internalType: 'bytes32',
                            name: 'gameId',
                            type: 'bytes32',
                        },
                        {
                            internalType: 'string',
                            name: 'gameLabel',
                            type: 'string',
                        },
                        {
                            internalType: 'uint256',
                            name: 'firstTag',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'secondTag',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'maturity',
                            type: 'uint256',
                        },
                        {
                            internalType: 'bool',
                            name: 'resolved',
                            type: 'bool',
                        },
                        {
                            internalType: 'uint256',
                            name: 'finalResult',
                            type: 'uint256',
                        },
                        {
                            internalType: 'bool',
                            name: 'cancelled',
                            type: 'bool',
                        },
                        {
                            internalType: 'bool',
                            name: 'paused',
                            type: 'bool',
                        },
                        {
                            internalType: 'uint256[]',
                            name: 'odds',
                            type: 'uint256[]',
                        },
                        {
                            internalType: 'address[]',
                            name: 'childMarkets',
                            type: 'address[]',
                        },
                        {
                            internalType: 'address[]',
                            name: 'doubleChanceMarkets',
                            type: 'address[]',
                        },
                        {
                            internalType: 'uint8',
                            name: 'homeScore',
                            type: 'uint8',
                        },
                        {
                            internalType: 'uint8',
                            name: 'awayScore',
                            type: 'uint8',
                        },
                        {
                            internalType: 'int16',
                            name: 'spread',
                            type: 'int16',
                        },
                        {
                            internalType: 'uint24',
                            name: 'total',
                            type: 'uint24',
                        },
                    ],
                    internalType: 'struct SportPositionalMarketData.MarketData',
                    name: '',
                    type: 'tuple',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'market',
                    type: 'address',
                },
            ],
            name: 'getMarketLiquidityAndPriceImpact',
            outputs: [
                {
                    components: [
                        {
                            internalType: 'int256',
                            name: 'homePriceImpact',
                            type: 'int256',
                        },
                        {
                            internalType: 'int256',
                            name: 'awayPriceImpact',
                            type: 'int256',
                        },
                        {
                            internalType: 'int256',
                            name: 'drawPriceImpact',
                            type: 'int256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'homeLiquidity',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'awayLiquidity',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'drawLiquidity',
                            type: 'uint256',
                        },
                    ],
                    internalType: 'struct SportPositionalMarketData.MarketLiquidityAndPriceImpact',
                    name: '',
                    type: 'tuple',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'getOddsForAllActiveMarkets',
            outputs: [
                {
                    components: [
                        {
                            internalType: 'address',
                            name: 'market',
                            type: 'address',
                        },
                        {
                            internalType: 'uint256[]',
                            name: 'odds',
                            type: 'uint256[]',
                        },
                    ],
                    internalType: 'struct SportPositionalMarketData.ActiveMarketsOdds[]',
                    name: '',
                    type: 'tuple[]',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: 'batchNumber',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: 'batchSize',
                    type: 'uint256',
                },
            ],
            name: 'getOddsForAllActiveMarketsInBatches',
            outputs: [
                {
                    components: [
                        {
                            internalType: 'address',
                            name: 'market',
                            type: 'address',
                        },
                        {
                            internalType: 'uint256[]',
                            name: 'odds',
                            type: 'uint256[]',
                        },
                    ],
                    internalType: 'struct SportPositionalMarketData.ActiveMarketsOdds[]',
                    name: '',
                    type: 'tuple[]',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'market',
                    type: 'address',
                },
                {
                    internalType: 'enum ISportsAMM.Position',
                    name: 'position',
                    type: 'uint8',
                },
                {
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256',
                },
                {
                    internalType: 'address',
                    name: 'collateral',
                    type: 'address',
                },
            ],
            name: 'getPositionDetails',
            outputs: [
                {
                    components: [
                        {
                            internalType: 'int256',
                            name: 'priceImpact',
                            type: 'int256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'liquidity',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'quote',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'quoteDifferentCollateral',
                            type: 'uint256',
                        },
                    ],
                    internalType: 'struct SportPositionalMarketData.PositionDetails',
                    name: '',
                    type: 'tuple',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'getPriceImpactForAllActiveMarkets',
            outputs: [
                {
                    components: [
                        {
                            internalType: 'address',
                            name: 'market',
                            type: 'address',
                        },
                        {
                            internalType: 'int256[]',
                            name: 'priceImpact',
                            type: 'int256[]',
                        },
                    ],
                    internalType: 'struct SportPositionalMarketData.ActiveMarketsPriceImpact[]',
                    name: '',
                    type: 'tuple[]',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: 'batchNumber',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: 'batchSize',
                    type: 'uint256',
                },
            ],
            name: 'getPriceImpactForAllActiveMarketsInBatches',
            outputs: [
                {
                    components: [
                        {
                            internalType: 'address',
                            name: 'market',
                            type: 'address',
                        },
                        {
                            internalType: 'int256[]',
                            name: 'priceImpact',
                            type: 'int256[]',
                        },
                    ],
                    internalType: 'struct SportPositionalMarketData.ActiveMarketsPriceImpact[]',
                    name: '',
                    type: 'tuple[]',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'user',
                    type: 'address',
                },
            ],
            name: 'getVoucherEscrowData',
            outputs: [
                {
                    components: [
                        {
                            internalType: 'uint256',
                            name: 'period',
                            type: 'uint256',
                        },
                        {
                            internalType: 'bool',
                            name: 'isWhitelisted',
                            type: 'bool',
                        },
                        {
                            internalType: 'bool',
                            name: 'isClaimed',
                            type: 'bool',
                        },
                        {
                            internalType: 'uint256',
                            name: 'voucherAmount',
                            type: 'uint256',
                        },
                        {
                            internalType: 'bool',
                            name: 'isPeriodEnded',
                            type: 'bool',
                        },
                        {
                            internalType: 'uint256',
                            name: 'periodEnd',
                            type: 'uint256',
                        },
                    ],
                    internalType: 'struct SportPositionalMarketData.VoucherEscrowData',
                    name: '',
                    type: 'tuple',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_owner',
                    type: 'address',
                },
            ],
            name: 'initialize',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'lastPauseTime',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'manager',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_owner',
                    type: 'address',
                },
            ],
            name: 'nominateNewOwner',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'nominatedOwner',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'oddsObtainer',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'owner',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'paused',
            outputs: [
                {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_consumer',
                    type: 'address',
                },
            ],
            name: 'setConsumer',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_oddsObtainer',
                    type: 'address',
                },
            ],
            name: 'setOddsObtainer',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_owner',
                    type: 'address',
                },
            ],
            name: 'setOwner',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bool',
                    name: '_paused',
                    type: 'bool',
                },
            ],
            name: 'setPaused',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_manager',
                    type: 'address',
                },
            ],
            name: 'setSportPositionalMarketManager',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_sportsAMM',
                    type: 'address',
                },
            ],
            name: 'setSportsAMM',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_voucherEscrow',
                    type: 'address',
                },
            ],
            name: 'setVoucherEscrow',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'sportsAMM',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'proxyAddress',
                    type: 'address',
                },
            ],
            name: 'transferOwnershipAtInit',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'voucherEscrow',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
    ],
};

export default sportPositionalMarketDataContract;
