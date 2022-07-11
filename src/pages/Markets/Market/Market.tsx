import SimpleLoader from 'components/SimpleLoader';
import ROUTES from 'constants/routes';
import useMarketQuery from 'queries/markets/useMarketQuery';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { getIsAppReady } from 'redux/modules/app';
import { RootState } from 'redux/rootReducer';
import styled from 'styled-components';
import { FlexDivColumn } from 'styles/common';
import { MarketData } from 'types/markets';
import { buildHref } from 'utils/routes';
import BackToLink from '../components/BackToLink';
import MarketDetails from './MarketDetails';
// import ResolveMarket from './ResolveMarket';
import Transactions from './Transactions';
import { Side } from '../../../constants/options';

type MarketProps = RouteComponentProps<{
    marketAddress: string;
}>;

const Market: React.FC<MarketProps> = (props) => {
    const { t } = useTranslation();
    const isAppReady = useSelector((state: RootState) => getIsAppReady(state));
    const [market, setMarket] = useState<MarketData | undefined>(undefined);
    const [selectedSide, setSelectedSide] = useState<Side>(Side.BUY);

    const { params } = props.match;
    const marketAddress = params && params.marketAddress ? params.marketAddress : '';

    const marketQuery = useMarketQuery(marketAddress, selectedSide === Side.SELL, {
        enabled: isAppReady,
    });

    useEffect(() => {
        if (marketQuery.isSuccess && marketQuery.data) {
            setMarket(marketQuery.data);
        }
    }, [marketQuery.isSuccess, marketQuery.data]);

    return (
        <Container>
            {market ? (
                <>
                    <BackToLink link={buildHref(ROUTES.Markets.Home)} text={t('market.back-to-markets')} />
                    <MarketDetails market={market} selectedSide={selectedSide} setSelectedSide={setSelectedSide} />
                    {/*{market.canMarketBeResolved && !market.isPaused && <ResolveMarket market={market} />}*/}
                    <Transactions marketAddress={marketAddress} />
                </>
            ) : (
                <SimpleLoader />
            )}
        </Container>
    );
};

const Container = styled(FlexDivColumn)`
    width: 60%;
    position: relative;
    align-items: center;
`;

export default Market;
