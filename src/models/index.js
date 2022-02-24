// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TradingCard, Legality } = initSchema(schema);

export {
  TradingCard,
  Legality
};