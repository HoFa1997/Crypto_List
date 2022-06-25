import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavItem = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  list-style: none;

  li {
    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      margin: 0 20px;
    }
  }
`;

const NavBarStyle = styled.nav`
  background-color: rgba(39, 166, 245, 0.38);

  border-radius: 0 0 2rem 2rem;

  img {
    width: 50px;
    padding: 5px;
  }
`;
const DivHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  padding: 0 2rem;
  width: 800px;
  margin: auto;
`;

export function NavBar() {
  return (
    <NavBarStyle>
      <DivHead>
        <NavItem>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/crypto">Crypto</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
        </NavItem>
      </DivHead>
    </NavBarStyle>
  );
}
