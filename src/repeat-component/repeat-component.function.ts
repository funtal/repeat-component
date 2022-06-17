import { Children, ReactNode } from 'react';
import isFunction from 'is-function';

import {
  TFunctionToRepeat,
  TComponentToRepeat,
  TFunctionOrComponentToRepeat,
} from './repeat-component.types';

const isFunctionGuard = (fn: any): fn is Function => isFunction(fn);

const functionToRepeat = (functionToCall: TFunctionToRepeat) => (
  _: unknown,
  index: number
): ReactNode => functionToCall(index);

const componentToRepeat = (component: TComponentToRepeat) => () => component;

const repeat = (callback: (value: unknown, index: number) => ReactNode, count: number) =>
  Children.toArray(Array.from({ length: count }).map(callback));

export const repeatComponent = (
  functionOrComponentToRepeat: TFunctionOrComponentToRepeat,
  count: number
) => {
  const absCount = Math.abs(count);

  if (isFunctionGuard(functionOrComponentToRepeat)) {
    return repeat(functionToRepeat(functionOrComponentToRepeat), absCount);
  }

  return repeat(componentToRepeat(functionOrComponentToRepeat), absCount);
};
