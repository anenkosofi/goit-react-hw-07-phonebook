import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import { Field, Label, Input } from './Filter.styled';

export function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    const { value } = e.currentTarget;
    dispatch(setFilter(value));
  };

  return (
    <Field>
      <Input type="text" value={filter} onChange={onChange} placeholder=" " />
      <Label>Find contacts by name</Label>
    </Field>
  );
}
