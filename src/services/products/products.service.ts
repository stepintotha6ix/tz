import { axiosClassic } from "@/api/interceptors";
import { getProductsUrl } from "@/config/api.config";

export const ProductsService = {
   getAll() {
    return axiosClassic.get(getProductsUrl(""));
  },
};
