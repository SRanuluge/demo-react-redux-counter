import { INCREASE, DECREASE } from "./types";

export function countIncrease() {
  return { type: INCREASE };
}
export function countDecrease() {
  return { type: DECREASE };
}
