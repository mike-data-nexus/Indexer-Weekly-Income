import {
  Address,
  BigDecimal,
  BigInt,
  ethereum,
  log,
} from "@graphprotocol/graph-ts";
import { Indexer, WeeklyData } from "../../generated/schema";

export namespace events {
  export function id(event: ethereum.Event): string {
    return event.block.number
      .toString()
      .concat("-")
      .concat(event.logIndex.toString());
  }
}

export namespace constants {
  export const BIGINT_ZERO = BigInt.fromI32(0);
  export const BIGINT_ONE = BigInt.fromI32(1);
  export const BIGINT_TEN = BigInt.fromI32(10);
  export const BIGDECIMAL_ZERO = new BigDecimal(constants.BIGINT_ZERO);
  export const BIGDECIMAL_ONE = new BigDecimal(constants.BIGINT_ONE);
  export const BIGDECIMAL_TEN = new BigDecimal(constants.BIGINT_TEN);
  export const BIGDECIMAL_1M = new BigDecimal(BigInt.fromI32(1000000));
  export const BIGDECIMAL_1E18 = new BigDecimal(
    BigInt.fromString("1000000000000000000")
  );
  export const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";
  export const BYTES32_ZERO =
    "0x0000000000000000000000000000000000000000000000000000000000000000";

  // ETHEREUM CONTRACT ADDRESSES - NEEDS TO BE UPDATED WHEN DEPLOYING TO OTHER NETWORKS //
  export const SILOREPOSITORY = "0xd998c35b7900b344bbbe6555cc11576942cf309d";
  export const SILOLENS = "0xf12C3758c1eC393704f0Db8537ef7F57368D92Ea";
  export const USDC_ADDRESS = Address.fromString(
    "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
  );
  export const WETH_ADDRESS = Address.fromString(
    "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
  );
  export const PRICEPROVIDER = Address.fromString(
    "0x7C2ca9D502f2409BeceAfa68E97a176Ff805029F"
  );
}
