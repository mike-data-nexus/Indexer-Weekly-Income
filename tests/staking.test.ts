import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import { AllocationClosed } from "../generated/schema"
import { AllocationClosed as AllocationClosedEvent } from "../generated/staking/staking"
import { handleAllocationClosed } from "../src/staking"
import { createAllocationClosedEvent } from "./staking-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let indexer = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let subgraphDeploymentID = Bytes.fromI32(1234567890)
    let epoch = BigInt.fromI32(234)
    let tokens = BigInt.fromI32(234)
    let allocationID = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let effectiveAllocation = BigInt.fromI32(234)
    let sender = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let poi = Bytes.fromI32(1234567890)
    let isPublic = "boolean Not implemented"
    let newAllocationClosedEvent = createAllocationClosedEvent(
      indexer,
      subgraphDeploymentID,
      epoch,
      tokens,
      allocationID,
      effectiveAllocation,
      sender,
      poi,
      isPublic
    )
    handleAllocationClosed(newAllocationClosedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AllocationClosed created and stored", () => {
    assert.entityCount("AllocationClosed", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AllocationClosed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "indexer",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AllocationClosed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "subgraphDeploymentID",
      "1234567890"
    )
    assert.fieldEquals(
      "AllocationClosed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "epoch",
      "234"
    )
    assert.fieldEquals(
      "AllocationClosed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokens",
      "234"
    )
    assert.fieldEquals(
      "AllocationClosed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "allocationID",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AllocationClosed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "effectiveAllocation",
      "234"
    )
    assert.fieldEquals(
      "AllocationClosed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "sender",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AllocationClosed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "poi",
      "1234567890"
    )
    assert.fieldEquals(
      "AllocationClosed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "isPublic",
      "boolean Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
