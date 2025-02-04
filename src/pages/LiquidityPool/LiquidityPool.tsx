import React, { useEffect, useMemo, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import {
    Container,
    Title,
    ButtonContainer,
    Wrapper,
    ToggleContainer,
    LiquidityPoolFilledGraphicContainer,
    LiquidityPoolFilledGraphicPercentage,
    LiquidityPoolFilledText,
    RoundInfoContainer,
    RoundInfo,
    ContentInfo,
    BoldContent,
    WarningContentInfo,
    ExternalButton,
    LoaderContainer,
    RoundEndContainer,
    RoundEndLabel,
    RoundEnd,
    ContentContainer,
    MainContainer,
    LiquidityPoolInfoContainer,
    LiquidityPoolInfoGraphic,
    LiquidityPoolInfoLabel,
    LiquidityPoolInfo,
    LiquidityPoolInfoTitle,
    ContentInfoContainer,
    CopyContainer,
    Description,
    GetStakeThalesIcon,
    TipLink,
    SliderContainer,
    SliderRange,
    StyledSlider,
    RadioButtonContainer,
    MainContentContainer,
    defaultButtonProps,
} from './styled-components';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/rootReducer';
import { getIsWalletConnected, getNetworkId, getWalletAddress } from 'redux/modules/wallet';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { LiquidityPoolPnlType, LiquidityPoolTab } from 'enums/liquidityPool';
import NumericInput from 'components/fields/NumericInput';
import { getIsAppReady } from 'redux/modules/app';
import { UserLiquidityPoolData, LiquidityPoolData } from 'types/liquidityPool';
import { formatCurrencyWithSign, formatPercentage } from 'utils/formatters/number';
import { USD_SIGN } from 'constants/currency';
import TimeRemaining from 'components/TimeRemaining';
import networkConnector from 'utils/networkConnector';
import { toast } from 'react-toastify';
import { getErrorToastOptions, getSuccessToastOptions } from 'config/toast';
import ApprovalModal from 'components/ApprovalModal';
import { checkAllowance } from 'utils/network';
import { BigNumber, ethers } from 'ethers';
import useSUSDWalletBalance from 'queries/wallet/usesUSDWalletBalance';
import SimpleLoader from 'components/SimpleLoader';
import Transactions from './Transactions';
import PnL from './PnL';
import Toggle from 'components/Toggle/Toggle';
import Tooltip from 'components/Tooltip';
import useLiquidityPoolDataQuery from 'queries/liquidityPool/useLiquidityPoolDataQuery';
import useLiquidityPoolUserDataQuery from 'queries/liquidityPool/useLiquidityPoolUserDataQuery';
import { LINKS } from 'constants/links';
import MaxAllowanceTooltip from './components/MaxAllowanceTooltip';
import { refetchLiquidityPoolData } from 'utils/queryConnector';
import { FlexDivRow } from 'styles/common';
import RadioButton from 'components/fields/RadioButton/RadioButton';
import Return from './Return';
import { history } from 'utils/routes';
import useParlayLiquidityPoolUserDataQuery from 'queries/liquidityPool/useParlayLiquidityPoolUserDataQuery';
import useParlayLiquidityPoolDataQuery from 'queries/liquidityPool/useParlayLiquidityPoolDataQuery';
import Button from 'components/Button';
import { ThemeInterface } from 'types/ui';
import { useTheme } from 'styled-components';
import { Network } from 'enums/network';
import { delay } from 'utils/timer';
import { getDefaultCollateral } from 'utils/collaterals';
import { coinParser } from 'utils/formatters/ethers';
import { PLAUSIBLE, PLAUSIBLE_KEYS } from 'constants/analytics';

const LiquidityPool: React.FC = () => {
    const { t } = useTranslation();
    const theme: ThemeInterface = useTheme();
    const networkId = useSelector((state: RootState) => getNetworkId(state));
    const isAppReady = useSelector((state: RootState) => getIsAppReady(state));
    const isWalletConnected = useSelector((state: RootState) => getIsWalletConnected(state));
    const walletAddress = useSelector((state: RootState) => getWalletAddress(state)) || '';
    const [amount, setAmount] = useState<number | string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [hasAllowance, setAllowance] = useState<boolean>(false);
    const [isAllowing, setIsAllowing] = useState<boolean>(false);
    const [openApprovalModal, setOpenApprovalModal] = useState<boolean>(false);
    const [selectedTab, setSelectedTab] = useState<LiquidityPoolTab>(LiquidityPoolTab.DEPOSIT);
    const [paymentTokenBalance, setPaymentTokenBalance] = useState<number | string>('');
    const [lastValidLiquidityPoolData, setLastValidLiquidityPoolData] = useState<LiquidityPoolData | undefined>(
        undefined
    );
    const [lastValidUserLiquidityPoolData, setLastValidUserLiquidityPoolData] = useState<
        UserLiquidityPoolData | undefined
    >(undefined);
    const [withdrawAll, setWithdrawAll] = useState<boolean>(true);
    const [withdrawalPercentage, setWithdrawalPercentage] = useState<number | string>(10);
    const [isWithdrawalPercentageValid, setIsWithdrawalPercentageValid] = useState<boolean>(true);
    const [withdrawalAmount, setWithdrawalAmount] = useState<number>(0);

    const [isParlayLP, setIsParlayLP] = useState<boolean>(false);

    const searchQuery = new URLSearchParams(location.search);

    useEffect(() => {
        if (searchQuery.get('pool-type') == 'parlay') {
            setIsParlayLP(true);
        } else if (searchQuery.get('pool-type') == 'single') {
            setIsParlayLP(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const collateral = getDefaultCollateral(networkId);

    const { openConnectModal } = useConnectModal();

    const paymentTokenBalanceQuery = useSUSDWalletBalance(walletAddress, networkId, {
        enabled: isAppReady && isWalletConnected,
    });

    const liquidityPoolDataQuery = useLiquidityPoolDataQuery(networkId, {
        enabled: isAppReady && !isParlayLP,
    });

    const parlayLiquidityPoolDataQuery = useParlayLiquidityPoolDataQuery(networkId, {
        enabled: isAppReady && isParlayLP,
    });

    const userLiquidityPoolDataQuery = useLiquidityPoolUserDataQuery(walletAddress, networkId, {
        enabled: isAppReady && isWalletConnected && !isParlayLP,
    });

    const userParlayLiquidityPoolDataQuery = useParlayLiquidityPoolUserDataQuery(walletAddress, networkId, {
        enabled: isAppReady && isWalletConnected && isParlayLP,
    });

    useEffect(() => {
        if (paymentTokenBalanceQuery.isSuccess && paymentTokenBalanceQuery.data !== undefined) {
            setPaymentTokenBalance(Number(paymentTokenBalanceQuery.data));
        }
    }, [paymentTokenBalanceQuery.isSuccess, paymentTokenBalanceQuery.data]);

    useEffect(() => {
        if (liquidityPoolDataQuery.isSuccess && liquidityPoolDataQuery.data && !isParlayLP) {
            setLastValidLiquidityPoolData(liquidityPoolDataQuery.data);
        }
        if (parlayLiquidityPoolDataQuery.isSuccess && parlayLiquidityPoolDataQuery.data && isParlayLP) {
            setLastValidLiquidityPoolData(parlayLiquidityPoolDataQuery.data);
        }
    }, [
        liquidityPoolDataQuery.isSuccess,
        liquidityPoolDataQuery.data,
        isParlayLP,
        parlayLiquidityPoolDataQuery.isSuccess,
        parlayLiquidityPoolDataQuery.data,
    ]);

    useEffect(() => {
        if (userLiquidityPoolDataQuery.isSuccess && userLiquidityPoolDataQuery.data && !isParlayLP) {
            setLastValidUserLiquidityPoolData(userLiquidityPoolDataQuery.data);
        }

        if (userParlayLiquidityPoolDataQuery.isSuccess && userParlayLiquidityPoolDataQuery.data && isParlayLP) {
            setLastValidUserLiquidityPoolData(userParlayLiquidityPoolDataQuery.data);
        }
    }, [
        userLiquidityPoolDataQuery.isSuccess,
        userLiquidityPoolDataQuery.data,
        isParlayLP,
        userParlayLiquidityPoolDataQuery.isSuccess,
        userParlayLiquidityPoolDataQuery.data,
    ]);

    useEffect(() => {
        const { signer, sUSDContract, liquidityPoolContract, parlayAMMLiquidityPoolContract } = networkConnector;

        const lpContract = isParlayLP ? parlayAMMLiquidityPoolContract : liquidityPoolContract;

        if (signer && sUSDContract && lpContract) {
            const sUSDContractWithSigner = sUSDContract.connect(signer);
            const getAllowance = async () => {
                try {
                    const parsedAmount = coinParser(Number(amount).toString(), networkId);
                    const allowance = await checkAllowance(
                        parsedAmount,
                        sUSDContractWithSigner,
                        walletAddress,
                        lpContract.address
                    );
                    setAllowance(allowance);
                } catch (e) {
                    console.log(e);
                }
            };
            if (isWalletConnected) {
                getAllowance();
            }
        }
    }, [walletAddress, isWalletConnected, hasAllowance, amount, isAllowing, networkId, isParlayLP]);

    const liquidityPoolData: LiquidityPoolData | undefined = useMemo(() => {
        if (liquidityPoolDataQuery.isSuccess && liquidityPoolDataQuery.data && !isParlayLP) {
            return liquidityPoolDataQuery.data;
        }
        if (parlayLiquidityPoolDataQuery.isSuccess && parlayLiquidityPoolDataQuery.data && isParlayLP) {
            return parlayLiquidityPoolDataQuery.data;
        }
        return lastValidLiquidityPoolData;
    }, [
        liquidityPoolDataQuery.isSuccess,
        liquidityPoolDataQuery.data,
        isParlayLP,
        parlayLiquidityPoolDataQuery.isSuccess,
        parlayLiquidityPoolDataQuery.data,
        lastValidLiquidityPoolData,
    ]);

    const userLiquidityPoolData: UserLiquidityPoolData | undefined = useMemo(() => {
        if (userLiquidityPoolDataQuery.isSuccess && userLiquidityPoolDataQuery.data && !isParlayLP) {
            return userLiquidityPoolDataQuery.data;
        }
        if (userParlayLiquidityPoolDataQuery.isSuccess && userParlayLiquidityPoolDataQuery.data && isParlayLP) {
            return userParlayLiquidityPoolDataQuery.data;
        }
        return lastValidUserLiquidityPoolData;
    }, [
        userLiquidityPoolDataQuery.isSuccess,
        userLiquidityPoolDataQuery.data,
        isParlayLP,
        userParlayLiquidityPoolDataQuery.isSuccess,
        userParlayLiquidityPoolDataQuery.data,
        lastValidUserLiquidityPoolData,
    ]);

    useEffect(
        () =>
            setIsWithdrawalPercentageValid(
                (Number(withdrawalPercentage) <= 90 && Number(withdrawalPercentage) >= 10) || withdrawAll
            ),
        [withdrawalPercentage, withdrawAll]
    );

    useEffect(() => {
        if (userLiquidityPoolData) {
            setWithdrawalAmount(
                withdrawAll
                    ? userLiquidityPoolData.balanceCurrentRound
                    : (userLiquidityPoolData.balanceCurrentRound * Number(withdrawalPercentage)) / 100
            );
        }
    }, [withdrawalPercentage, withdrawAll, userLiquidityPoolData]);

    const isAmountEntered = Number(amount) > 0;
    const invalidAmount =
        liquidityPoolData &&
        Number(liquidityPoolData.minDepositAmount) > Number(amount) &&
        userLiquidityPoolData &&
        !userLiquidityPoolData.hasDepositForCurrentRound &&
        !userLiquidityPoolData.hasDepositForNextRound &&
        isAmountEntered;
    const insufficientBalance =
        (Number(paymentTokenBalance) < Number(amount) || Number(paymentTokenBalance) === 0) && isWalletConnected;

    const liquidityPoolPaused = liquidityPoolData && liquidityPoolData.paused;

    const exceededLiquidityPoolCap =
        liquidityPoolData && liquidityPoolData.availableAllocationNextRound < Number(amount);
    const exceededMaxAllowance = userLiquidityPoolData && userLiquidityPoolData.availableToDeposit < Number(amount);
    const isMaximumAmountOfUsersReached =
        liquidityPoolData &&
        liquidityPoolData.usersCurrentlyInLiquidityPool === liquidityPoolData.maxAllowedUsers &&
        userLiquidityPoolData &&
        !userLiquidityPoolData.hasDepositForCurrentRound &&
        !userLiquidityPoolData.hasDepositForNextRound;
    const isLiquidityPoolCapReached = liquidityPoolData && liquidityPoolData.allocationNextRoundPercentage >= 100;

    const isWithdrawalRequested = userLiquidityPoolData && userLiquidityPoolData.isWithdrawalRequested;
    const nothingToWithdraw = userLiquidityPoolData && userLiquidityPoolData.balanceCurrentRound === 0;

    const isRequestWithdrawalButtonDisabled =
        !isWalletConnected ||
        isSubmitting ||
        nothingToWithdraw ||
        (userLiquidityPoolData && userLiquidityPoolData.hasDepositForNextRound) ||
        liquidityPoolPaused;

    const isPartialWithdrawalDisabled = isRequestWithdrawalButtonDisabled || withdrawAll;

    const isDepositButtonDisabled =
        !isWalletConnected ||
        !isAmountEntered ||
        insufficientBalance ||
        isSubmitting ||
        isWithdrawalRequested ||
        exceededLiquidityPoolCap ||
        exceededMaxAllowance ||
        isMaximumAmountOfUsersReached ||
        invalidAmount ||
        liquidityPoolPaused ||
        isLiquidityPoolCapReached;

    const isDepositAmountInputDisabled =
        isSubmitting ||
        isWithdrawalRequested ||
        isMaximumAmountOfUsersReached ||
        liquidityPoolPaused ||
        isLiquidityPoolCapReached;

    const handleAllowance = async (approveAmount: BigNumber) => {
        const { signer, sUSDContract, liquidityPoolContract, parlayAMMLiquidityPoolContract } = networkConnector;

        const lpContract = isParlayLP ? parlayAMMLiquidityPoolContract : liquidityPoolContract;

        if (signer && sUSDContract && lpContract) {
            const id = toast.loading(t('market.toast-message.transaction-pending'));
            setIsAllowing(true);

            try {
                const sUSDContractWithSigner = sUSDContract.connect(signer);

                const tx = (await sUSDContractWithSigner.approve(
                    lpContract.address,
                    approveAmount
                )) as ethers.ContractTransaction;
                setOpenApprovalModal(false);
                const txResult = await tx.wait();

                if (txResult && txResult.transactionHash) {
                    toast.update(
                        id,
                        getSuccessToastOptions(t('market.toast-message.approve-success', { token: collateral }))
                    );
                    setIsAllowing(false);
                }
            } catch (e) {
                console.log(e);
                toast.update(id, getErrorToastOptions(t('common.errors.unknown-error-try-again')));
                setIsAllowing(false);
            }
        }
    };

    const handleDeposit = async () => {
        const { signer, liquidityPoolContract, parlayAMMLiquidityPoolContract } = networkConnector;

        const lpContract = isParlayLP ? parlayAMMLiquidityPoolContract : liquidityPoolContract;

        if (signer && lpContract) {
            const id = toast.loading(t('market.toast-message.transaction-pending'));
            setIsSubmitting(true);
            try {
                const liquidityPoolContractWithSigner = lpContract.connect(signer);
                const parsedAmount = coinParser(Number(amount).toString(), networkId);

                const tx = await liquidityPoolContractWithSigner.deposit(parsedAmount);
                const txResult = await tx.wait();

                if (txResult && txResult.events) {
                    PLAUSIBLE.trackEvent(PLAUSIBLE_KEYS.depositLp);
                    toast.update(id, getSuccessToastOptions(t('liquidity-pool.button.deposit-confirmation-message')));
                    setAmount('');
                    setIsSubmitting(false);
                    refetchLiquidityPoolData(walletAddress, networkId, 'single');
                }
            } catch (e) {
                console.log(e);
                toast.update(id, getErrorToastOptions(t('common.errors.unknown-error-try-again')));
                setIsSubmitting(false);
            }
        }
    };

    const handleWithdrawalRequest = async () => {
        const { signer, liquidityPoolContract, parlayAMMLiquidityPoolContract } = networkConnector;

        const lpContract = isParlayLP ? parlayAMMLiquidityPoolContract : liquidityPoolContract;

        if (signer && lpContract) {
            const id = toast.loading(t('market.toast-message.transaction-pending'));
            setIsSubmitting(true);
            try {
                const liquidityPoolContractWithSigner = lpContract.connect(signer);
                const parsedPercentage = ethers.utils.parseEther((Number(withdrawalPercentage) / 100).toString());

                const tx = withdrawAll
                    ? await liquidityPoolContractWithSigner.withdrawalRequest()
                    : await liquidityPoolContractWithSigner.partialWithdrawalRequest(parsedPercentage);
                const txResult = await tx.wait();

                if (txResult && txResult.events) {
                    toast.update(
                        id,
                        getSuccessToastOptions(t('liquidity-pool.button.request-withdrawal-confirmation-message'))
                    );
                    setAmount('');
                    setIsSubmitting(false);
                    refetchLiquidityPoolData(walletAddress, networkId, isParlayLP ? 'parlay' : 'single');
                }
            } catch (e) {
                console.log(e);
                toast.update(id, getErrorToastOptions(t('common.errors.unknown-error-try-again')));
                setIsSubmitting(false);
            }
        }
    };

    const closeRound = async () => {
        const id = toast.loading(t('market.toast-message.transaction-pending'));
        setIsSubmitting(true);
        try {
            const { signer, liquidityPoolContract, parlayAMMLiquidityPoolContract } = networkConnector;

            const lpContract = isParlayLP ? parlayAMMLiquidityPoolContract : liquidityPoolContract;

            if (signer && lpContract) {
                const lpContractWithSigner = lpContract.connect(signer);

                const canCloseCurrentRound = await lpContractWithSigner?.canCloseCurrentRound();
                const roundClosingPrepared = await lpContractWithSigner?.roundClosingPrepared();

                let getUsersCountInCurrentRound = await lpContractWithSigner?.getUsersCountInCurrentRound();
                let usersProcessedInRound = await lpContractWithSigner?.usersProcessedInRound();
                if (canCloseCurrentRound) {
                    try {
                        if (!roundClosingPrepared) {
                            const tx = await lpContractWithSigner.prepareRoundClosing({
                                type: 2,
                            });
                            await tx.wait().then(() => {
                                console.log('prepareRoundClosing closed');
                            });
                            await delay(1000 * 2);
                        }

                        while (usersProcessedInRound.toString() < getUsersCountInCurrentRound.toString()) {
                            const tx = await lpContractWithSigner.processRoundClosingBatch(100, {
                                type: 2,
                            });
                            await tx.wait().then(() => {
                                console.log('Round closed');
                            });
                            await delay(1000 * 2);
                            getUsersCountInCurrentRound = await lpContractWithSigner.getUsersCountInCurrentRound();
                            usersProcessedInRound = await lpContractWithSigner.usersProcessedInRound();
                        }

                        const tx = await lpContractWithSigner.closeRound({
                            type: 2,
                        });
                        await tx.wait().then(() => {
                            console.log('Round closed');
                        });

                        toast.update(
                            id,
                            getSuccessToastOptions(t('liquidity-pool.button.close-round-confirmation-message'))
                        );
                        setIsSubmitting(false);
                        refetchLiquidityPoolData(walletAddress, networkId, 'parlay');
                        refetchLiquidityPoolData(walletAddress, networkId, 'single');
                    } catch (e) {
                        toast.update(id, getErrorToastOptions(t('common.errors.unknown-error-try-again')));
                        setIsSubmitting(false);
                        console.log(e);
                    }
                }
            }
        } catch (e) {
            console.log('E ', e);
            toast.update(id, getErrorToastOptions(t('common.errors.unknown-error-try-again')));
            setIsSubmitting(false);
        }
    };

    const getDepositSubmitButton = () => {
        if (!isWalletConnected) {
            return (
                <Button {...defaultButtonProps} onClick={() => openConnectModal?.()}>
                    {t('common.wallet.connect-your-wallet')}
                </Button>
            );
        }
        if (insufficientBalance) {
            return (
                <Button {...defaultButtonProps} disabled={true}>
                    {t(`common.errors.insufficient-balance`)}
                </Button>
            );
        }
        if (!isAmountEntered) {
            return (
                <Button {...defaultButtonProps} disabled={true}>
                    {t(`common.errors.enter-amount`)}
                </Button>
            );
        }
        if (!hasAllowance) {
            return (
                <Button {...defaultButtonProps} disabled={isAllowing} onClick={() => setOpenApprovalModal(true)}>
                    {!isAllowing
                        ? t('common.enable-wallet-access.approve-label', { currencyKey: collateral })
                        : t('common.enable-wallet-access.approve-progress-label', {
                              currencyKey: collateral,
                          })}
                </Button>
            );
        }
        return (
            <Button {...defaultButtonProps} disabled={isDepositButtonDisabled} onClick={handleDeposit}>
                {!isSubmitting
                    ? t('liquidity-pool.button.deposit-label')
                    : t('liquidity-pool.button.deposit-progress-label')}
            </Button>
        );
    };

    const getWithdrawButton = () => {
        if (!isWalletConnected) {
            return <Button onClick={() => openConnectModal?.()}>{t('common.wallet.connect-your-wallet')}</Button>;
        }
        return (
            <Button
                disabled={isRequestWithdrawalButtonDisabled || !isWithdrawalPercentageValid}
                onClick={handleWithdrawalRequest}
            >
                {t('liquidity-pool.button.request-withdrawal-label')}
            </Button>
        );
    };

    const infoGraphicPercentages = getInfoGraphicPercentages(
        userLiquidityPoolData ? userLiquidityPoolData.balanceCurrentRound : 0,
        userLiquidityPoolData ? userLiquidityPoolData.balanceTotal : 0,
        userLiquidityPoolData ? userLiquidityPoolData.maxDeposit : 0
    );

    const setMaxAmount = () => {
        setAmount(Math.trunc(userLiquidityPoolData ? userLiquidityPoolData.availableToDeposit * 100 : 0) / 100);
    };

    return (
        <Wrapper>
            <ToggleContainer
                data-matomo-category="liquidity-pool"
                data-matomo-action={isParlayLP ? 'switch-to-parlay' : 'switch-to-single'}
            >
                <Toggle
                    label={{
                        firstLabel: t('liquidity-pool.single-lp'),
                        secondLabel: t('liquidity-pool.parlay-lp'),
                        fontSize: '20px',
                        fontWeight: 'bold',
                    }}
                    active={isParlayLP}
                    dotSize="20px"
                    dotBackground={theme.background.secondary}
                    dotBorder={`3px solid ${theme.borderColor.quaternary}`}
                    handleClick={() => {
                        searchQuery.set('pool-type', !isParlayLP ? 'parlay' : 'single');
                        history.push({ search: searchQuery.toString() });
                        setIsParlayLP(!isParlayLP);
                    }}
                    margin={'15px 0px 5px 0px'}
                />
            </ToggleContainer>
            <Title>{t('liquidity-pool.title')}</Title>
            {liquidityPoolData && (
                <Container>
                    <ContentContainer>
                        {liquidityPoolPaused ? (
                            <RoundInfoContainer>
                                <RoundInfo>{t('liquidity-pool.liquidity-pool-paused-message')}</RoundInfo>
                            </RoundInfoContainer>
                        ) : liquidityPoolData.liquidityPoolStarted ? (
                            <>
                                <RoundEndContainer>
                                    <RoundEndLabel>{t('liquidity-pool.round-end-label')}:</RoundEndLabel>
                                    <RoundEnd>
                                        {liquidityPoolData.isRoundEnded ? (
                                            t('liquidity-pool.round-ended-label')
                                        ) : (
                                            <TimeRemaining
                                                end={liquidityPoolData.roundEndTime}
                                                fontSize={20}
                                                showFullCounter
                                            />
                                        )}{' '}
                                        {liquidityPoolData.canCloseCurrentRound && (
                                            <Button
                                                disabled={isSubmitting}
                                                onClick={closeRound}
                                                fontSize="12px"
                                                margin="5px 0 0 0"
                                                height="24px"
                                                backgroundColor={theme.button.background.quaternary}
                                                borderColor={theme.button.borderColor.secondary}
                                            >
                                                {t('liquidity-pool.button.close-round-label')}
                                            </Button>
                                        )}
                                    </RoundEnd>
                                </RoundEndContainer>
                            </>
                        ) : (
                            <RoundInfoContainer>
                                <RoundInfo>{t('liquidity-pool.liquidity-pool-not-started-message')}</RoundInfo>
                            </RoundInfoContainer>
                        )}
                    </ContentContainer>
                    <ContentContainer>
                        <ToggleContainer>
                            <Toggle
                                label={{
                                    firstLabel: t(`liquidity-pool.tabs.${LiquidityPoolTab.DEPOSIT}`),
                                    secondLabel: t(`liquidity-pool.tabs.${LiquidityPoolTab.WITHDRAW}`),
                                    fontSize: '14px',
                                }}
                                active={selectedTab === LiquidityPoolTab.WITHDRAW}
                                dotSize="14px"
                                dotBackground={theme.background.secondary}
                                dotBorder={`3px solid ${theme.borderColor.quaternary}`}
                                handleClick={() => {
                                    setSelectedTab(
                                        selectedTab === LiquidityPoolTab.DEPOSIT
                                            ? LiquidityPoolTab.WITHDRAW
                                            : LiquidityPoolTab.DEPOSIT
                                    );
                                }}
                            />
                        </ToggleContainer>
                        {selectedTab === LiquidityPoolTab.DEPOSIT && (
                            <>
                                {isWithdrawalRequested && (
                                    <WarningContentInfo>
                                        <Trans i18nKey="liquidity-pool.deposit-withdrawal-warning" />
                                    </WarningContentInfo>
                                )}
                                {isLiquidityPoolCapReached && (
                                    <WarningContentInfo>
                                        <Trans i18nKey="liquidity-pool.deposit-liquidity-pool-cap-reached-warning" />
                                    </WarningContentInfo>
                                )}
                                {isMaximumAmountOfUsersReached && (
                                    <WarningContentInfo>
                                        <Trans i18nKey="liquidity-pool.deposit-max-amount-of-users-warning" />
                                    </WarningContentInfo>
                                )}
                                <NumericInput
                                    value={amount}
                                    disabled={isDepositAmountInputDisabled}
                                    onChange={(_, value) => setAmount(value)}
                                    placeholder={t('liquidity-pool.deposit-amount-placeholder')}
                                    currencyLabel={collateral}
                                    onMaxButton={setMaxAmount}
                                    showValidation={
                                        insufficientBalance ||
                                        exceededLiquidityPoolCap ||
                                        exceededMaxAllowance ||
                                        invalidAmount
                                    }
                                    validationMessage={t(
                                        `${
                                            insufficientBalance
                                                ? 'common.errors.insufficient-balance'
                                                : exceededLiquidityPoolCap
                                                ? 'liquidity-pool.deposit-liquidity-pool-cap-error'
                                                : exceededMaxAllowance
                                                ? 'liquidity-pool.deposit-staked-thales-error'
                                                : 'liquidity-pool.deposit-min-amount-error'
                                        }`,
                                        {
                                            amount: formatCurrencyWithSign(
                                                USD_SIGN,
                                                liquidityPoolData.minDepositAmount
                                            ),
                                        }
                                    )}
                                    validationPlacement="bottom"
                                />
                                {getDepositSubmitButton()}
                            </>
                        )}
                        {selectedTab === LiquidityPoolTab.WITHDRAW && (
                            <>
                                {((liquidityPoolData && userLiquidityPoolData && !isWithdrawalRequested) ||
                                    !isWalletConnected) && (
                                    <>
                                        {nothingToWithdraw || !isWalletConnected ? (
                                            <>
                                                <ContentInfo>
                                                    <Trans i18nKey="liquidity-pool.nothing-to-withdraw-label" />
                                                </ContentInfo>
                                                {userLiquidityPoolData && userLiquidityPoolData.hasDepositForNextRound && (
                                                    <ContentInfo>
                                                        <Trans i18nKey="liquidity-pool.first-deposit-withdrawal-message" />
                                                    </ContentInfo>
                                                )}
                                            </>
                                        ) : (
                                            <>
                                                {userLiquidityPoolData && (
                                                    <>
                                                        {userLiquidityPoolData.hasDepositForNextRound ? (
                                                            <WarningContentInfo>
                                                                <Trans i18nKey="liquidity-pool.withdrawal-deposit-warning" />
                                                            </WarningContentInfo>
                                                        ) : (
                                                            <>
                                                                <ContentInfo>
                                                                    <Trans
                                                                        i18nKey="liquidity-pool.available-to-withdraw-label"
                                                                        components={{
                                                                            bold: <BoldContent />,
                                                                        }}
                                                                        values={{
                                                                            amount: formatCurrencyWithSign(
                                                                                USD_SIGN,
                                                                                userLiquidityPoolData.balanceCurrentRound
                                                                            ),
                                                                        }}
                                                                    />
                                                                    <Tooltip
                                                                        overlay={t(
                                                                            `liquidity-pool.estimated-amount-tooltip`
                                                                        )}
                                                                        iconFontSize={14}
                                                                        marginLeft={2}
                                                                    />
                                                                </ContentInfo>
                                                                <ContentInfo>
                                                                    <Trans i18nKey="liquidity-pool.withdrawal-message" />
                                                                </ContentInfo>
                                                                <RadioButtonContainer>
                                                                    <RadioButton
                                                                        checked={withdrawAll}
                                                                        value={'true'}
                                                                        onChange={() => setWithdrawAll(true)}
                                                                        label={t(
                                                                            `liquidity-pool.full-withdrawal-label`
                                                                        )}
                                                                    />
                                                                    <RadioButton
                                                                        checked={!withdrawAll}
                                                                        value={'false'}
                                                                        onChange={() => setWithdrawAll(false)}
                                                                        label={t(
                                                                            `liquidity-pool.partial-withdrawal-label`
                                                                        )}
                                                                    />
                                                                </RadioButtonContainer>
                                                                <NumericInput
                                                                    value={withdrawalPercentage}
                                                                    disabled={isPartialWithdrawalDisabled}
                                                                    onChange={(_, value) =>
                                                                        setWithdrawalPercentage(value)
                                                                    }
                                                                    placeholder={t(
                                                                        'liquidity-pool.percentage-placeholder'
                                                                    )}
                                                                    currencyLabel="%"
                                                                    step="1"
                                                                    showValidation={!isWithdrawalPercentageValid}
                                                                    validationMessage={
                                                                        t(
                                                                            Number(withdrawalPercentage) == 0
                                                                                ? 'common.errors.enter-percentage'
                                                                                : 'common.errors.invalid-percentage-range',
                                                                            { min: 10, max: 90 }
                                                                        ) as string
                                                                    }
                                                                    validationPlacement="bottom"
                                                                />
                                                                <SliderContainer>
                                                                    <StyledSlider
                                                                        value={Number(withdrawalPercentage)}
                                                                        step={1}
                                                                        max={90}
                                                                        min={10}
                                                                        onChange={(_: any, value: any) =>
                                                                            setWithdrawalPercentage(Number(value))
                                                                        }
                                                                        disabled={isPartialWithdrawalDisabled}
                                                                    />
                                                                    <FlexDivRow>
                                                                        <SliderRange
                                                                            className={
                                                                                isPartialWithdrawalDisabled
                                                                                    ? 'disabled'
                                                                                    : ''
                                                                            }
                                                                        >
                                                                            10%
                                                                        </SliderRange>
                                                                        <SliderRange
                                                                            className={
                                                                                isPartialWithdrawalDisabled
                                                                                    ? 'disabled'
                                                                                    : ''
                                                                            }
                                                                        >
                                                                            90%
                                                                        </SliderRange>
                                                                    </FlexDivRow>
                                                                </SliderContainer>
                                                                <ContentInfo>
                                                                    <Trans
                                                                        i18nKey="liquidity-pool.withdrawal-amount-label"
                                                                        components={{
                                                                            bold: <BoldContent />,
                                                                        }}
                                                                        values={{
                                                                            amount: formatCurrencyWithSign(
                                                                                USD_SIGN,
                                                                                withdrawalAmount
                                                                            ),
                                                                        }}
                                                                    />
                                                                    <Tooltip
                                                                        overlay={t(
                                                                            `liquidity-pool.estimated-amount-tooltip`
                                                                        )}
                                                                        iconFontSize={14}
                                                                        marginLeft={2}
                                                                    />
                                                                </ContentInfo>
                                                            </>
                                                        )}
                                                    </>
                                                )}
                                            </>
                                        )}
                                        {getWithdrawButton()}
                                    </>
                                )}
                                {liquidityPoolData &&
                                    userLiquidityPoolData &&
                                    userLiquidityPoolData.isWithdrawalRequested && (
                                        <>
                                            <ContentInfo>
                                                <Trans
                                                    i18nKey={`liquidity-pool.${
                                                        userLiquidityPoolData.isPartialWithdrawalRequested
                                                            ? 'partial'
                                                            : 'full'
                                                    }-withdrawal-requested-message`}
                                                    components={{
                                                        bold: <BoldContent />,
                                                        tooltip: (
                                                            <Tooltip
                                                                overlay={t(`liquidity-pool.estimated-amount-tooltip`)}
                                                                iconFontSize={14}
                                                                marginLeft={2}
                                                            />
                                                        ),
                                                    }}
                                                    values={{
                                                        amount: formatCurrencyWithSign(
                                                            USD_SIGN,
                                                            userLiquidityPoolData.withdrawalAmount
                                                        ),
                                                        percentage: formatPercentage(
                                                            userLiquidityPoolData.withdrawalShare
                                                        ),
                                                    }}
                                                />
                                            </ContentInfo>
                                            <ContentInfo>
                                                <Trans i18nKey="liquidity-pool.withdrawal-requested-message" />
                                            </ContentInfo>
                                        </>
                                    )}
                            </>
                        )}
                    </ContentContainer>
                    <ContentContainer>
                        <ButtonContainer>
                            <ExternalButton target="_blank" rel="noreferrer" href={getUniswapLink(networkId)}>
                                {t('liquidity-pool.button.get-thales-label')}
                                <GetStakeThalesIcon className={`icon icon--get-thales`} />
                            </ExternalButton>
                            <ExternalButton target="_blank" rel="noreferrer" href={LINKS.ThalesStaking}>
                                {t('liquidity-pool.button.stake-thales-label')}
                                <GetStakeThalesIcon className={`icon icon--stake-thales`} />
                            </ExternalButton>
                        </ButtonContainer>
                    </ContentContainer>
                </Container>
            )}
            {liquidityPoolData && (
                <CopyContainer>
                    <Description>
                        <Trans
                            i18nKey={isParlayLP ? 'liquidity-pool.description-parlay' : 'liquidity-pool.description'}
                            components={{
                                h1: <h1 />,
                                p: <p />,
                                tipLink: <TipLink href={isParlayLP ? LINKS.ThalesTip142 : LINKS.ThalesTip99} />,
                            }}
                            values={{
                                thalesStakedAmount: 1 / liquidityPoolData.stakedThalesMultiplier,
                                currency: collateral,
                            }}
                        />
                    </Description>
                    <Description>
                        <Trans
                            i18nKey={`liquidity-pool.variables`}
                            components={{
                                h1: <h1 />,
                                p: <p />,
                                ul: <ul />,
                                li: <li />,
                            }}
                            values={{
                                maxAllowedDeposit: formatCurrencyWithSign(
                                    USD_SIGN,
                                    liquidityPoolData.maxAllowedDeposit,
                                    0
                                ),
                                maxAllowedUsers: liquidityPoolData.maxAllowedUsers,
                                minDepositAmount: formatCurrencyWithSign(
                                    USD_SIGN,
                                    liquidityPoolData.minDepositAmount,
                                    0
                                ),
                                roundLength: liquidityPoolData.roundLength,
                            }}
                        />
                    </Description>
                </CopyContainer>
            )}
            <MainContainer>
                {!liquidityPoolData ? (
                    <LoaderContainer>
                        <SimpleLoader />
                    </LoaderContainer>
                ) : (
                    <>
                        <MainContentContainer>
                            {liquidityPoolData && (
                                <>
                                    <LiquidityPoolInfoTitle>
                                        {t('liquidity-pool.total-info-label')}
                                    </LiquidityPoolInfoTitle>
                                    <span>
                                        <Trans
                                            i18nKey="liquidity-pool.users-in-liquidity-pool-label"
                                            values={{
                                                number: liquidityPoolData.usersCurrentlyInLiquidityPool,
                                                max: liquidityPoolData.maxAllowedUsers,
                                            }}
                                        />
                                    </span>
                                    <LiquidityPoolFilledGraphicContainer>
                                        <LiquidityPoolFilledGraphicPercentage
                                            width={liquidityPoolData.allocationNextRoundPercentage}
                                        ></LiquidityPoolFilledGraphicPercentage>
                                    </LiquidityPoolFilledGraphicContainer>
                                    <LiquidityPoolFilledText>
                                        <span>{`${formatCurrencyWithSign(
                                            USD_SIGN,
                                            liquidityPoolData.allocationNextRound
                                        )} / ${formatCurrencyWithSign(
                                            USD_SIGN,
                                            liquidityPoolData.maxAllowedDeposit
                                        )}`}</span>
                                        <span>
                                            <Trans
                                                i18nKey="liquidity-pool.your-share-label"
                                                values={{
                                                    percentage: formatPercentage(
                                                        (userLiquidityPoolData
                                                            ? userLiquidityPoolData.balanceTotal
                                                            : 0) / liquidityPoolData.allocationNextRound
                                                    ),
                                                }}
                                            />
                                        </span>
                                    </LiquidityPoolFilledText>
                                </>
                            )}
                            <ContentInfoContainer>
                                <LiquidityPoolInfoTitle>{t('liquidity-pool.your-info-label')}</LiquidityPoolInfoTitle>
                                {liquidityPoolData.liquidityPoolStarted && (
                                    <LiquidityPoolInfoContainer>
                                        <LiquidityPoolInfoLabel>
                                            {t('liquidity-pool.current-balance-label')}:
                                        </LiquidityPoolInfoLabel>
                                        <LiquidityPoolInfoGraphic
                                            background={'linear-gradient(90.21deg, #A40A95 0.18%, #FC6679 99.82%)'}
                                            widthPercentage={infoGraphicPercentages.currentBalancePercenatage}
                                        />
                                        <LiquidityPoolInfo>
                                            {formatCurrencyWithSign(
                                                USD_SIGN,
                                                userLiquidityPoolData ? userLiquidityPoolData.balanceCurrentRound : 0
                                            )}
                                        </LiquidityPoolInfo>
                                    </LiquidityPoolInfoContainer>
                                )}
                                <LiquidityPoolInfoContainer>
                                    <LiquidityPoolInfoLabel>
                                        {t('liquidity-pool.next-round-balance-label')}:
                                    </LiquidityPoolInfoLabel>
                                    <LiquidityPoolInfoGraphic
                                        background={'linear-gradient(90deg, #2A3895 0%, #893CE2 100%)'}
                                        widthPercentage={infoGraphicPercentages.nextRoundBalancePercenatage}
                                    />
                                    <LiquidityPoolInfo>
                                        {formatCurrencyWithSign(
                                            USD_SIGN,
                                            userLiquidityPoolData ? userLiquidityPoolData.balanceTotal : 0
                                        )}
                                        {userLiquidityPoolData &&
                                            userLiquidityPoolData.balanceCurrentRound > 0 &&
                                            userLiquidityPoolData.balanceTotal > 0 && (
                                                <Tooltip
                                                    overlay={t(`liquidity-pool.estimated-amount-tooltip`)}
                                                    iconFontSize={14}
                                                    marginLeft={2}
                                                />
                                            )}
                                    </LiquidityPoolInfo>
                                </LiquidityPoolInfoContainer>
                                <LiquidityPoolInfoContainer>
                                    <LiquidityPoolInfoLabel>
                                        {t('liquidity-pool.max-allowance-label')}:
                                    </LiquidityPoolInfoLabel>
                                    <LiquidityPoolInfoGraphic
                                        background={'linear-gradient(270deg, #3AECD3 0%, #017F9C 100%)'}
                                        widthPercentage={infoGraphicPercentages.maxAllowancePercenatage}
                                    />
                                    <LiquidityPoolInfo>
                                        {formatCurrencyWithSign(
                                            USD_SIGN,
                                            userLiquidityPoolData ? userLiquidityPoolData.maxDeposit : 0
                                        )}
                                        <Tooltip
                                            overlay={
                                                <MaxAllowanceTooltip
                                                    stakedThales={
                                                        userLiquidityPoolData ? userLiquidityPoolData.stakedThales : 0
                                                    }
                                                    stakedThalesMultiplier={liquidityPoolData.stakedThalesMultiplier}
                                                />
                                            }
                                            overlayClassName="lp-max-allowance"
                                            iconFontSize={14}
                                            marginLeft={2}
                                        />
                                    </LiquidityPoolInfo>
                                </LiquidityPoolInfoContainer>
                                {isWithdrawalRequested && (
                                    <WarningContentInfo>
                                        <Trans
                                            i18nKey={`liquidity-pool.${
                                                userLiquidityPoolData.isPartialWithdrawalRequested ? 'partial' : 'full'
                                            }-withdrawal-request-label`}
                                            components={{
                                                tooltip: (
                                                    <Tooltip
                                                        overlay={t(`liquidity-pool.estimated-amount-tooltip`)}
                                                        iconFontSize={14}
                                                        marginLeft={2}
                                                    />
                                                ),
                                            }}
                                            values={{
                                                amount: formatCurrencyWithSign(
                                                    USD_SIGN,
                                                    userLiquidityPoolData ? userLiquidityPoolData.withdrawalAmount : 0
                                                ),
                                                percentage: formatPercentage(
                                                    userLiquidityPoolData ? userLiquidityPoolData.withdrawalShare : 0
                                                ),
                                            }}
                                        />
                                    </WarningContentInfo>
                                )}
                            </ContentInfoContainer>
                            <Return liquidityPoolType={isParlayLP ? 'parlay' : 'single'} />
                        </MainContentContainer>
                        <MainContentContainer>
                            {liquidityPoolData && (
                                <PnL
                                    lifetimePnl={liquidityPoolData.lifetimePnl}
                                    type={LiquidityPoolPnlType.PNL_PER_ROUND}
                                    liquidityPoolType={isParlayLP ? 'parlay' : 'single'}
                                />
                            )}
                        </MainContentContainer>
                        <MainContentContainer>
                            {liquidityPoolData && (
                                <PnL
                                    lifetimePnl={liquidityPoolData.lifetimePnl}
                                    type={LiquidityPoolPnlType.CUMULATIVE_PNL}
                                    liquidityPoolType={isParlayLP ? 'parlay' : 'single'}
                                />
                            )}
                        </MainContentContainer>
                    </>
                )}
            </MainContainer>
            {liquidityPoolData && (
                <Transactions
                    currentRound={liquidityPoolData.round}
                    liquidityPoolType={isParlayLP ? 'parlay' : 'single'}
                />
            )}
            {openApprovalModal && (
                <ApprovalModal
                    defaultAmount={amount}
                    tokenSymbol={collateral}
                    isAllowing={isAllowing}
                    onSubmit={handleAllowance}
                    onClose={() => setOpenApprovalModal(false)}
                />
            )}
        </Wrapper>
    );
};

const getInfoGraphicPercentages = (currentBalance: number, nextRoundBalance: number, maxAllowance: number) => {
    let currentBalancePercenatage = 1;
    let nextRoundBalancePercenatage = 1;
    let maxAllowancePercenatage = 1;

    if (maxAllowance > currentBalance && maxAllowance > nextRoundBalance) {
        currentBalancePercenatage = currentBalance / maxAllowance;
        nextRoundBalancePercenatage = nextRoundBalance / maxAllowance;
    } else if (currentBalance > nextRoundBalance) {
        maxAllowancePercenatage = maxAllowance / currentBalance;
        nextRoundBalancePercenatage = nextRoundBalance / currentBalance;
    } else if (nextRoundBalance === 0) {
        currentBalancePercenatage = 0;
        nextRoundBalancePercenatage = 0;
        maxAllowancePercenatage = 0;
    } else {
        maxAllowancePercenatage = maxAllowance / nextRoundBalance;
        currentBalancePercenatage = currentBalance / nextRoundBalance;
    }

    return {
        currentBalancePercenatage,
        nextRoundBalancePercenatage,
        maxAllowancePercenatage,
    };
};

const getUniswapLink = (networkId: Network) => {
    if (networkId === Network.ArbitrumOne) return LINKS.UniswapBuyThalesArbitrum;
    if (networkId === Network.Base) return LINKS.UniswapBuyThalesBase;
    return LINKS.UniswapBuyThalesOp;
};

export default LiquidityPool;
