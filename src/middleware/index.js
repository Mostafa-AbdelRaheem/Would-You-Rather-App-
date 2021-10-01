import  thunk  from 'redux-thunk';
import logger from './logger';
import { applyMiddleware } from 'redux';
// import thunk from 'react-redux'

export default applyMiddleware(
  thunk,
  logger,
) 