// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Card, Legality } = initSchema(schema);

export {
  Card,
  Legality
};