import {
    MatchDate,
    MatchInfo,
    MatchInfoColumn,
    MatchParticipantImage,
    MatchParticipantImageContainer,
    MatchParticipantName,
    MatchVSLabel,
    OddsLabel,
    OddsLabelSceleton,
} from 'components/common';
import Tags from 'pages/Markets/components/Tags';
import React from 'react';
// import { useTranslation } from 'react-i18next';
import { SportMarketInfo } from 'types/markets';
import { formatDateWithTime } from 'utils/formatters/date';
import { getTeamImageSource } from 'utils/images';

type MarketCardOpenedProps = {
    market: SportMarketInfo;
};

const MarketCardOpened: React.FC<MarketCardOpenedProps> = ({ market }) => {
    // const { t } = useTranslation();

    return (
        <MatchInfo>
            <MatchInfoColumn>
                <MatchParticipantImageContainer>
                    <MatchParticipantImage src={getTeamImageSource(market.homeTeam, market.tags[0])} />
                </MatchParticipantImageContainer>
                <OddsLabel noOdds={market.awayOdds == 0 && market.homeOdds == 0} homeOdds={true}>
                    {market.homeOdds.toFixed(2)}
                </OddsLabel>
                <MatchParticipantName>{market.homeTeam}</MatchParticipantName>
            </MatchInfoColumn>
            <MatchInfoColumn>
                <MatchDate>{formatDateWithTime(market.maturityDate)}</MatchDate>
                <MatchVSLabel>VS</MatchVSLabel>
                <OddsLabel
                    isTwoPositioned={market.drawOdds === 0 && !(market.awayOdds == 0 && market.homeOdds == 0)}
                    isDraw={true}
                >
                    {market.awayOdds == 0 && market.homeOdds == 0 ? 'Coming Soon!' : market.drawOdds.toFixed(2)}
                </OddsLabel>
                <MatchParticipantName isTwoPositioned={market.drawOdds === 0}>{'DRAW'}</MatchParticipantName>
                <Tags sport={market.sport} tags={market.tags} />
            </MatchInfoColumn>
            <MatchInfoColumn>
                <MatchParticipantImageContainer>
                    <MatchParticipantImage src={getTeamImageSource(market.awayTeam, market.tags[0])} />
                </MatchParticipantImageContainer>
                {market ? (
                    <OddsLabel noOdds={market.awayOdds == 0 && market.homeOdds == 0} homeOdds={false}>
                        {market.awayOdds.toFixed(2)}
                    </OddsLabel>
                ) : (
                    <OddsLabelSceleton />
                )}
                <MatchParticipantName>{market.awayTeam}</MatchParticipantName>
            </MatchInfoColumn>
        </MatchInfo>
    );
};

export default MarketCardOpened;
