import React from 'react';
import { IDay } from 'src/type';
interface IMinMaxProvider {
    initState: {
        minDate: IDay | null | undefined;
        maxDate: IDay | null | undefined;
    };
    children: React.ReactElement | React.ReactElement[];
}
declare function MinMaxProvider({ children, initState }: IMinMaxProvider): JSX.Element;
declare function useMinMaxState(): {
    minDate: IDay | null | undefined;
    maxDate: IDay | null | undefined;
};
export { useMinMaxState };
export default MinMaxProvider;
