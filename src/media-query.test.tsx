// https://testing-library.com/docs/queries/about

import 'jest-styled-components';
import { render, screen } from '@testing-library/react';
import { styled } from 'styled-components';

const StyledDiv = styled.div`
  @media (min-width: 400px) {
    color: red;
  }
`;

function MyComponent() {
  return <StyledDiv data-testid="styled-div" />;
}

describe('toHaveStyleRule media test', () => {
  test('has red color on larger devices', async () => {
    render(<MyComponent />);

    const styledDiv = screen.getByTestId('styled-div');
    expect(styledDiv).toHaveStyleRule('color', 'red', {
      media: '(min-width: 400px)',
    });
  });
});
