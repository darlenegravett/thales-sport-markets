import useTagsQuery from 'queries/markets/useTagsQuery';
import React, { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getIsAppReady } from 'redux/modules/app';
import { getNetworkId } from 'redux/modules/wallet';
import { RootState } from 'redux/rootReducer';
import styled from 'styled-components';
import { FlexDivCentered, FlexDivStart } from 'styles/common';
import { Tags as TagList } from 'types/markets';

type TagsProps = {
    tags: number[];
    labelFontSize?: number;
};

const Tags: React.FC<TagsProps> = ({ tags, labelFontSize }) => {
    // const { t } = useTranslation();
    const isAppReady = useSelector((state: RootState) => getIsAppReady(state));
    const networkId = useSelector((state: RootState) => getNetworkId(state));
    const [availableTags, setAvailableTags] = useState<TagList>([]);
    console.log(labelFontSize);
    const tagsQuery = useTagsQuery(networkId, {
        enabled: isAppReady,
    });

    useEffect(() => {
        if (tagsQuery.isSuccess && tagsQuery.data) {
            setAvailableTags(tagsQuery.data);
        }
    }, [tagsQuery.isSuccess, tagsQuery.data]);

    return (
        <Container>
            {tags.map((tag: number) => {
                const findTagItem = availableTags.find((t) => t.id == tag);
                return findTagItem ? (
                    <>
                        <Tag key={findTagItem.label}>{findTagItem.label}</Tag> /
                    </>
                ) : null;
            })}
        </Container>
    );
};

const Container = styled(FlexDivStart)`
    flex-wrap: wrap;
    align-items: center;
    color: ${(props) => props.theme.textColor.primary};
    margin-bottom: 5px;
`;

export const TagLabel = styled.span<{ labelFontSize?: number }>`
    font-style: normal;
    font-weight: bold;
    font-size: ${(props) => props.labelFontSize || 15}px;
    line-height: 100%;
    text-align: center;
    color: ${(props) => props.theme.textColor.primary};
    margin-bottom: 4px;
`;

const Tag = styled(FlexDivCentered)`
    font-style: normal;
    font-weight: 300;
    font-size: 9px;
    line-height: 10px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    padding: 4px 4px;
    color: ${(props) => props.theme.textColor.primary};
`;

export default Tags;
