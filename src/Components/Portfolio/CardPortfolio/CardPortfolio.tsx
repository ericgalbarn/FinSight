import CloseButton from "react-bootstrap/CloseButton";

interface Props {
  portfolioValue: string;
}

const CardPortfolio = ({ portfolioValue }: Props) => {
  return (
    <>
      <h4>{portfolioValue}</h4>
      <CloseButton />
    </>
  );
};

export default CardPortfolio;
