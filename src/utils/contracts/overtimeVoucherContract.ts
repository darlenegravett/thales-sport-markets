export const overtimeVoucherContract = {
    addresses: {
        5: '0xef4e90b909C0a5919AE049Ea18C997FdA09Ab66c',
        10: '0x4393F1470317Da64e277b29D96e5bf203f28eFbE',
        420: '0x9483eFf448042c366a4297dB465FaE108d2e6ea6',
    },
    abi: [
        {
            inputs: [
                { internalType: 'address', name: '_sUSD', type: 'address' },
                { internalType: 'string', name: '_tokenURIFive', type: 'string' },
                { internalType: 'string', name: '_tokenURITen', type: 'string' },
                { internalType: 'string', name: '_tokenURITwenty', type: 'string' },
                { internalType: 'string', name: '_tokenURIFifty', type: 'string' },
                { internalType: 'string', name: '_tokenURIHundred', type: 'string' },
                { internalType: 'string', name: '_tokenURITwoHundred', type: 'string' },
                { internalType: 'string', name: '_tokenURIFiveHundred', type: 'string' },
                { internalType: 'string', name: '_tokenURIThousand', type: 'string' },
                { internalType: 'address', name: '_sportsamm', type: 'address' },
                { internalType: 'address', name: '_parlayAMM', type: 'address' },
            ],
            stateMutability: 'nonpayable',
            type: 'constructor',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
                { indexed: true, internalType: 'address', name: 'approved', type: 'address' },
                { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
            ],
            name: 'Approval',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
                { indexed: true, internalType: 'address', name: 'operator', type: 'address' },
                { indexed: false, internalType: 'bool', name: 'approved', type: 'bool' },
            ],
            name: 'ApprovalForAll',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'address', name: 'buyer', type: 'address' },
                { indexed: false, internalType: 'address', name: 'market', type: 'address' },
                { indexed: false, internalType: 'enum ISportsAMM.Position', name: 'position', type: 'uint8' },
                { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'sUSDPaid', type: 'uint256' },
                { indexed: false, internalType: 'address', name: 'susd', type: 'address' },
                { indexed: false, internalType: 'address', name: 'asset', type: 'address' },
            ],
            name: 'BoughtFromAmmWithVoucher',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'address', name: 'buyer', type: 'address' },
                { indexed: false, internalType: 'address[]', name: '_sportMarkets', type: 'address[]' },
                { indexed: false, internalType: 'uint256[]', name: '_positions', type: 'uint256[]' },
                { indexed: false, internalType: 'uint256', name: '_sUSDPaid', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: '_expectedPayout', type: 'uint256' },
                { indexed: false, internalType: 'address', name: 'susd', type: 'address' },
            ],
            name: 'BoughtFromParlayWithVoucher',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: '_parlayAMM', type: 'address' }],
            name: 'NewParlayAMM',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: '_sportsAMM', type: 'address' }],
            name: 'NewSportsAMM',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'string', name: '_tokenURI', type: 'string' }],
            name: 'NewTokenUri',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
                { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' },
            ],
            name: 'OwnershipTransferred',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'bool', name: '_state', type: 'bool' }],
            name: 'Paused',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'from', type: 'address' },
                { indexed: true, internalType: 'address', name: 'to', type: 'address' },
                { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
            ],
            name: 'Transfer',
            type: 'event',
        },
        {
            inputs: [],
            name: '_name',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: '_symbol',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            name: 'amountInVoucher',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
            ],
            name: 'approve',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
            name: 'balanceOf',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'market', type: 'address' },
                { internalType: 'enum ISportsAMM.Position', name: 'position', type: 'uint8' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
            ],
            name: 'buyFromAMMWithVoucher',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address[]', name: '_sportMarkets', type: 'address[]' },
                { internalType: 'uint256[]', name: '_positions', type: 'uint256[]' },
                { internalType: 'uint256', name: '_sUSDPaid', type: 'uint256' },
                { internalType: 'uint256', name: '_additionalSlippage', type: 'uint256' },
                { internalType: 'uint256', name: '_expectedPayout', type: 'uint256' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
            ],
            name: 'buyFromParlayAMMWithVoucher',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
            name: 'getApproved',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'owner', type: 'address' },
                { internalType: 'address', name: 'operator', type: 'address' },
            ],
            name: 'isApprovedForAll',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'recipient', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'mint',
            outputs: [{ internalType: 'uint256', name: 'newItemId', type: 'uint256' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'name',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
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
            inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
            name: 'ownerOf',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'parlayAMM',
            outputs: [{ internalType: 'contract IParlayMarketsAMM', name: '', type: 'address' }],
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
        { inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
        {
            inputs: [
                { internalType: 'address payable', name: 'account', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'retrieveSUSDAmount',
            outputs: [],
            stateMutability: 'nonpayable',
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
            inputs: [
                { internalType: 'address', name: 'from', type: 'address' },
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
            ],
            name: 'safeTransferFrom',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'from', type: 'address' },
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                { internalType: 'bytes', name: 'data', type: 'bytes' },
            ],
            name: 'safeTransferFrom',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'operator', type: 'address' },
                { internalType: 'bool', name: 'approved', type: 'bool' },
            ],
            name: 'setApprovalForAll',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_parlayAMM', type: 'address' }],
            name: 'setParlayAMM',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'bool', name: '_state', type: 'bool' }],
            name: 'setPause',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_sportsAMM', type: 'address' }],
            name: 'setSportsAMM',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'string', name: '_tokenURIFive', type: 'string' },
                { internalType: 'string', name: '_tokenURITen', type: 'string' },
                { internalType: 'string', name: '_tokenURITwenty', type: 'string' },
                { internalType: 'string', name: '_tokenURIFifty', type: 'string' },
                { internalType: 'string', name: '_tokenURIHundred', type: 'string' },
                { internalType: 'string', name: '_tokenURITwoHundred', type: 'string' },
                { internalType: 'string', name: '_tokenURIFiveHundred', type: 'string' },
                { internalType: 'string', name: '_tokenURIThousand', type: 'string' },
            ],
            name: 'setTokenUris',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'sportsAMM',
            outputs: [{ internalType: 'contract ISportsAMM', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
            name: 'supportsInterface',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'symbol',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
            name: 'tokenURI',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'tokenURIFifty',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'tokenURIFive',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'tokenURIFiveHundred',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'tokenURIHundred',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'tokenURITen',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'tokenURIThousand',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'tokenURITwenty',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'tokenURITwoHundred',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'from', type: 'address' },
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
            ],
            name: 'transferFrom',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
            name: 'transferOwnership',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
    ],
};

export default overtimeVoucherContract;
