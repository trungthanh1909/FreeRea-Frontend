import { useQuery } from "@tanstack/react-query";
import { ExternalBookAPIsApi } from "../../api/reading-service";
import { createServiceConfig } from "../../config/configuration";
import { ApiResponseBookResponse } from "../../api/reading-service";

const externalApi = new ExternalBookAPIsApi(createServiceConfig());

export const useGetAllBooks = () => {
    return useQuery({
        queryKey: ["external-books", "all"],
        queryFn: () => externalApi.getAllBooks().then((res) => res.data),
    });
};

export const useGetBookById = (id: string) => {
    return useQuery<ApiResponseBookResponse>({
        queryKey: ["external-books", id],
        queryFn: () => externalApi.getBookById({ id }).then((res) => res.data),
        enabled: !!id,
    });
};
