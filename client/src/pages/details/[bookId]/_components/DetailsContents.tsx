import { forwardRef, useEffect } from "react";

import BookDetailsContents from "./book/BookDetailsContents";
import RecommendBooks from "./RecommendBooks";

import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../../../../lib/react-query/query-key";
import { QueryFns } from "../../../../lib/react-query/queryFn";
import { daysToMs } from "../../../../lib/react-query/utils";
import { useHandleError } from "../../../hooks/use-handle-error";
import { ERROR_DETAILS } from "../../../../api/constants/errorDetails";
import { getCategoryPath } from "../utils/getCategoryPath";

type DetailsContentsProps = {
  bookId: string | undefined;
  category: BookSubCategory | undefined;
  lang: BookParentCategory[] | undefined;
  setReObserve: React.Dispatch<React.SetStateAction<boolean>>;
};

const DetailsContents = forwardRef<HTMLDivElement, DetailsContentsProps>(
  ({ bookId, category, lang, setReObserve }, ref) => {
    const { data, isError, isSuccess, error, isFetching, refetch } = useQuery({
      queryKey: [QueryKeys.BOOK_DETAILS, bookId],
      queryFn: () => QueryFns.GET_BOOK_DETAILS(bookId!),
      staleTime: daysToMs(14),
      gcTime: daysToMs(17),
      enabled: !!bookId,
    });

    useHandleError({
      isError,
      error,
      errorDetails: ERROR_DETAILS.GET_BOOK_DETAILS,
    });

    useEffect(() => {
      let timeoutId: NodeJS.Timeout | null = null;
  
      if (isFetching) {
        timeoutId = setTimeout(() => {
          refetch();
        }, 3000);
      } else {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      }

      return () => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      }
    }, [isFetching]);

    useEffect(() => {
      setReObserve(true);
    }, [isSuccess]);

    if (!data) return null;

    return (
      <div id="prod-info" ref={ref} className="details-prod-contents">
        <div className="details-prod-contents__horizontal">
          <BookDetailsContents details={data} />
          {bookId && category && lang && (
            <RecommendBooks category={category} lang={getCategoryPath(lang)} />
          )}
        </div>
      </div>
    );
  }
);

export default DetailsContents;
