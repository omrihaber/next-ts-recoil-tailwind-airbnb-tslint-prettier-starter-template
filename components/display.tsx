import { useRecoilState, useRecoilValue } from 'recoil';
import { nameState, charState } from './states';

const Display = () => {
  const charNumber = useRecoilValue<number>(charState);
  const [name, setName] = useRecoilState<string>(nameState);

  return (
    <div>
      <p>My name is {name}</p>
      <p>My name has {charNumber} characters</p>
    </div>
  );
};

export default Display;
