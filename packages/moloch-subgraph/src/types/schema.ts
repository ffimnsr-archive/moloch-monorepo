import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt
} from "@graphprotocol/graph-ts";

export class Vote extends Entity {
  constructor(id: string) {
    this.entries = new Array(0);
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Vote entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Vote entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Vote", id.toString(), this);
  }

  static load(id: string): Vote | null {
    return store.get("Vote", id) as Vote | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get proposalIndex(): BigInt {
    let value = this.get("proposalIndex");
    return value.toBigInt();
  }

  set proposalIndex(value: BigInt) {
    this.set("proposalIndex", Value.fromBigInt(value));
  }

  get delegateKey(): Bytes {
    let value = this.get("delegateKey");
    return value.toBytes();
  }

  set delegateKey(value: Bytes) {
    this.set("delegateKey", Value.fromBytes(value));
  }

  get memberAddress(): Bytes {
    let value = this.get("memberAddress");
    return value.toBytes();
  }

  set memberAddress(value: Bytes) {
    this.set("memberAddress", Value.fromBytes(value));
  }

  get uintVote(): i32 {
    let value = this.get("uintVote");
    return value.toI32();
  }

  set uintVote(value: i32) {
    this.set("uintVote", Value.fromI32(value));
  }
}

export class Proposal extends Entity {
  constructor(id: string) {
    this.entries = new Array(0);
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Proposal entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Proposal entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Proposal", id.toString(), this);
  }

  static load(id: string): Proposal | null {
    return store.get("Proposal", id) as Proposal | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): string {
    let value = this.get("timestamp");
    return value.toString();
  }

  set timestamp(value: string) {
    this.set("timestamp", Value.fromString(value));
  }

  get proposalIndex(): BigInt {
    let value = this.get("proposalIndex");
    return value.toBigInt();
  }

  set proposalIndex(value: BigInt) {
    this.set("proposalIndex", Value.fromBigInt(value));
  }

  get delegateKey(): Bytes {
    let value = this.get("delegateKey");
    return value.toBytes();
  }

  set delegateKey(value: Bytes) {
    this.set("delegateKey", Value.fromBytes(value));
  }

  get memberAddress(): Bytes {
    let value = this.get("memberAddress");
    return value.toBytes();
  }

  set memberAddress(value: Bytes) {
    this.set("memberAddress", Value.fromBytes(value));
  }

  get applicant(): Bytes {
    let value = this.get("applicant");
    return value.toBytes();
  }

  set applicant(value: Bytes) {
    this.set("applicant", Value.fromBytes(value));
  }

  get tokenTribute(): BigInt {
    let value = this.get("tokenTribute");
    return value.toBigInt();
  }

  set tokenTribute(value: BigInt) {
    this.set("tokenTribute", Value.fromBigInt(value));
  }

  get sharesRequested(): BigInt {
    let value = this.get("sharesRequested");
    return value.toBigInt();
  }

  set sharesRequested(value: BigInt) {
    this.set("sharesRequested", Value.fromBigInt(value));
  }

  get yesVotes(): BigInt {
    let value = this.get("yesVotes");
    return value.toBigInt();
  }

  set yesVotes(value: BigInt) {
    this.set("yesVotes", Value.fromBigInt(value));
  }

  get noVotes(): BigInt {
    let value = this.get("noVotes");
    return value.toBigInt();
  }

  set noVotes(value: BigInt) {
    this.set("noVotes", Value.fromBigInt(value));
  }

  get processed(): boolean {
    let value = this.get("processed");
    return value.toBoolean();
  }

  set processed(value: boolean) {
    this.set("processed", Value.fromBoolean(value));
  }

  get didPass(): boolean {
    let value = this.get("didPass");
    return value.toBoolean();
  }

  set didPass(value: boolean) {
    this.set("didPass", Value.fromBoolean(value));
  }

  get aborted(): boolean {
    let value = this.get("aborted");
    return value.toBoolean();
  }

  set aborted(value: boolean) {
    this.set("aborted", Value.fromBoolean(value));
  }

  get votes(): Array<string> | null {
    let value = this.get("votes");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set votes(value: Array<string> | null) {
    if (value === null) {
      this.unset("votes");
    } else {
      this.set("votes", Value.fromStringArray(value as Array<string>));
    }
  }
}

export class Applicant extends Entity {
  constructor(id: string) {
    this.entries = new Array(0);
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Applicant entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Applicant entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Applicant", id.toString(), this);
  }

  static load(id: string): Applicant | null {
    return store.get("Applicant", id) as Applicant | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): string {
    let value = this.get("timestamp");
    return value.toString();
  }

  set timestamp(value: string) {
    this.set("timestamp", Value.fromString(value));
  }

  get proposalIndex(): BigInt {
    let value = this.get("proposalIndex");
    return value.toBigInt();
  }

  set proposalIndex(value: BigInt) {
    this.set("proposalIndex", Value.fromBigInt(value));
  }

  get delegateKey(): Bytes {
    let value = this.get("delegateKey");
    return value.toBytes();
  }

  set delegateKey(value: Bytes) {
    this.set("delegateKey", Value.fromBytes(value));
  }

  get memberAddress(): Bytes {
    let value = this.get("memberAddress");
    return value.toBytes();
  }

  set memberAddress(value: Bytes) {
    this.set("memberAddress", Value.fromBytes(value));
  }

  get applicant(): Bytes {
    let value = this.get("applicant");
    return value.toBytes();
  }

  set applicant(value: Bytes) {
    this.set("applicant", Value.fromBytes(value));
  }

  get tokenTribute(): BigInt {
    let value = this.get("tokenTribute");
    return value.toBigInt();
  }

  set tokenTribute(value: BigInt) {
    this.set("tokenTribute", Value.fromBigInt(value));
  }

  get sharesRequested(): BigInt {
    let value = this.get("sharesRequested");
    return value.toBigInt();
  }

  set sharesRequested(value: BigInt) {
    this.set("sharesRequested", Value.fromBigInt(value));
  }

  get didPass(): boolean {
    let value = this.get("didPass");
    return value.toBoolean();
  }

  set didPass(value: boolean) {
    this.set("didPass", Value.fromBoolean(value));
  }

  get aborted(): boolean {
    let value = this.get("aborted");
    return value.toBoolean();
  }

  set aborted(value: boolean) {
    this.set("aborted", Value.fromBoolean(value));
  }

  get votes(): Array<string> | null {
    let value = this.get("votes");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set votes(value: Array<string> | null) {
    if (value === null) {
      this.unset("votes");
    } else {
      this.set("votes", Value.fromStringArray(value as Array<string>));
    }
  }
}

export class Member extends Entity {
  constructor(id: string) {
    this.entries = new Array(0);
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Member entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Member entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Member", id.toString(), this);
  }

  static load(id: string): Member | null {
    return store.get("Member", id) as Member | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get delegateKey(): Bytes {
    let value = this.get("delegateKey");
    return value.toBytes();
  }

  set delegateKey(value: Bytes) {
    this.set("delegateKey", Value.fromBytes(value));
  }

  get shares(): BigInt {
    let value = this.get("shares");
    return value.toBigInt();
  }

  set shares(value: BigInt) {
    this.set("shares", Value.fromBigInt(value));
  }

  get isActive(): boolean {
    let value = this.get("isActive");
    return value.toBoolean();
  }

  set isActive(value: boolean) {
    this.set("isActive", Value.fromBoolean(value));
  }

  get highestIndexYesVote(): BigInt {
    let value = this.get("highestIndexYesVote");
    return value.toBigInt();
  }

  set highestIndexYesVote(value: BigInt) {
    this.set("highestIndexYesVote", Value.fromBigInt(value));
  }

  get tokenTribute(): BigInt {
    let value = this.get("tokenTribute");
    return value.toBigInt();
  }

  set tokenTribute(value: BigInt) {
    this.set("tokenTribute", Value.fromBigInt(value));
  }

  get didRagequit(): boolean {
    let value = this.get("didRagequit");
    return value.toBoolean();
  }

  set didRagequit(value: boolean) {
    this.set("didRagequit", Value.fromBoolean(value));
  }

  get votes(): Array<string> | null {
    let value = this.get("votes");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set votes(value: Array<string> | null) {
    if (value === null) {
      this.unset("votes");
    } else {
      this.set("votes", Value.fromStringArray(value as Array<string>));
    }
  }
}

export class Txs extends Entity {
  constructor(id: string) {
    this.entries = new Array(0);
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Txs entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Txs entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Txs", id.toString(), this);
  }

  static load(id: string): Txs | null {
    return store.get("Txs", id) as Txs | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): string {
    let value = this.get("timestamp");
    return value.toString();
  }

  set timestamp(value: string) {
    this.set("timestamp", Value.fromString(value));
  }

  get memberAddress(): Bytes {
    let value = this.get("memberAddress");
    return value.toBytes();
  }

  set memberAddress(value: Bytes) {
    this.set("memberAddress", Value.fromBytes(value));
  }

  get tokenTribute(): BigInt {
    let value = this.get("tokenTribute");
    return value.toBigInt();
  }

  set tokenTribute(value: BigInt) {
    this.set("tokenTribute", Value.fromBigInt(value));
  }
}
