import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES, FAMILIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Row>
          <TitleActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </TitleActionGroup>
          <Logo />
          <SubscriptionButtonContainer>
            <SubScribeButton type="button">Subscribe</SubScribeButton>
            <span>Already a subscriber?</span>
          </SubscriptionButtonContainer>
        </Row>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const SubscriptionButtonContainer = styled.div`
  display: none;
  @media ${QUERIES.desktopAndUp} {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    > span {
      margin-top: 8px;
      text-decoration: underline;
      font-family: ${FAMILIES.serif};
      font-style: italic;
      font-size: 14px;
    }
  }
`;

const SubScribeButton = styled(Button)`
  display: none;
  @media ${QUERIES.desktopAndUp} {
    height: 40px;
    padding: 11px 24px;
    display: flex;
    align-items: center;
  }
`;
const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
  @media ${QUERIES.desktopAndUp} {
    width: 100%;
  }
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;
  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const TitleActionGroup = styled(ActionGroup)`
  @media ${QUERIES.desktopAndUp} {
    display: flex;
  }
  display: none;
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
`;

export default Header;
