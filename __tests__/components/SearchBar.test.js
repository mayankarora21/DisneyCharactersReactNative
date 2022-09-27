import SearchBar from '../../components/SearchBar';
import {render, screen} from '../../test-utils/test-utils';

test('SearchBar should render correctly', () => {
    render(<SearchBar/>)
    expect(screen.toJSON()).toMatchSnapshot();
})