import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Header from '../modules/header/components/Header';
import { shallowToJson } from 'enzyme-to-json';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

const store = createStore(reducers, applyMiddleware(thunk));

describe('header Component', () => {
  const output = shallow(<Header />);
  expect(shallowToJson(output)).toMatchSnapshot();
});
