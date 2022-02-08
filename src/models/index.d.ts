import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CardMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Card {
  readonly id: string;
  readonly name?: string;
  readonly layout?: string;
  readonly cmc?: number;
  readonly colors?: string;
  readonly colorIdentity?: string;
  readonly type?: string;
  readonly supertypes?: string;
  readonly types?: string;
  readonly subtypes?: string;
  readonly rarity?: string;
  readonly set?: string;
  readonly setName?: string;
  readonly text?: string;
  readonly flavor?: string;
  readonly artist?: string;
  readonly number?: string;
  readonly power?: string;
  readonly toughness?: string;
  readonly loyalty?: string;
  readonly language?: string;
  readonly gameFormat?: string;
  readonly legality?: string;
  readonly multiverseid?: string;
  readonly printings?: (string | null)[];
  readonly source?: string;
  readonly legalities?: string;
  readonly originalType?: string;
  readonly originalText?: string;
  readonly imageUrl?: string;
  readonly watermark?: string;
  readonly border?: string;
  readonly reserved?: string;
  readonly releaseDate?: string;
  readonly rulings?: (string | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Card, CardMetaData>);
  static copyOf(source: Card, mutator: (draft: MutableModel<Card, CardMetaData>) => MutableModel<Card, CardMetaData> | void): Card;
}