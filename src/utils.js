/**
 * Calculate the cost of a body part array.
 */
export function getBodyCost(body) {
  return body.reduce((cost, part) => cost + BODYPART_COST[part], 0);
}
