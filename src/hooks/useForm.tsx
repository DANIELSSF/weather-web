import { useState, ChangeEvent } from 'react';

export const useForm = <T extends Object>(initialState: T) => {

    const [form, setForm] = useState(initialState);

    const handleCity = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = target;
        setForm({
            ...form,
            [name]: value,
        });
    }

    return ({
        ...form,
        form,
        handleCity
    })
}
