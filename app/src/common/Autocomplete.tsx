import * as ReactAutocomplete from 'react-autocomplete';
import * as React from 'react';

interface Props<T> {
	items: T[];
	value: string;
	itemValue: keyof T;
	valueSetter: (value: string) => void;
	onSelect: React.Dispatch<React.SetStateAction<T>> | ((selected: T) => void);
	itemRender?: (item: T, isHighlighted: boolean) => React.ReactNode;
}

const Autocomplete = <_, T>(props: Props<T>) => {
	const { itemValue, valueSetter, onSelect: propOnSelect, itemRender, ...directProps } = props;

	const onChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => valueSetter(value);

	const onSelect = (value: string, item: T) => {
		valueSetter(value);
		propOnSelect(item as T);
	};

	const getItemValue = (item: T) => String(item[itemValue]);

	const defaultItemRender = (item: T, isHighlighted: boolean) => (
		<div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>{getItemValue(item)}</div>
	);

	const renderItem = itemRender ?? defaultItemRender;

	return <ReactAutocomplete {...directProps} {...{ getItemValue, renderItem, onChange, onSelect }} />;
};

export default Autocomplete;
