import {fireEvent, render, screen} from '../../test-utils/test-utils';
import HomeScreen from '../../components/HomeScreen';
import axios from 'axios';

jest.mock('axios');
const characterListResponse = {
    data: {
        data: [
            {name: "Character 1", imageUrl: "https://static.wikia.nocookie.net/disney/images/8/80/Profile_-_627.png"},
            {name: "Character 2", imageUrl: "https://static.wikia.nocookie.net/disney/images/3/3f/90%27s_Adventure_Bear_profile.png"},
            {name: "Character 3", imageUrl: "https://static.wikia.nocookie.net/disney/images/1/1e/Profile_-_Ace.png"},
        ]
    }
}

axios.get.mockResolvedValue(characterListResponse);

test('HomeScreen should render correctly', async () => {
    render(<HomeScreen/>);
    await screen.findByText('Character 1');
    expect(screen.toJSON()).toMatchSnapshot();
})


test('character list should be filtered according to search text', async () => {
    render(<HomeScreen/>);
    await screen.findByText('Character 1');
    expect(screen.queryByText('Character 2')).toBeTruthy();
    expect(screen.queryByText('Character 3')).toBeTruthy();
    
    fireEvent.changeText(screen.getByPlaceholderText('Search'), '1');
    await screen.findByText('Character 1');
    expect(screen.queryByText('Character 2')).toBeFalsy();
    expect(screen.queryByText('Character 3')).toBeFalsy();
})