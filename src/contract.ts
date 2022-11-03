import { Address, BigDecimal, BigInt } from "@graphprotocol/graph-ts";
import { RebateClaimed } from "../generated/Contract/Contract";
import { RewardsAssigned } from "../generated/RewardsManager/RewardsManager";
import { ChainlinkOracle } from "../generated/RewardsManager/ChainlinkOracle";
import { Indexer, Token, WeeklyData } from "../generated/schema";
import { constants } from "./utils/graphprotocol-utils";
import { DelegationParametersUpdated } from "../generated/staking/staking";

//Rebate Claimed
export function handleRebateClaimed(event: RebateClaimed): void {
  let _indexer = Indexer.load(event.params.indexer.toHexString());

  let price = GetGRTInUSD(event.block.number);

  if (!_indexer) {
    _indexer = new Indexer(event.params.indexer.toHexString());
    _indexer.totalGRT = constants.BIGINT_ZERO;
    _indexer.costBasis = constants.BIGDECIMAL_ZERO;
    _indexer.totalUSD = constants.BIGDECIMAL_ZERO;
    _indexer.totalGRTNormalized = constants.BIGDECIMAL_ZERO;
    _indexer.indexingRewardsCut = constants.BIGDECIMAL_ZERO;
    _indexer.queryFeeCut = constants.BIGDECIMAL_ZERO;
  }

  // Acquiring CostBasis
  let gross = _indexer.totalGRT.toBigDecimal().times(_indexer.costBasis);
  let newGross = gross.plus(event.params.tokens.toBigDecimal().times(price));

  let _adjustedGRT = _indexer.totalGRT.plus(event.params.tokens);
  if (_adjustedGRT > constants.BIGINT_ZERO) {
    let newCostBasis = newGross.div(_adjustedGRT.toBigDecimal());

    _indexer.costBasis = newCostBasis;
    _indexer.totalGRT = _adjustedGRT;
    _indexer.totalGRTNormalized = _indexer.totalGRT.divDecimal(
      constants.BIGDECIMAL_1E18
    );
  }

  // The timestamp is in seconds - week = 86400 seconds
  let week = event.block.timestamp.toI32() / 604800;

  //Weekly Data
  let _weeklyData = WeeklyData.load(
    event.params.indexer.toHexString() + "-" + week.toString()
  );
  if (!_weeklyData) {
    _weeklyData = new WeeklyData(
      event.params.indexer.toHexString() + "-" + week.toString()
    );
    _weeklyData.week = week;
    _weeklyData.totalGRT = constants.BIGINT_ZERO;
    _weeklyData.totalUSD = constants.BIGDECIMAL_ZERO;
    _weeklyData.costBasis = constants.BIGDECIMAL_ZERO;
    _weeklyData.totalGRTNormalized = constants.BIGDECIMAL_ZERO;
    _weeklyData.indexer = _indexer.id;
  }

  _weeklyData.totalGRT = _weeklyData.totalGRT.plus(event.params.tokens);
  _weeklyData.totalGRTNormalized = _weeklyData.totalGRT.divDecimal(
    constants.BIGDECIMAL_1E18
  );
  _weeklyData.costBasis = price;
  _weeklyData.totalUSD = _weeklyData.totalGRTNormalized.times(price);

  _indexer.save();
  _weeklyData.save();
}

//Rewards Assigned to the Indexer
export function handleRewardsAssigned(event: RewardsAssigned): void {
  let _indexer = Indexer.load(event.params.indexer.toHexString());

  let price = GetGRTInUSD(event.block.number);

  if (!_indexer) {
    _indexer = new Indexer(event.params.indexer.toHexString());
    _indexer.totalGRT = constants.BIGINT_ZERO;
    _indexer.costBasis = constants.BIGDECIMAL_ZERO;
    _indexer.totalUSD = constants.BIGDECIMAL_ZERO;
    _indexer.totalGRTNormalized = constants.BIGDECIMAL_ZERO;
    _indexer.indexingRewardsCut = constants.BIGDECIMAL_ZERO;
    _indexer.queryFeeCut = constants.BIGDECIMAL_ZERO;
  }

  // Acquiring CostBasis
  let gross = _indexer.totalGRT.toBigDecimal().times(_indexer.costBasis);

  //Indexer portion of rewards
  let adjustedRewards = _indexer.indexingRewardsCut.times(
    event.params.amount.toBigDecimal()
  );

  adjustedRewards = adjustedRewards.truncate(0);
  let adjustedRewardString = adjustedRewards.toString();
  let indexerNewRewards = BigInt.fromString(adjustedRewardString);
  // Indexer previous total plus their portion of new rewards
  let _adjustedGRT = _indexer.totalGRT.plus(indexerNewRewards);
  let newGross = gross.plus(indexerNewRewards.toBigDecimal().times(price));

  if (_adjustedGRT > constants.BIGINT_ZERO) {
    let newCostBasis = newGross.div(_adjustedGRT.toBigDecimal());

    _indexer.costBasis = newCostBasis;
    _indexer.totalUSD = _indexer.totalGRTNormalized.times(price);
    _indexer.totalGRT = _adjustedGRT;
    _indexer.totalGRTNormalized = _indexer.totalGRT.divDecimal(
      constants.BIGDECIMAL_1E18
    );
  }

  // The timestamp is in seconds - week = 86400 seconds
  let week = event.block.timestamp.toI32() / 604800;

  //Weekly Data
  let _weeklyData = WeeklyData.load(
    event.params.indexer.toHexString() + "-" + week.toString()
  );
  if (!_weeklyData) {
    _weeklyData = new WeeklyData(
      event.params.indexer.toHexString() + "-" + week.toString()
    );
    _weeklyData.week = week;
    _weeklyData.totalGRT = constants.BIGINT_ZERO;
    _weeklyData.totalUSD = constants.BIGDECIMAL_ZERO;
    _weeklyData.costBasis = constants.BIGDECIMAL_ZERO;
    _weeklyData.totalGRTNormalized = constants.BIGDECIMAL_ZERO;
    _weeklyData.indexer = _indexer.id;
  }

  _weeklyData.totalGRT = _weeklyData.totalGRT.plus(indexerNewRewards);
  _weeklyData.totalGRTNormalized = _weeklyData.totalGRT.divDecimal(
    constants.BIGDECIMAL_1E18
  );
  _weeklyData.costBasis = price;
  _weeklyData.totalUSD = _weeklyData.totalGRTNormalized.times(price);

  _indexer.save();
  _weeklyData.save();
}

export function handleDelegationParametersUpdated(
  event: DelegationParametersUpdated
): void {
  let _indexer = Indexer.load(event.params.indexer.toHexString());

  if (!_indexer) {
    _indexer = new Indexer(event.params.indexer.toHexString());
    _indexer.totalGRT = constants.BIGINT_ZERO;
    _indexer.costBasis = constants.BIGDECIMAL_ZERO;
    _indexer.totalUSD = constants.BIGDECIMAL_ZERO;
    _indexer.totalGRTNormalized = constants.BIGDECIMAL_ZERO;
    _indexer.indexingRewardsCut = constants.BIGDECIMAL_ZERO;
    _indexer.queryFeeCut = constants.BIGDECIMAL_ZERO;
  }

  let newIRCut = event.params.indexingRewardCut.toBigDecimal();
  newIRCut = newIRCut.div(constants.BIGDECIMAL_1M);

  let newQFCut = event.params.queryFeeCut.toBigDecimal();
  newQFCut = newQFCut.div(constants.BIGDECIMAL_1M);

  _indexer.indexingRewardsCut = newIRCut;
  _indexer.queryFeeCut = newQFCut;

  _indexer.save();
}

// Getting GRT in USDC
export function GetGRTInUSD(_block: BigInt): BigDecimal {
  let price = constants.BIGDECIMAL_ZERO;
  let GRT = GetGRT();

  if (GRT.lastUpdateBlock < _block) {
    //Bind the Eth to USDC Contract
    let ethOracle = ChainlinkOracle.bind(
      Address.fromString("0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419")
    );

    let ethRoundData = ethOracle.try_latestRoundData();
    let ethPriceNative = ethRoundData.reverted
      ? constants.BIGINT_ZERO
      : ethRoundData.value.value1;
    let ethPrice = ethPriceNative.divDecimal(
      BigDecimal.fromString("100000000")
    );

    // Bind the GRT to Eth Contract
    let grtOracle = ChainlinkOracle.bind(
      Address.fromString("0x17D054eCac33D91F7340645341eFB5DE9009F1C1")
    );

    let grtRoundData = grtOracle.try_latestRoundData();
    let grtPriceNative = grtRoundData.reverted
      ? constants.BIGINT_ZERO
      : grtRoundData.value.value1;
    let grtPrice = grtPriceNative.divDecimal(constants.BIGDECIMAL_1E18);

    price = ethPrice.times(grtPrice);
  } else {
    price = GRT.lastPrice;
  }

  GRT.lastPrice = price;
  GRT.lastUpdateBlock = _block;

  GRT.save();

  return price;
}

//Loading in the GRT price data
export function GetGRT(): Token {
  let GRT = Token.load("0xc944E90C64B2c07662A292be6244BDf05Cda44a7");

  if (!GRT) {
    GRT = new Token("0xc944E90C64B2c07662A292be6244BDf05Cda44a7");
    GRT.lastPrice = constants.BIGDECIMAL_ZERO;
    GRT.lastUpdateBlock = constants.BIGINT_ZERO;
  }

  return GRT as Token;
}
