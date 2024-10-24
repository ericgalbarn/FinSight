import axios from "axios";
import { CompanySearch } from "./company";
interface SearchResponse {
  data: CompanySearch[];
}

const api_key = import.meta.env.VITE_API_KEY;

export const searchCompanies = async (query: string) => {
  try {
    const data = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=${api_key}`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Error message: ", error.message);
      return error.message;
    } else {
      console.log("Unexpected error: ", error);
      return "An unexpected error has occurred";
    }
  }
};
