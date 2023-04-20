export const overtimeVoucherEscrowContract = {
    addresses: {
        10: '0xaB8f1fF41e58Bc5A4587161a9b95F71fa39e1553',
        420: '0xFd4D94e538aF8c176540a1Ad7009184F03476737',
        42161: '0xbd39d496EEBA3842521e8886a04312795c2bC799',
    },
    abi: [
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
            inputs: [{ indexed: false, internalType: 'address', name: 'account', type: 'address' }],
            name: 'Paused',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'uint256', name: '_timestamp', type: 'uint256' }],
            name: 'PeriodEndTimestampChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: '_address', type: 'address' }],
            name: 'SetOvertimeVoucher',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: '_address', type: 'address' }],
            name: 'SetsUSD',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: 'account', type: 'address' }],
            name: 'Unpaused',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'uint256', name: '_amount', type: 'uint256' }],
            name: 'VoucherAmountChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'address', name: '_address', type: 'address' },
                { indexed: false, internalType: 'uint256', name: '_amount', type: 'uint256' },
            ],
            name: 'VoucherClaimed',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'address', name: '_address', type: 'address' },
                { indexed: false, internalType: 'uint256', name: 'period', type: 'uint256' },
                { indexed: false, internalType: 'bool', name: '_flag', type: 'bool' },
            ],
            name: 'WhitelistChanged',
            type: 'event',
        },
        { inputs: [], name: 'acceptOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
        {
            inputs: [
                { internalType: 'uint256', name: '', type: 'uint256' },
                { internalType: 'address', name: '', type: 'address' },
            ],
            name: 'addressClaimedVoucherPerPeriod',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        { inputs: [], name: 'claimVoucher', outputs: [], stateMutability: 'nonpayable', type: 'function' },
        {
            inputs: [],
            name: 'claimingPeriodEnded',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        { inputs: [], name: 'initNonReentrant', outputs: [], stateMutability: 'nonpayable', type: 'function' },
        {
            inputs: [
                { internalType: 'address', name: '_owner', type: 'address' },
                { internalType: 'contract IERC20Upgradeable', name: '_sUSD', type: 'address' },
                { internalType: 'address', name: '_overtimeVoucher', type: 'address' },
                { internalType: 'address[]', name: '_whitelistedAddresses', type: 'address[]' },
                { internalType: 'uint256', name: '_voucherAmount', type: 'uint256' },
                { internalType: 'uint256', name: '_periodEnd', type: 'uint256' },
            ],
            name: 'initialize',
            outputs: [],
            stateMutability: 'nonpayable',
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
            name: 'overtimeVoucher',
            outputs: [{ internalType: 'contract OvertimeVoucher', name: '', type: 'address' }],
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
            inputs: [],
            name: 'period',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            name: 'periodEnd',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'sUSD',
            outputs: [{ internalType: 'contract IERC20Upgradeable', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_address', type: 'address' }],
            name: 'setOvertimeVoucher',
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
            inputs: [
                { internalType: 'uint256', name: '_periodEnd', type: 'uint256' },
                { internalType: 'bool', name: '_startNextPeriod', type: 'bool' },
            ],
            name: 'setPeriodEndTimestamp',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '_voucherAmount', type: 'uint256' }],
            name: 'setVoucherAmount',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address[]', name: '_whitelistedAddresses', type: 'address[]' },
                { internalType: 'bool', name: '_flag', type: 'bool' },
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
            inputs: [{ internalType: 'address', name: 'proxyAddress', type: 'address' }],
            name: 'transferOwnershipAtInit',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'voucherAmount',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256', name: '', type: 'uint256' },
                { internalType: 'address', name: '', type: 'address' },
            ],
            name: 'whitelistedAddressesPerPeriod',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
    ],
};
