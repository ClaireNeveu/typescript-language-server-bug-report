import { Matcher } from '../src/main'
import { SqlBigInt } from '../src/two'

// Language server incorrectly infers the type string
type Test = Matcher<SqlBigInt>