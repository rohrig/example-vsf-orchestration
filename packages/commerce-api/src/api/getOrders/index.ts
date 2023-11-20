import { Endpoints } from '../../types';

export const getOrders: Endpoints['getOrders'] = async (
  context,
  params
) => {

  return { orders: [{ id: 134324 }, { id: 244524 }] };
};
