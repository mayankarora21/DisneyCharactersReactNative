import {render, screen} from '../../test-utils/test-utils';
import DetailsScreen from '../../components/DetailsScreen';

test('DetailsScreen should render correctly', () => {
    render(<DetailsScreen route = {{
        params: {
            character: {
                name: 'Character Name',
                imageUrl: "https://static.wikia.nocookie.net/disney/images/8/80/Profile_-_627.png",
                films: ["Film1", "Film2"],
                shortFilms: [],
                tvShows: [],
                videoGames: [],
                parkAttractions: [],
                allies: [],
                enemies: [],
            }
    }}} navigation = {{setOptions: jest.fn()}}/>);
    expect(screen.toJSON()).toMatchSnapshot();
})