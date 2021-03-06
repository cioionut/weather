import { Form, FormControl, Button, Col } from 'react-bootstrap';

const SearchAd = () => {
  return (
    <>
      <div className="gcse-search"></div>

      {/* <Form 
        // action="https://cse.google.com/cse"
      >
        <Form.Row className="align-items-center">
          <Col xs="auto">
            <Form.Control
              size="sm"
              placeholder="Caută"
              name="q"
            />
            <Form.Control
              name="cx"
              defaultValue="b2c0ee93f93f41e5f"
              hidden={true}
            />
            <Form.Control
              name="ie"
              defaultValue="UTF-8"
              hidden={true}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" variant="outline-primary" size="sm">
              Search
            </Button>
          </Col>
        </Form.Row>
      </Form>
      <div className="gcse-searchresults-only"></div> */}
   </>
  );
};

export default SearchAd;