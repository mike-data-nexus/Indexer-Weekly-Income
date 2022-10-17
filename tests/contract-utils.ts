import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  AdminUpdated,
  ImplementationUpdated,
  PendingImplementationUpdated
} from "../generated/Contract/Contract"

export function createAdminUpdatedEvent(
  oldAdmin: Address,
  newAdmin: Address
): AdminUpdated {
  let adminUpdatedEvent = changetype<AdminUpdated>(newMockEvent())

  adminUpdatedEvent.parameters = new Array()

  adminUpdatedEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  adminUpdatedEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return adminUpdatedEvent
}

export function createImplementationUpdatedEvent(
  oldImplementation: Address,
  newImplementation: Address
): ImplementationUpdated {
  let implementationUpdatedEvent = changetype<ImplementationUpdated>(
    newMockEvent()
  )

  implementationUpdatedEvent.parameters = new Array()

  implementationUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  implementationUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return implementationUpdatedEvent
}

export function createPendingImplementationUpdatedEvent(
  oldPendingImplementation: Address,
  newPendingImplementation: Address
): PendingImplementationUpdated {
  let pendingImplementationUpdatedEvent = changetype<
    PendingImplementationUpdated
  >(newMockEvent())

  pendingImplementationUpdatedEvent.parameters = new Array()

  pendingImplementationUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingImplementation",
      ethereum.Value.fromAddress(oldPendingImplementation)
    )
  )
  pendingImplementationUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingImplementation",
      ethereum.Value.fromAddress(newPendingImplementation)
    )
  )

  return pendingImplementationUpdatedEvent
}
