import React from 'react';
import { IDay } from 'src/type';
interface ICalenderProvider {
    type?: string;
    initCalender: IDay;
    children: React.ReactElement | React.ReactElement[];
}
declare function CalenderProvider({ children, initCalender }: ICalenderProvider): JSX.Element;
declare function useCalenderState(): IDay;
declare function useSetCalenderState(): React.Dispatch<React.SetStateAction<IDay>>;
declare function useCalenderActions(): {
    changeCalender: (newValue: IDay) => void;
};
export { useCalenderState, useSetCalenderState, useCalenderActions };
export default CalenderProvider;
