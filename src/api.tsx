import axios from "axios";
import {
  CompanyKeyMetrics,
  CompanyKeyRatios,
  CompanyProfile,
  CompanySearch,
} from "./company";
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

export const getCompanyProfile = async (query: string) => {
  try {
    const data = await axios.get<CompanyProfile[]>(
      `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${api_key}`
    );
    return data;
  } catch (error: any) {
    console.log("Error message from API: ", error.message);
  }
};

export const getKeyMetrics = async (query: string) => {
  try {
    const data = await axios.get<CompanyKeyMetrics[]>(
      `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?period=annual&apikey=${api_key}`
    );
    return data;
  } catch (error: any) {
    console.log("Error message from API: ", error.message);
  }
};
