import {
  AllocationClosed as AllocationClosedEvent
} from "../generated/staking/staking"

export function handleAllocationClosed(event: AllocationClosedEvent): void {
  let entity = new AllocationClosed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.indexer = event.params.indexer
  entity.subgraphDeploymentID = event.params.subgraphDeploymentID
  entity.epoch = event.params.epoch
  entity.tokens = event.params.tokens
  entity.allocationID = event.params.allocationID
  entity.effectiveAllocation = event.params.effectiveAllocation
  entity.sender = event.params.sender
  entity.poi = event.params.poi
  entity.isPublic = event.params.isPublic
  entity.save()
}
