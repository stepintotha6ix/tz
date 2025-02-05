import { IProduct } from "@/components/shared/types/product.types";
import { ProductsService } from "@/services/products/products.service";
import { useQuery } from "react-query";

export const useData = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["get data"],
    queryFn: async () => {
      const productsData = await ProductsService.getAll();
      const { data } = productsData;

      // Фильтруем только те объекты, где хотя бы один элемент specializedSubjects содержит skills
      const filteredData = data.filter(
        (item: IProduct) =>
          Array.isArray(item.specializedSubjects) &&
          item.specializedSubjects.some(
            (subject) => Array.isArray(subject.skills) && subject.skills.length > 0 && subject.skills.length % 2 === 0 
          )
      ).slice(0,5)

      return filteredData;
    },
  });

  return { data, isLoading };
};
