import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { Dispatch, RootState } from '../redux/store';

/**
 * @description Defines a custom hook named useAppDispatch, which allows access of Redux store's
 * dispatch function.
 */
export const useAppDispatch = () => useDispatch<Dispatch>();

/**
 * @description defines a custom hook named useAppSelector. It essentially allows select and access
 * data from the Redux store's state.
 * dispatch function.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;