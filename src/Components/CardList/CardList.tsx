import CompanyCard from "../Card/CompanyCard";

interface Props {}

const CardList: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div>
      <CompanyCard companyName="Apple" ticker="AAPL" price={100} />
      <CompanyCard companyName="Samsung" ticker="SS" price={200} />
      <CompanyCard companyName="Microsoft" ticker="MSFT" price={300} />
    </div>
  );
};

export default CardList;
