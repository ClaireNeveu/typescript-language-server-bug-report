// If the following import is changed to "./two" there is no problem
import { Char, DataType, SqlBigInt } from "two"

export type Matcher<T extends DataType> =
  T extends Char ? string :
  T extends SqlBigInt ? bigint : never

// Language server correctly infers the type bigint
type Test = Matcher<SqlBigInt>