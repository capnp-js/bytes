/* @flow */

type uint = number;
type u8 = number;

type Arrayish = {
  +length: uint,
  ...,
};

export opaque type BytesR: Arrayish = Uint8Array;
export opaque type BytesB: BytesR = Uint8Array;

export function create(length: uint): BytesB { // eslint-disable-line no-shadow
  return new Uint8Array(length);
}

export function unmask(bytes: BytesB): Uint8Array {
  return bytes;
}

export function unsafeUnmask(bytes: BytesR): Uint8Array {
  return bytes;
}

export function get(offset: uint, bytes: BytesR): u8 {
  return bytes[offset];
}

export function set(value: uint, offset: uint, bytes: BytesB): void {
  bytes[offset] = value;
}

export function getSubarray<T: BytesR>(begin: uint, end: uint, bytes: T): T {
  return bytes.subarray(begin, end);
}

export function setSubarray(source: BytesR, offset: uint, target: BytesB): void {
  target.set(source, offset);
}

export function fill(value: u8, begin: uint, end: uint, bytes: BytesB): void {
  bytes.fill(value, begin, end);
}
