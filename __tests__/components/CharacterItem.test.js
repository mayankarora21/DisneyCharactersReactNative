import CharacterItem from '../../components/CharacterItem';
import {render, screen} from '../../test-utils/test-utils';

test('CharacterItem should render correctly', () => {
    render(<CharacterItem character = {{name: 'CharacterName', imageUrl: 'https://static.wikia.nocookie.net/disney/images/8/80/Profile_-_627.png'}}/>)
    expect(screen.toJSON()).toMatchSnapshot();
})