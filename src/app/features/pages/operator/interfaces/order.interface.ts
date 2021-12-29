export interface IOrder {
  tableId: string,
  productsList: IProduct[]
}

export interface IProduct {
  productId?: number;
  name: string;
  price: string;
  quantity?: number;
  description?: string;
  typeId: number;
}
