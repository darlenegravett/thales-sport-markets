import { Network } from 'enums/network';

const sportVaultDataContract = {
    addresses: {
        [Network.OptimismMainnet]: '0x741AD22a9444D1B5e6606a3587EfFA5b8995321c',
        [Network.OptimismGoerli]: '',
        [Network.ArbitrumOne]: '0x4830853AC480A7ee1a86E1B4Fa909f0665858f01',
        [Network.Base]: '',
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
            inputs: [],
            name: 'acceptOwnership',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'contract ParlayVault',
                    name: 'parlayVault',
                    type: 'address',
                },
            ],
            name: 'getParlayVaultData',
            outputs: [
                {
                    components: [
                        {
                            internalType: 'bool',
                            name: 'vaultStarted',
                            type: 'bool',
                        },
                        {
                            internalType: 'uint256',
                            name: 'maxAllowedDeposit',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'round',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'roundEndTime',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'availableAllocationNextRound',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'minDepositAmount',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'maxAllowedUsers',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'usersCurrentlyInVault',
                            type: 'uint256',
                        },
                        {
                            internalType: 'bool',
                            name: 'canCloseCurrentRound',
                            type: 'bool',
                        },
                        {
                            internalType: 'bool',
                            name: 'paused',
                            type: 'bool',
                        },
                        {
                            internalType: 'uint256',
                            name: 'utilizationRate',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'priceLowerLimit',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'priceUpperLimit',
                            type: 'uint256',
                        },
                        {
                            internalType: 'int256',
                            name: 'skewImpactLimit',
                            type: 'int256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'allocationLimitsPerMarketPerRound',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'maxTradeRate',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'minTradeAmount',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'roundLength',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'allocationCurrentRound',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'allocationNextRound',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'lifetimePnl',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'allocationSpentInARound',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'tradingAllocation',
                            type: 'uint256',
                        },
                    ],
                    internalType: 'struct SportVaultData.VaultData',
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
                    internalType: 'contract SportVault',
                    name: 'sportVault',
                    type: 'address',
                },
            ],
            name: 'getSportVaultData',
            outputs: [
                {
                    components: [
                        {
                            internalType: 'bool',
                            name: 'vaultStarted',
                            type: 'bool',
                        },
                        {
                            internalType: 'uint256',
                            name: 'maxAllowedDeposit',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'round',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'roundEndTime',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'availableAllocationNextRound',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'minDepositAmount',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'maxAllowedUsers',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'usersCurrentlyInVault',
                            type: 'uint256',
                        },
                        {
                            internalType: 'bool',
                            name: 'canCloseCurrentRound',
                            type: 'bool',
                        },
                        {
                            internalType: 'bool',
                            name: 'paused',
                            type: 'bool',
                        },
                        {
                            internalType: 'uint256',
                            name: 'utilizationRate',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'priceLowerLimit',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'priceUpperLimit',
                            type: 'uint256',
                        },
                        {
                            internalType: 'int256',
                            name: 'skewImpactLimit',
                            type: 'int256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'allocationLimitsPerMarketPerRound',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'maxTradeRate',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'minTradeAmount',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'roundLength',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'allocationCurrentRound',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'allocationNextRound',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'lifetimePnl',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'allocationSpentInARound',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'tradingAllocation',
                            type: 'uint256',
                        },
                    ],
                    internalType: 'struct SportVaultData.VaultData',
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
                    internalType: 'contract ParlayVault',
                    name: 'parlayVault',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: 'user',
                    type: 'address',
                },
            ],
            name: 'getUserParlayVaultData',
            outputs: [
                {
                    components: [
                        {
                            internalType: 'uint256',
                            name: 'balanceCurrentRound',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'balanceNextRound',
                            type: 'uint256',
                        },
                        {
                            internalType: 'bool',
                            name: 'withdrawalRequested',
                            type: 'bool',
                        },
                    ],
                    internalType: 'struct SportVaultData.UserVaultData',
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
                    internalType: 'contract SportVault',
                    name: 'sportVault',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: 'user',
                    type: 'address',
                },
            ],
            name: 'getUserSportVaultData',
            outputs: [
                {
                    components: [
                        {
                            internalType: 'uint256',
                            name: 'balanceCurrentRound',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'balanceNextRound',
                            type: 'uint256',
                        },
                        {
                            internalType: 'bool',
                            name: 'withdrawalRequested',
                            type: 'bool',
                        },
                    ],
                    internalType: 'struct SportVaultData.UserVaultData',
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
                    name: 'proxyAddress',
                    type: 'address',
                },
            ],
            name: 'transferOwnershipAtInit',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
    ],
};

export default sportVaultDataContract;
