import React from 'react';
import ReactDOM from 'react-dom';
import DataCleaner from '../Cleaner/DataCleaner';
import mockPeople from '../../MockData/People'
const cleaner = new DataCleaner();

it('renders without crashing', () => {

  let result = cleaner.cleanPeople(mockPeople.results)

  expect(result).toEqual(1)
});
