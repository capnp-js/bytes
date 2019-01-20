/* @flow */

export type BytesR = Uint8Array;

/* TODO: Uncomment when indexer variance gets fixed in Flow
export interface BytesR {
  +[position: uint]: u8;
  subarray(begin: uint, end: uint): BytesR;
}
*/

export type BytesB = Uint8Array;

/* TODO: Uncomment when indexer variance gets fixed in Flow
export interface BytesB extends BytesR {
  [position: uint]: u8;
  subarray(begin: uint, end: uint): BytesB;
  fill(value: u8, begin: uint, end: uint): void;
  set(source: BytesR, offset: uint): void;
}
*/
