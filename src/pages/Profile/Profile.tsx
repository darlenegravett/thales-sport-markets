import { useParlayMarketsQuery } from 'queries/markets/useParlayMarketsQuery';
import useAccountPositionsQuery from 'queries/markets/useAccountPositionsQuery';
import React from 'react';
import { useSelector } from 'react-redux';
import { getIsWalletConnected, getNetworkId, getWalletAddress } from 'redux/modules/wallet';
import { RootState } from 'redux/rootReducer';
import useUsersStatsQuery from 'queries/wallet/useUsersStatsQuery';

const Profile: React.FC = () => {
    const walletAddress = useSelector((state: RootState) => getWalletAddress(state)) || '';
    const isWalletConnected = useSelector((state: RootState) => getIsWalletConnected(state));
    const networkId = useSelector((state: RootState) => getNetworkId(state));

    const parlayMarketsQuery = useParlayMarketsQuery(walletAddress, networkId, undefined, undefined, {
        enabled: isWalletConnected,
    });

    const accountPositionsQuery = useAccountPositionsQuery(walletAddress, networkId, {
        enabled: isWalletConnected,
    });

    const parlayMarkets = parlayMarketsQuery.isSuccess && parlayMarketsQuery.data ? parlayMarketsQuery.data : null;
    const accountPositions =
        accountPositionsQuery.isSuccess && accountPositionsQuery.data ? accountPositionsQuery.data : null;
    const userStat = useUsersStatsQuery(walletAddress.toLowerCase(), networkId, { enabled: isWalletConnected });

    console.log('parlayMarkets ', parlayMarkets);
    console.log('accountPositions ', accountPositions);
    console.log('userStat ', userStat);

    return <></>;
};

export default Profile;
