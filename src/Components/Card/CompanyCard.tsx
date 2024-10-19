import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

type Props = {};

const CompanyCard = (props: Props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://images.unsplash.com/photo-1728144691773-544f5c5577f6?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card.Body>
        <Card.Title>Apple Stock</Card.Title>
        <Card.Text>$99.99</Card.Text>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          magnam dicta culpa, nihil dolorem eligendi dolore rem doloremque
          dolores laboriosam!
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CompanyCard;
