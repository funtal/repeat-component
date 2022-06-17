import { ReactNode } from 'react';

export type TFunctionToRepeat = (index: number) => ReactNode;

export type TComponentToRepeat = ReactNode;

export type TFunctionOrComponentToRepeat = TFunctionToRepeat | TComponentToRepeat;
