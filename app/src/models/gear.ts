import Item from './item';

export default interface InventoryRecord {
	item: Item;
	count: number;
	cost: number;
}
