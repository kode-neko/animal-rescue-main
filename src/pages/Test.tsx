import React from 'react';

type TestProps = {
  name: string
}

const Test = ({ name }: TestProps) => (
    <div>
      Soy el Test {name}
    </div>
);

export default Test;
