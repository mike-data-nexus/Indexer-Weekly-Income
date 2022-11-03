import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import {
  AllocationClosed,
  AllocationCollected,
  AllocationCreated,
  AssetHolderUpdate,
  ContractSynced,
  DelegationParametersUpdated,
  ParameterUpdated,
  RebateClaimed,
  SetController,
  SetOperator,
  SetRewardsDestination,
  SlasherUpdate,
  StakeDelegated,
  StakeDelegatedLocked,
  StakeDelegatedWithdrawn,
  StakeDeposited,
  StakeLocked,
  StakeSlashed,
  StakeWithdrawn
} from "../generated/staking/staking"

export function createAllocationClosedEvent(
  indexer: Address,
  subgraphDeploymentID: Bytes,
  epoch: BigInt,
  tokens: BigInt,
  allocationID: Address,
  effectiveAllocation: BigInt,
  sender: Address,
  poi: Bytes,
  isPublic: boolean
): AllocationClosed {
  let allocationClosedEvent = changetype<AllocationClosed>(newMockEvent())

  allocationClosedEvent.parameters = new Array()

  allocationClosedEvent.parameters.push(
    new ethereum.EventParam("indexer", ethereum.Value.fromAddress(indexer))
  )
  allocationClosedEvent.parameters.push(
    new ethereum.EventParam(
      "subgraphDeploymentID",
      ethereum.Value.fromFixedBytes(subgraphDeploymentID)
    )
  )
  allocationClosedEvent.parameters.push(
    new ethereum.EventParam("epoch", ethereum.Value.fromUnsignedBigInt(epoch))
  )
  allocationClosedEvent.parameters.push(
    new ethereum.EventParam("tokens", ethereum.Value.fromUnsignedBigInt(tokens))
  )
  allocationClosedEvent.parameters.push(
    new ethereum.EventParam(
      "allocationID",
      ethereum.Value.fromAddress(allocationID)
    )
  )
  allocationClosedEvent.parameters.push(
    new ethereum.EventParam(
      "effectiveAllocation",
      ethereum.Value.fromUnsignedBigInt(effectiveAllocation)
    )
  )
  allocationClosedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  allocationClosedEvent.parameters.push(
    new ethereum.EventParam("poi", ethereum.Value.fromFixedBytes(poi))
  )
  allocationClosedEvent.parameters.push(
    new ethereum.EventParam("isPublic", ethereum.Value.fromBoolean(isPublic))
  )

  return allocationClosedEvent
}

export function createAllocationCollectedEvent(
  indexer: Address,
  subgraphDeploymentID: Bytes,
  epoch: BigInt,
  tokens: BigInt,
  allocationID: Address,
  from: Address,
  curationFees: BigInt,
  rebateFees: BigInt
): AllocationCollected {
  let allocationCollectedEvent = changetype<AllocationCollected>(newMockEvent())

  allocationCollectedEvent.parameters = new Array()

  allocationCollectedEvent.parameters.push(
    new ethereum.EventParam("indexer", ethereum.Value.fromAddress(indexer))
  )
  allocationCollectedEvent.parameters.push(
    new ethereum.EventParam(
      "subgraphDeploymentID",
      ethereum.Value.fromFixedBytes(subgraphDeploymentID)
    )
  )
  allocationCollectedEvent.parameters.push(
    new ethereum.EventParam("epoch", ethereum.Value.fromUnsignedBigInt(epoch))
  )
  allocationCollectedEvent.parameters.push(
    new ethereum.EventParam("tokens", ethereum.Value.fromUnsignedBigInt(tokens))
  )
  allocationCollectedEvent.parameters.push(
    new ethereum.EventParam(
      "allocationID",
      ethereum.Value.fromAddress(allocationID)
    )
  )
  allocationCollectedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  allocationCollectedEvent.parameters.push(
    new ethereum.EventParam(
      "curationFees",
      ethereum.Value.fromUnsignedBigInt(curationFees)
    )
  )
  allocationCollectedEvent.parameters.push(
    new ethereum.EventParam(
      "rebateFees",
      ethereum.Value.fromUnsignedBigInt(rebateFees)
    )
  )

  return allocationCollectedEvent
}

export function createAllocationCreatedEvent(
  indexer: Address,
  subgraphDeploymentID: Bytes,
  epoch: BigInt,
  tokens: BigInt,
  allocationID: Address,
  metadata: Bytes
): AllocationCreated {
  let allocationCreatedEvent = changetype<AllocationCreated>(newMockEvent())

  allocationCreatedEvent.parameters = new Array()

  allocationCreatedEvent.parameters.push(
    new ethereum.EventParam("indexer", ethereum.Value.fromAddress(indexer))
  )
  allocationCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "subgraphDeploymentID",
      ethereum.Value.fromFixedBytes(subgraphDeploymentID)
    )
  )
  allocationCreatedEvent.parameters.push(
    new ethereum.EventParam("epoch", ethereum.Value.fromUnsignedBigInt(epoch))
  )
  allocationCreatedEvent.parameters.push(
    new ethereum.EventParam("tokens", ethereum.Value.fromUnsignedBigInt(tokens))
  )
  allocationCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "allocationID",
      ethereum.Value.fromAddress(allocationID)
    )
  )
  allocationCreatedEvent.parameters.push(
    new ethereum.EventParam("metadata", ethereum.Value.fromFixedBytes(metadata))
  )

  return allocationCreatedEvent
}

export function createAssetHolderUpdateEvent(
  caller: Address,
  assetHolder: Address,
  allowed: boolean
): AssetHolderUpdate {
  let assetHolderUpdateEvent = changetype<AssetHolderUpdate>(newMockEvent())

  assetHolderUpdateEvent.parameters = new Array()

  assetHolderUpdateEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  assetHolderUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "assetHolder",
      ethereum.Value.fromAddress(assetHolder)
    )
  )
  assetHolderUpdateEvent.parameters.push(
    new ethereum.EventParam("allowed", ethereum.Value.fromBoolean(allowed))
  )

  return assetHolderUpdateEvent
}

export function createContractSyncedEvent(
  nameHash: Bytes,
  contractAddress: Address
): ContractSynced {
  let contractSyncedEvent = changetype<ContractSynced>(newMockEvent())

  contractSyncedEvent.parameters = new Array()

  contractSyncedEvent.parameters.push(
    new ethereum.EventParam("nameHash", ethereum.Value.fromFixedBytes(nameHash))
  )
  contractSyncedEvent.parameters.push(
    new ethereum.EventParam(
      "contractAddress",
      ethereum.Value.fromAddress(contractAddress)
    )
  )

  return contractSyncedEvent
}

export function createDelegationParametersUpdatedEvent(
  indexer: Address,
  indexingRewardCut: BigInt,
  queryFeeCut: BigInt,
  cooldownBlocks: BigInt
): DelegationParametersUpdated {
  let delegationParametersUpdatedEvent = changetype<
    DelegationParametersUpdated
  >(newMockEvent())

  delegationParametersUpdatedEvent.parameters = new Array()

  delegationParametersUpdatedEvent.parameters.push(
    new ethereum.EventParam("indexer", ethereum.Value.fromAddress(indexer))
  )
  delegationParametersUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "indexingRewardCut",
      ethereum.Value.fromUnsignedBigInt(indexingRewardCut)
    )
  )
  delegationParametersUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "queryFeeCut",
      ethereum.Value.fromUnsignedBigInt(queryFeeCut)
    )
  )
  delegationParametersUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "cooldownBlocks",
      ethereum.Value.fromUnsignedBigInt(cooldownBlocks)
    )
  )

  return delegationParametersUpdatedEvent
}

export function createParameterUpdatedEvent(param: string): ParameterUpdated {
  let parameterUpdatedEvent = changetype<ParameterUpdated>(newMockEvent())

  parameterUpdatedEvent.parameters = new Array()

  parameterUpdatedEvent.parameters.push(
    new ethereum.EventParam("param", ethereum.Value.fromString(param))
  )

  return parameterUpdatedEvent
}

export function createRebateClaimedEvent(
  indexer: Address,
  subgraphDeploymentID: Bytes,
  allocationID: Address,
  epoch: BigInt,
  forEpoch: BigInt,
  tokens: BigInt,
  unclaimedAllocationsCount: BigInt,
  delegationFees: BigInt
): RebateClaimed {
  let rebateClaimedEvent = changetype<RebateClaimed>(newMockEvent())

  rebateClaimedEvent.parameters = new Array()

  rebateClaimedEvent.parameters.push(
    new ethereum.EventParam("indexer", ethereum.Value.fromAddress(indexer))
  )
  rebateClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "subgraphDeploymentID",
      ethereum.Value.fromFixedBytes(subgraphDeploymentID)
    )
  )
  rebateClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "allocationID",
      ethereum.Value.fromAddress(allocationID)
    )
  )
  rebateClaimedEvent.parameters.push(
    new ethereum.EventParam("epoch", ethereum.Value.fromUnsignedBigInt(epoch))
  )
  rebateClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "forEpoch",
      ethereum.Value.fromUnsignedBigInt(forEpoch)
    )
  )
  rebateClaimedEvent.parameters.push(
    new ethereum.EventParam("tokens", ethereum.Value.fromUnsignedBigInt(tokens))
  )
  rebateClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "unclaimedAllocationsCount",
      ethereum.Value.fromUnsignedBigInt(unclaimedAllocationsCount)
    )
  )
  rebateClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "delegationFees",
      ethereum.Value.fromUnsignedBigInt(delegationFees)
    )
  )

  return rebateClaimedEvent
}

export function createSetControllerEvent(controller: Address): SetController {
  let setControllerEvent = changetype<SetController>(newMockEvent())

  setControllerEvent.parameters = new Array()

  setControllerEvent.parameters.push(
    new ethereum.EventParam(
      "controller",
      ethereum.Value.fromAddress(controller)
    )
  )

  return setControllerEvent
}

export function createSetOperatorEvent(
  indexer: Address,
  operator: Address,
  allowed: boolean
): SetOperator {
  let setOperatorEvent = changetype<SetOperator>(newMockEvent())

  setOperatorEvent.parameters = new Array()

  setOperatorEvent.parameters.push(
    new ethereum.EventParam("indexer", ethereum.Value.fromAddress(indexer))
  )
  setOperatorEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  setOperatorEvent.parameters.push(
    new ethereum.EventParam("allowed", ethereum.Value.fromBoolean(allowed))
  )

  return setOperatorEvent
}

export function createSetRewardsDestinationEvent(
  indexer: Address,
  destination: Address
): SetRewardsDestination {
  let setRewardsDestinationEvent = changetype<SetRewardsDestination>(
    newMockEvent()
  )

  setRewardsDestinationEvent.parameters = new Array()

  setRewardsDestinationEvent.parameters.push(
    new ethereum.EventParam("indexer", ethereum.Value.fromAddress(indexer))
  )
  setRewardsDestinationEvent.parameters.push(
    new ethereum.EventParam(
      "destination",
      ethereum.Value.fromAddress(destination)
    )
  )

  return setRewardsDestinationEvent
}

export function createSlasherUpdateEvent(
  caller: Address,
  slasher: Address,
  allowed: boolean
): SlasherUpdate {
  let slasherUpdateEvent = changetype<SlasherUpdate>(newMockEvent())

  slasherUpdateEvent.parameters = new Array()

  slasherUpdateEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  slasherUpdateEvent.parameters.push(
    new ethereum.EventParam("slasher", ethereum.Value.fromAddress(slasher))
  )
  slasherUpdateEvent.parameters.push(
    new ethereum.EventParam("allowed", ethereum.Value.fromBoolean(allowed))
  )

  return slasherUpdateEvent
}

export function createStakeDelegatedEvent(
  indexer: Address,
  delegator: Address,
  tokens: BigInt,
  shares: BigInt
): StakeDelegated {
  let stakeDelegatedEvent = changetype<StakeDelegated>(newMockEvent())

  stakeDelegatedEvent.parameters = new Array()

  stakeDelegatedEvent.parameters.push(
    new ethereum.EventParam("indexer", ethereum.Value.fromAddress(indexer))
  )
  stakeDelegatedEvent.parameters.push(
    new ethereum.EventParam("delegator", ethereum.Value.fromAddress(delegator))
  )
  stakeDelegatedEvent.parameters.push(
    new ethereum.EventParam("tokens", ethereum.Value.fromUnsignedBigInt(tokens))
  )
  stakeDelegatedEvent.parameters.push(
    new ethereum.EventParam("shares", ethereum.Value.fromUnsignedBigInt(shares))
  )

  return stakeDelegatedEvent
}

export function createStakeDelegatedLockedEvent(
  indexer: Address,
  delegator: Address,
  tokens: BigInt,
  shares: BigInt,
  until: BigInt
): StakeDelegatedLocked {
  let stakeDelegatedLockedEvent = changetype<StakeDelegatedLocked>(
    newMockEvent()
  )

  stakeDelegatedLockedEvent.parameters = new Array()

  stakeDelegatedLockedEvent.parameters.push(
    new ethereum.EventParam("indexer", ethereum.Value.fromAddress(indexer))
  )
  stakeDelegatedLockedEvent.parameters.push(
    new ethereum.EventParam("delegator", ethereum.Value.fromAddress(delegator))
  )
  stakeDelegatedLockedEvent.parameters.push(
    new ethereum.EventParam("tokens", ethereum.Value.fromUnsignedBigInt(tokens))
  )
  stakeDelegatedLockedEvent.parameters.push(
    new ethereum.EventParam("shares", ethereum.Value.fromUnsignedBigInt(shares))
  )
  stakeDelegatedLockedEvent.parameters.push(
    new ethereum.EventParam("until", ethereum.Value.fromUnsignedBigInt(until))
  )

  return stakeDelegatedLockedEvent
}

export function createStakeDelegatedWithdrawnEvent(
  indexer: Address,
  delegator: Address,
  tokens: BigInt
): StakeDelegatedWithdrawn {
  let stakeDelegatedWithdrawnEvent = changetype<StakeDelegatedWithdrawn>(
    newMockEvent()
  )

  stakeDelegatedWithdrawnEvent.parameters = new Array()

  stakeDelegatedWithdrawnEvent.parameters.push(
    new ethereum.EventParam("indexer", ethereum.Value.fromAddress(indexer))
  )
  stakeDelegatedWithdrawnEvent.parameters.push(
    new ethereum.EventParam("delegator", ethereum.Value.fromAddress(delegator))
  )
  stakeDelegatedWithdrawnEvent.parameters.push(
    new ethereum.EventParam("tokens", ethereum.Value.fromUnsignedBigInt(tokens))
  )

  return stakeDelegatedWithdrawnEvent
}

export function createStakeDepositedEvent(
  indexer: Address,
  tokens: BigInt
): StakeDeposited {
  let stakeDepositedEvent = changetype<StakeDeposited>(newMockEvent())

  stakeDepositedEvent.parameters = new Array()

  stakeDepositedEvent.parameters.push(
    new ethereum.EventParam("indexer", ethereum.Value.fromAddress(indexer))
  )
  stakeDepositedEvent.parameters.push(
    new ethereum.EventParam("tokens", ethereum.Value.fromUnsignedBigInt(tokens))
  )

  return stakeDepositedEvent
}

export function createStakeLockedEvent(
  indexer: Address,
  tokens: BigInt,
  until: BigInt
): StakeLocked {
  let stakeLockedEvent = changetype<StakeLocked>(newMockEvent())

  stakeLockedEvent.parameters = new Array()

  stakeLockedEvent.parameters.push(
    new ethereum.EventParam("indexer", ethereum.Value.fromAddress(indexer))
  )
  stakeLockedEvent.parameters.push(
    new ethereum.EventParam("tokens", ethereum.Value.fromUnsignedBigInt(tokens))
  )
  stakeLockedEvent.parameters.push(
    new ethereum.EventParam("until", ethereum.Value.fromUnsignedBigInt(until))
  )

  return stakeLockedEvent
}

export function createStakeSlashedEvent(
  indexer: Address,
  tokens: BigInt,
  reward: BigInt,
  beneficiary: Address
): StakeSlashed {
  let stakeSlashedEvent = changetype<StakeSlashed>(newMockEvent())

  stakeSlashedEvent.parameters = new Array()

  stakeSlashedEvent.parameters.push(
    new ethereum.EventParam("indexer", ethereum.Value.fromAddress(indexer))
  )
  stakeSlashedEvent.parameters.push(
    new ethereum.EventParam("tokens", ethereum.Value.fromUnsignedBigInt(tokens))
  )
  stakeSlashedEvent.parameters.push(
    new ethereum.EventParam("reward", ethereum.Value.fromUnsignedBigInt(reward))
  )
  stakeSlashedEvent.parameters.push(
    new ethereum.EventParam(
      "beneficiary",
      ethereum.Value.fromAddress(beneficiary)
    )
  )

  return stakeSlashedEvent
}

export function createStakeWithdrawnEvent(
  indexer: Address,
  tokens: BigInt
): StakeWithdrawn {
  let stakeWithdrawnEvent = changetype<StakeWithdrawn>(newMockEvent())

  stakeWithdrawnEvent.parameters = new Array()

  stakeWithdrawnEvent.parameters.push(
    new ethereum.EventParam("indexer", ethereum.Value.fromAddress(indexer))
  )
  stakeWithdrawnEvent.parameters.push(
    new ethereum.EventParam("tokens", ethereum.Value.fromUnsignedBigInt(tokens))
  )

  return stakeWithdrawnEvent
}
