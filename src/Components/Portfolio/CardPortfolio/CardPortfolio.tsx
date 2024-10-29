import DeletePortfolio from "../DeletePortfolio/DeletePortfolio";

interface Props {
  portfolioValue: string;
  onPortfolioDelete: (e: React.SyntheticEvent) => void;
}

const CardPortfolio = ({ portfolioValue, onPortfolioDelete }: Props) => {
  return (
    <>
      <h4>{portfolioValue}</h4>
      <DeletePortfolio
        onPortfolioDelete={onPortfolioDelete}
        portfolioValue={portfolioValue}
      />
    </>
  );
};

export default CardPortfolio;
