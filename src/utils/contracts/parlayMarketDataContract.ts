import { Network } from 'enums/network';

const parlayMarketDataContract = {
    addresses: {
        [Network.OptimismMainnet]: '0x3bD77B8FE52242797C29Df251418873Ae34F0641',
        [Network.OptimismGoerli]: '0x54822552F51cd15c09bF360958A8e417989a925b',
        [Network.ArbitrumOne]: '0xff9d1B34f369CAf91c6b69761e2A06f78ed3cd9d',
        [Network.Base]: '0x6286E16e22B14c840e71852c81f50E5e3001753a',
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
                    internalType: 'uint256',
                    name: 'profit',
                    type: 'uint256',
                },
                {
                    indexed: false,
                    internalType: 'address[]',
                    name: 'parlays',
                    type: 'address[]',
                },
            ],
            name: 'ParlaysExercised',
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
                    name: '_parlayMarketsAMM',
                    type: 'address',
                },
            ],
            name: 'SetParlayMarketsAMM',
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
            inputs: [
                {
                    internalType: 'address',
                    name: '_game',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: '_position',
                    type: 'uint256',
                },
                {
                    internalType: 'address',
                    name: '_parlayMarket',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: '_parlayOwner',
                    type: 'address',
                },
            ],
            name: 'addParlayForGamePosition',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_parlayMarket',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: '_parlayOwner',
                    type: 'address',
                },
            ],
            name: 'addUserParlay',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address[]',
                    name: '_parlayMarket',
                    type: 'address[]',
                },
            ],
            name: 'exerciseParlays',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address[]',
                    name: '_parlayMarket',
                    type: 'address[]',
                },
                {
                    internalType: 'address',
                    name: '_sportMarket',
                    type: 'address',
                },
            ],
            name: 'exerciseSportMarketInParlays',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            name: 'gameAddressPositionParlay',
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
                    name: '_sportMarket',
                    type: 'address',
                },
            ],
            name: 'getAllParlaysForGame',
            outputs: [
                {
                    internalType: 'address[]',
                    name: 'homeParlays',
                    type: 'address[]',
                },
                {
                    internalType: 'address[]',
                    name: 'awayParlays',
                    type: 'address[]',
                },
                {
                    internalType: 'address[]',
                    name: 'drawParlays',
                    type: 'address[]',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_sportMarket',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: '_position',
                    type: 'uint256',
                },
            ],
            name: 'getAllParlaysForGamePosition',
            outputs: [
                {
                    internalType: 'address[]',
                    name: '',
                    type: 'address[]',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address[]',
                    name: '_sportMarket',
                    type: 'address[]',
                },
            ],
            name: 'getAllParlaysForGames',
            outputs: [
                {
                    internalType: 'address[]',
                    name: 'parlays',
                    type: 'address[]',
                },
                {
                    internalType: 'uint256',
                    name: 'numOfParlays',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'getAllSGPFees',
            outputs: [
                {
                    components: [
                        {
                            internalType: 'uint256',
                            name: 'tag',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'sgpMoneylineTotals',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'sgpMoneylineSpreads',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'sgpSpreadsTotals',
                            type: 'uint256',
                        },
                    ],
                    internalType: 'struct ParlayMarketData.SGPFees[]',
                    name: 'sgpFees',
                    type: 'tuple[]',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'uint256[]',
                    name: 'tags',
                    type: 'uint256[]',
                },
            ],
            name: 'getAllSGPFeesForBatch',
            outputs: [
                {
                    components: [
                        {
                            internalType: 'uint256',
                            name: 'tag',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'sgpMoneylineTotals',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'sgpMoneylineSpreads',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'sgpSpreadsTotals',
                            type: 'uint256',
                        },
                    ],
                    internalType: 'struct ParlayMarketData.SGPFees[]',
                    name: 'sgpFees',
                    type: 'tuple[]',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'getParlayAMMParameters',
            outputs: [
                {
                    components: [
                        {
                            internalType: 'uint256',
                            name: 'minUSDAmount',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'maxSupportedAmount',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'maxSupportedOdds',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'parlayAmmFee',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'safeBoxImpact',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'parlaySize',
                            type: 'uint256',
                        },
                    ],
                    internalType: 'struct ParlayMarketData.ParlayAmmParameters',
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
                    name: '_parlayMarket',
                    type: 'address',
                },
            ],
            name: 'getParlayDetails',
            outputs: [
                {
                    internalType: 'uint256',
                    name: 'numOfSportMarkets',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: 'sUSDPaid',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: 'totalResultQuote',
                    type: 'uint256',
                },
                {
                    internalType: 'bool',
                    name: 'resolved',
                    type: 'bool',
                },
                {
                    internalType: 'bool',
                    name: 'parlayPaused',
                    type: 'bool',
                },
                {
                    internalType: 'bool',
                    name: 'alreadyLost',
                    type: 'bool',
                },
                {
                    internalType: 'bool',
                    name: 'fundsIssued',
                    type: 'bool',
                },
                {
                    internalType: 'address[]',
                    name: 'markets',
                    type: 'address[]',
                },
                {
                    internalType: 'uint256[]',
                    name: 'positions',
                    type: 'uint256[]',
                },
                {
                    internalType: 'uint256[]',
                    name: 'oddsOnCreation',
                    type: 'uint256[]',
                },
                {
                    internalType: 'uint256[]',
                    name: 'marketResults',
                    type: 'uint256[]',
                },
                {
                    internalType: 'bool[]',
                    name: 'resolvedMarkets',
                    type: 'bool[]',
                },
                {
                    internalType: 'bool[]',
                    name: 'exercisedMarkets',
                    type: 'bool[]',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_parlayMarket',
                    type: 'address',
                },
            ],
            name: 'getParlayOutcomeDetails',
            outputs: [
                {
                    internalType: 'bool',
                    name: 'initialized',
                    type: 'bool',
                },
                {
                    internalType: 'bool',
                    name: 'resolved',
                    type: 'bool',
                },
                {
                    internalType: 'bool',
                    name: 'parlayPaused',
                    type: 'bool',
                },
                {
                    internalType: 'bool',
                    name: 'alreadyLost',
                    type: 'bool',
                },
                {
                    internalType: 'bool',
                    name: 'fundsIssued',
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
                    name: '_userAccount',
                    type: 'address',
                },
            ],
            name: 'getUserParlays',
            outputs: [
                {
                    internalType: 'address[]',
                    name: 'userAllParlays',
                    type: 'address[]',
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
                {
                    internalType: 'address',
                    name: '_parlayMarketsAMM',
                    type: 'address',
                },
            ],
            name: 'initialize',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_game',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: '_parlay',
                    type: 'address',
                },
            ],
            name: 'isGameInParlay',
            outputs: [
                {
                    internalType: 'bool',
                    name: 'containsParlay',
                    type: 'bool',
                },
                {
                    internalType: 'uint256',
                    name: 'position',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_game',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: '_position',
                    type: 'uint256',
                },
                {
                    internalType: 'address',
                    name: '_parlay',
                    type: 'address',
                },
            ],
            name: 'isGamePositionInParlay',
            outputs: [
                {
                    internalType: 'bool',
                    name: 'containsParlay',
                    type: 'bool',
                },
            ],
            stateMutability: 'view',
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
            inputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            name: 'numOfParlaysInGamePosition',
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
            inputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            name: 'parlayDetails',
            outputs: [
                {
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: 'sUSDPaid',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'parlayMarketsAMM',
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
                    name: '',
                    type: 'address',
                },
            ],
            name: 'parlayOwner',
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
                    name: '_game',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: '_position',
                    type: 'uint256',
                },
                {
                    internalType: 'address',
                    name: '_parlayMarket',
                    type: 'address',
                },
            ],
            name: 'removeParlayForGamePosition',
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
                    internalType: 'address',
                    name: '_parlayMarketsAMM',
                    type: 'address',
                },
            ],
            name: 'setParlayMarketsAMM',
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
            inputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            name: 'userNumOfParlays',
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
            inputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            name: 'userParlays',
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

export default parlayMarketDataContract;
