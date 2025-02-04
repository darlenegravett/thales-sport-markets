import { USD_SIGN } from 'constants/currency';
import { Rates } from 'queries/rates/useExchangeRatesQuery';
import React, { useCallback, useMemo, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
    FlexDivSpaceBetween,
    FlexDivColumnCentered,
    FlexDivRowCentered,
    FlexDivStart,
    FlexDivCentered,
} from 'styles/common';
import { Coins } from 'types/tokens';
import { isStableCurrency } from 'utils/collaterals';
import { formatCurrencyWithSign } from 'utils/formatters/number';
import { setPaymentSelectedCollateralIndex } from 'redux/modules/parlay';
import { getNetworkId } from '../../redux/modules/wallet';

type CollateralSelectorProps = {
    collateralArray: Array<string>;
    selectedItem: number;
    onChangeCollateral: (index: number) => void;
    disabled?: boolean;
    isDetailedView?: boolean;
    collateralBalances?: any;
    exchangeRates?: Rates | null;
    dropDownWidth?: string;
};

const CollateralSelector: React.FC<CollateralSelectorProps> = ({
    collateralArray,
    selectedItem,
    onChangeCollateral,
    disabled,
    isDetailedView,
    collateralBalances,
    exchangeRates,
    dropDownWidth,
}) => {
    const dispatch = useDispatch();
    const networkId = useSelector(getNetworkId);

    const [open, setOpen] = useState(false);

    const getUSDForCollateral = useCallback(
        (collateral: Coins) =>
            (collateralBalances ? collateralBalances[collateral] : 0) *
            (isStableCurrency(collateral as Coins) ? 1 : exchangeRates?.[collateral] || 0),
        [collateralBalances, exchangeRates]
    );

    const collateralsDetailsSorted = useMemo(() => {
        const mappedCollaterals = collateralArray.map((collateral, index) => ({ name: collateral as Coins, index }));
        if (!isDetailedView) {
            return mappedCollaterals;
        }
        return mappedCollaterals.sort(
            (collateralA, collateralB) => getUSDForCollateral(collateralB.name) - getUSDForCollateral(collateralA.name)
        );
    }, [collateralArray, isDetailedView, getUSDForCollateral]);

    return (
        <Container>
            <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
                <SelectedCollateral disabled={!!disabled} onClick={() => !disabled && setOpen(!open)}>
                    <TextCollateralWrapper isDetailedView={isDetailedView}>
                        <TextCollateral isDetailedView={isDetailedView} isSelectedCollateral={true}>
                            {collateralArray[selectedItem]}
                        </TextCollateral>
                    </TextCollateralWrapper>
                    <Arrow
                        className={open ? `icon-thales icon-thales--caret-up` : `icon-thales icon-thales--caret-down`}
                    />
                </SelectedCollateral>
                {isDetailedView
                    ? open && (
                          <DetailedDropdown width={dropDownWidth} onClick={() => setOpen(!open)}>
                              {collateralsDetailsSorted.map((collateral, i) => {
                                  return (
                                      <DetailedCollateralOption
                                          key={i}
                                          onClick={() => {
                                              onChangeCollateral(collateral.index);
                                              dispatch(
                                                  setPaymentSelectedCollateralIndex({
                                                      selectedCollateralIndex: collateral.index,
                                                      networkId: networkId,
                                                  })
                                              );
                                          }}
                                      >
                                          <FlexDivCentered>
                                              <Icon
                                                  className={`currency-icon currency-icon--${collateral.name.toLowerCase()}`}
                                              />
                                              <TextCollateral fontWeight="600" isDetailedView={true}>
                                                  {collateral.name}
                                              </TextCollateral>
                                          </FlexDivCentered>
                                          <div>
                                              <TextCollateral fontWeight="400" isDetailedView={true}>
                                                  {formatCurrencyWithSign(
                                                      null,
                                                      collateralBalances ? collateralBalances[collateral.name] : 0
                                                  )}
                                              </TextCollateral>
                                              <TextCollateral fontWeight="600" isDetailedView={true}>
                                                  {!exchangeRates?.[collateral.name] &&
                                                  !isStableCurrency(collateral.name as Coins)
                                                      ? '...'
                                                      : ` (${formatCurrencyWithSign(
                                                            USD_SIGN,
                                                            getUSDForCollateral(collateral.name as Coins)
                                                        )})`}
                                              </TextCollateral>
                                          </div>
                                      </DetailedCollateralOption>
                                  );
                              })}
                          </DetailedDropdown>
                      )
                    : open && (
                          <Dropdown width={dropDownWidth} onClick={() => setOpen(!open)}>
                              {collateralArray.map((collateral, index) => {
                                  return (
                                      <CollateralOption
                                          key={index}
                                          onClick={() => {
                                              onChangeCollateral(index);
                                              dispatch(
                                                  setPaymentSelectedCollateralIndex({
                                                      selectedCollateralIndex: index,
                                                      networkId: networkId,
                                                  })
                                              );
                                          }}
                                      >
                                          <TextCollateral fontWeight="600">{collateral}</TextCollateral>
                                      </CollateralOption>
                                  );
                              })}
                          </Dropdown>
                      )}
            </OutsideClickHandler>
        </Container>
    );
};

const Container = styled(FlexDivStart)`
    margin: 0 7px;
    align-items: center;
`;

const Text = styled.span<{
    fontWeight?: string;
    isDetailedView?: boolean;
    isSelectedCollateral?: boolean;
}>`
    font-style: normal;
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '600')};
    font-size: ${(props) => (props.isDetailedView ? '14px' : '12px')};
    ${(props) => (props.isSelectedCollateral ? `line-height: ${props.isDetailedView ? '15px' : '12px'};` : '')}
    @media (max-width: 768px) {
        ${(props) => (!props.isDetailedView && props.isSelectedCollateral ? 'font-size: 10px;' : '')}
        ${(props) => (!props.isDetailedView && props.isSelectedCollateral ? 'line-height: 10px;' : '')}
    }
`;

const TextCollateral = styled(Text)`
    color: ${(props) =>
        props.isDetailedView
            ? props.theme.input.textColor.primary
            : props.isSelectedCollateral
            ? props.theme.textColor.quaternary
            : props.theme.textColor.tertiary};
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
`;

const TextCollateralWrapper = styled.div<{ isDetailedView?: boolean }>`
    min-width: ${(props) => (props.isDetailedView ? '48px' : '45px')};
    display: flex;
    @media (max-width: 768px) {
        ${(props) => (!props.isDetailedView ? 'min-width: 35px;' : '')}
    }
`;

const Arrow = styled.i`
    font-size: 10px;
    text-transform: none;
    color: ${(props) => props.theme.textColor.quaternary};
`;

const SelectedCollateral = styled(FlexDivRowCentered)<{ disabled: boolean }>`
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
    opacity: ${(props) => (props.disabled ? 0.4 : 1)};
`;

const Dropdown = styled(FlexDivColumnCentered)<{ width?: string }>`
    position: absolute;
    margin-top: 6px;
    margin-left: -16px;
    width: ${(props) => (props.width ? props.width : '71px')};
    padding: 5px 3px;
    border-radius: 8px;
    background: ${(props) => props.theme.background.quaternary};
    z-index: 100;
    border: 2px solid ${(props) => props.theme.input.borderColor.tertiary};
`;

const DetailedDropdown = styled(FlexDivColumnCentered)<{ width?: string }>`
    position: absolute;
    top: 35px;
    right: 0px;
    width: ${(props) => (props.width ? props.width : '350px')};
    padding: 5px 3px;
    border-radius: 8px;
    background: ${(props) => props.theme.input.background.primary};
    z-index: 100;
    border: 2px solid ${(props) => props.theme.input.borderColor.tertiary};
`;

const CollateralOption = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 7px;
    border-radius: 8px;
    cursor: pointer;
    border: 2px solid ${(props) => props.theme.background.quaternary};
    &:hover {
        background: rgb(80 183 215);
    }
`;

const DetailedCollateralOption = styled(FlexDivSpaceBetween)`
    padding: 5px 15px;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
        background: rgb(95, 97, 128, 0.5);
    }
`;

const Icon = styled.i`
    font-size: 25px;
    line-height: 100%;
    margin-right: 10px;
    color: ${(props) => props.theme.input.textColor.primary};
`;

export default CollateralSelector;
