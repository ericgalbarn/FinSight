import { CompanySearch } from "../../company";
import CompanyCard from "../Card/CompanyCard";
import { v4 as uuidv4 } from "uuid";

interface Props {
  searchResults: CompanySearch[];
}

const CardList: React.FC<Props> = ({ searchResults }: Props): JSX.Element => {
  return (
    <>
      {searchResults.length > 0 ? (
        searchResults.map((result) => {
          return (
            <CompanyCard
              id={result.symbol}
              key={uuidv4()}
              searchResult={result}
            />
          );
        })
      ) : (
        <h1>No results</h1>
      )}
    </>
  );
};

export default CardList;
