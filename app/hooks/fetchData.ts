import { useEffect, useState } from "react";

// api
import { BaseAPI } from "../api/index";

// models
import { Product } from "../models/index";

// service
import { ProductService } from "../services/index";

interface ApiResponse<T> {
  data: T[];
  error: string | null;
  loading: boolean;
}

const useFetchData = <T>(url: string = "") /* : ApiResponse<T> */ => {
  const [data, setData] = useState<T[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await ProductService.getProducts();
      const { data } = response.data;
      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading };
};

export default useFetchData;
