import "screeps-jest";
import { minerLogic } from "../roles/miner";

test("miner", () => {
  const mockMiner = {
    store: { energy: 0, getCapacity: () => 0 },
    pos: { findClosestByRange: () => null, getRangeTo: () => 0 },
    moveTo: jest.fn(),
    harvest: jest.fn(),
  };

  minerLogic(mockMiner);
  expect(mockMiner.moveTo).not.toHaveBeenCalled();
  expect(mockMiner.harvest).not.toHaveBeenCalled();
});
