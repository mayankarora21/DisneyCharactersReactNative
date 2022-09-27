import DetailItem from '../../components/DetailItem';
import {render, screen} from '../../test-utils/test-utils';

test('DetailItem should render correctly when films array is empty', () => {
    render(<DetailItem character={{name: 'CharacterName', films: []}} keyObject = {{actualKey: 'films', visibleKey: 'Films'}}/>)
    expect(screen.toJSON()).toMatchSnapshot();
})

test('DetailItem should render correctly when films array is not empty', () => {
    render(<DetailItem character={{name: 'CharacterName', films: ["Film1", "Film2"]}} keyObject = {{actualKey: 'films', visibleKey: 'Films'}}/>)
    expect(screen.toJSON()).toMatchSnapshot();
})