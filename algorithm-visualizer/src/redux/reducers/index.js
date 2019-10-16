import { combineReducers } from "redux";
import array from './array';
import index from './currentIndex';
import swap from './swap';
import sortedArray from './sortedArray';

export default combineReducers({ array, index, swap, sortedArray });
