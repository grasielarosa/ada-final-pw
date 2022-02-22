import React from 'react';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Container, Wrapper } from '../../components';

const PageNotFound = (): JSX.Element => {
  const { goBack } = useHistory();

  return (
    <Wrapper>
      <Container>
        <p>page not found</p>
        <div className="">
          <Button onClick={goBack} className="btn-primary text-secondary my-3">
            <RiArrowGoBackLine /> go back
          </Button>
        </div>
      </Container>
    </Wrapper>
  );
};

export { PageNotFound };
