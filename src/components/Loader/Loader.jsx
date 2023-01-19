import { ColorRing } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export function Loader() {
  return (
    <Wrapper>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        colors={['#1d976c', '#1d976c', '#1d976c', '#1d976c', '#1d976c']}
      />
    </Wrapper>
  );
}
