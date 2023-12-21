//redux hooks
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {RootState, AppDispatch} from '@/app/store/store';
import {calculateTimeOfDay} from "@/app/lib/service";
import { selectWeatherForTheme } from "@/app/store/slices/weather.slice";

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

////

export const useTheme = (): string[] => {
    const defaultClasses = ['default', 'default'];

    const weatherInfo = useAppSelector(selectWeatherForTheme);
    if(!weatherInfo) return defaultClasses;

    const daytime = calculateTimeOfDay(weatherInfo.solarCycle.sunset, weatherInfo.solarCycle.sunrise);

    const weatherType = weatherInfo.mainType.toLowerCase();

    const weathersTypes = ['clear', 'snow', 'clouds', 'mist', 'rain'];
    if (!weathersTypes.includes(weatherType)) return defaultClasses;

    return [daytime, weatherType];
}
