import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
    BookSearchingControllerApi,
    BookIndexControllerApi,
    BookIndexUpdateRequest,
    ApiResponseListBookSearchingResult,
    ApiResponseBookIndexResponse,
} from "../../api/search-service";
import { createServiceConfig } from "../../config/configuration";
import { showToast } from "../../utils/toast";

const searchingApi = new BookSearchingControllerApi(createServiceConfig("search"));
const indexingApi = new BookIndexControllerApi(createServiceConfig("search"));

export const useAutocompleteTitle = (prefix: string) => {
    return useQuery<ApiResponseListBookSearchingResult, Error>({
        queryKey: ["autocomplete-title", prefix],
        queryFn: () => searchingApi.autocompleteTitle({ prefix }).then((res) => res.data),
        enabled: !!prefix,
    });
};
export const useSearchByTitle = (title: string) => {
    return useQuery<ApiResponseListBookSearchingResult, Error>({
        queryKey: ["search-title", title],
        queryFn: () => searchingApi.getBookByTitle({ title }).then((res) => res.data),
        enabled: !!title,
    });
};

export const useSearchByAuthor = (author: string) => {
    return useQuery<ApiResponseListBookSearchingResult, Error>({
        queryKey: ["search-author", author],
        queryFn: () => searchingApi.getBooksByAuthor({ author }).then((res) => res.data),
        enabled: !!author,
    });
};

export const useSearchByCategories = (categories: string[]) => {
    return useQuery<ApiResponseListBookSearchingResult, Error>({
        queryKey: ["search-categories", categories],
        queryFn: () => searchingApi.getBookByCategories({ categories }).then((res) => res.data),
        enabled: categories.length > 0,
    });
};

// Không dùng ở UI
export const useGetAllSearchResults = () => {
    return useQuery<ApiResponseListBookSearchingResult, Error>({
        queryKey: ["search-all"],
        queryFn: () => searchingApi.getAll().then((res) => res.data),
    });
};

// Không dùng ở UI
export const useUpdateBookIndex = () => {
    const queryClient = useQueryClient();

    return useMutation<
        ApiResponseBookIndexResponse,
        Error,
        BookIndexUpdateRequest
    >({
        mutationFn: (data) =>
            indexingApi.updateBook({ bookIndexUpdateRequest: data }).then((res) => res.data),
        onSuccess: () => {
            showToast("Cập nhật index thành công", "success");
            queryClient.invalidateQueries({ queryKey: ["search-all"] });
        },
        onError: () => {
            showToast("Cập nhật index thất bại", "error");
        },
    });
};