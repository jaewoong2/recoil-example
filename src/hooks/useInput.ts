import { useCallback, useState } from 'react';
const useInput = <T>(initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>, (state: any) => void] => {
    const [value, setValue] = useState<T>(initialValue);
    const onChangeValue = useCallback((state: T) => {
        setValue(state);
    }, [])

    return [value, setValue, onChangeValue]
}

export { useInput }