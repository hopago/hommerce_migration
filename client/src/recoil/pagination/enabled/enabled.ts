import { atom } from "recoil";

export const pointEnabledState = atom({
  key: "paginationPointEnabledState",
  default: true,
});

export const reviewEnabledState = atom({
  key: "paginationReviewEnabledState",
  default: true,
});
