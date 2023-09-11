import { BetType, Position } from 'enums/markets';
import React, { useMemo } from 'react';
import { SportMarketChildMarkets, SportMarketInfo } from 'types/markets';
import { Container, OddsContainer } from './styled-components';
import styled from 'styled-components';
import { BetTypeNameMap } from 'constants/tags';
import Odd from '../Odd';

type PlayerPropsOdds = {
    markets: SportMarketInfo[];
};

const PlayerPropsOdds: React.FC<PlayerPropsOdds> = ({ markets }) => {
    const marketsUI: SportMarketInfo[][] = useMemo(() => {
        const lastValidChildMarkets: SportMarketChildMarkets = {
            spreadMarkets: [],
            totalMarkets: [],
            doubleChanceMarkets: [],
            strikeOutsMarkets: markets.filter((market) => market.betType == BetType.PLAYER_PROPS_STRIKEOUTS),
            homeRunsMarkets: markets.filter((market) => market.betType == BetType.PLAYER_PROPS_HOMERUNS),
            passingYardsMarkets: markets.filter((market) => market.betType == BetType.PLAYER_PROPS_PASSING_YARDS),
            rushingYardsMarkets: markets.filter((market) => market.betType == BetType.PLAYER_PROPS_RUSHING_YARDS),
            receivingYardsMarkets: markets.filter((market) => market.betType == BetType.PLAYER_PROPS_RECEIVING_YARDS),
            passingTouchdownsMarkets: markets.filter(
                (market) => market.betType == BetType.PLAYER_PROPS_PASSING_TOUCHDOWNS
            ),
        };

        const result = [];
        if (lastValidChildMarkets.strikeOutsMarkets.length > 0) {
            result.push(lastValidChildMarkets.strikeOutsMarkets);
        }
        if (lastValidChildMarkets.homeRunsMarkets.length > 0) {
            result.push(lastValidChildMarkets.homeRunsMarkets);
        }
        if (lastValidChildMarkets.passingTouchdownsMarkets.length > 0) {
            result.push(lastValidChildMarkets.passingTouchdownsMarkets);
        }
        if (lastValidChildMarkets.rushingYardsMarkets.length > 0) {
            result.push(lastValidChildMarkets.rushingYardsMarkets);
        }
        if (lastValidChildMarkets.passingYardsMarkets.length > 0) {
            result.push(lastValidChildMarkets.passingYardsMarkets);
        }
        if (lastValidChildMarkets.receivingYardsMarkets.length > 0) {
            result.push(lastValidChildMarkets.receivingYardsMarkets);
        }

        return result;
    }, [markets]);

    return (
        <Container>
            {marketsUI.map((ppMarkets, index) => {
                return (
                    <SectionContainer key={index} dark={index % 2 === 0}>
                        <SectionTitle>{BetTypeNameMap[ppMarkets[0].betType as BetType]}</SectionTitle>
                        <OddsWrapper>
                            {ppMarkets.map((ppMarket, ind) => {
                                return (
                                    <MarketContainer key={ind}>
                                        <Player>{`${ppMarket.playerName} ${ppMarket.playerPropsLine}`}</Player>
                                        <OddsContainer>
                                            <Odd
                                                market={ppMarket}
                                                position={Position.HOME}
                                                odd={ppMarket.homeOdds}
                                                bonus={ppMarket.homeBonus}
                                            />
                                            <Odd
                                                market={ppMarket}
                                                position={Position.AWAY}
                                                odd={ppMarket.awayOdds}
                                                bonus={ppMarket.awayBonus}
                                            />
                                        </OddsContainer>
                                    </MarketContainer>
                                );
                            })}
                        </OddsWrapper>
                    </SectionContainer>
                );
            })}
        </Container>
    );
};

const SectionContainer = styled.div<{ dark: boolean }>`
    background: ${(props) =>
        props.dark ? props.theme.oddsContainerBackground.primary : props.theme.oddsContainerBackground.secondary};
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px;
    flex-direction: column;
    gap: 10px;
`;
const OddsWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 10px;
`;

const SectionTitle = styled.span`
    color: ${(props) => props.theme.textColor.primary};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    line-height: 12px;
    width: 100%;
    max-width: 150px;
`;

const Player = styled.span`
    color: ${(props) => props.theme.textColor.quaternary};
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    line-height: 14px;
    text-transform: uppercase;
`;

const MarketContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    gap: 5px;
    :not(:last-of-type) {
        border-right: 3px solid ${(props) => props.theme.borderColor.primary};
        padding-right: 10px;
    }
`;

export default PlayerPropsOdds;
