import { TAGS_LIST } from 'constants/tags';
import React from 'react';
import styled from 'styled-components';
import { FlexDivCentered, FlexDivStart } from 'styles/common';

type TagsProps = {
    tags: number[];
};

const Tags: React.FC<TagsProps> = ({ tags }) => {
    return (
        <Container>
            {tags.map((tag: number) => {
                const findTagItem = TAGS_LIST.find((t) => t.id == tag);
                return findTagItem ? <Tag key={findTagItem.id}>{findTagItem.label}</Tag> : null;
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
    font-size: 15px;
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
