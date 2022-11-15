import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../common/store';

type TestProps = {
  name: string
}

const Test = ({ name }: TestProps) => {
  const username = useSelector<RootState, string>((state) => state.user.name);
  return (
    <div>
      Soy el Test {name} y el usuario es {username}
    </div>
  );
};

export default Test;
