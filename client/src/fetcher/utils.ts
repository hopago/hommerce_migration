import { getValidSearchTerm } from "../utils/getValidSearchTerm";

export const translateQueryValueToEn = (filter: SearchType) => {
  const filterMap = {
    통합검색: null,
    제목: "title",
    저자: "author",
  };

  return filterMap[filter] || null;
};

export const createQueryString = (params: Record<string, string | number>) => {
  const queryParams = new URLSearchParams();
  for (const key in params) {
    const value = params[key];
    const processedValue =
      typeof value === "number" ? value.toString() : getValidSearchTerm(value);
    queryParams.append(key, processedValue);
  }
  return queryParams.toString();
};
