const translate = require("./pigLatin");
test("words that start with a vowel should add 'way' to the end of the word ", () => {
  expect(translate("apple")).toEqual("appleway");
});
test("words that start with a vowel should add 'way' to the end of the word ", () => {
  expect(translate("omicron")).toEqual("omicronway");
});
test("words that start with a vowel should add 'way' to the end of the word ", () => {
  expect(translate("elephant")).toEqual("elephantway");
});
test("words that start with a vowel should add 'way' to the end of the word ", () => {
  expect(translate("initial")).toEqual("initialway");
});
test("words that start with a vowel should add 'way' to the end of the word ", () => {
  expect(translate("umbrella")).toEqual("umbrellaway");
});
test("words that start with 1 consonant should move that consonant to the end and add 'ay'", () => {
  expect(translate("hello")).toEqual("ellohay");
});
test("words that start with 1 consonant should move that consonant to the end and add 'ay'", () => {
  expect(translate("babe")).toEqual("abebay");
});
test("words that start with 1 consonant should move that consonant to the end and add 'ay'", () => {
  expect(translate("muffin")).toEqual("uffinmay");
});
test("words that start with 1 consonant should move that consonant to the end and add 'ay'", () => {
  expect(translate("situate")).toEqual("ituatesay");
});
test("words that start with 1 consonant should move that consonant to the end and add 'ay'", () => {
  expect(translate("popcorn")).toEqual("opcornpay");
});
test("words that start with 2 or more consonants should move the consonants to the end and add 'ay'", () => {
  expect(translate("grand")).toEqual("andgray");
});
test("words that start with 2 or more consonants should move the consonants to the end and add 'ay'", () => {
  expect(translate("bro")).toEqual("obray");
});
test("words that start with 2 or more consonants should move the consonants to the end and add 'ay'", () => {
  expect(translate("press")).toEqual("esspray");
});
test("words that start with 2 or more consonants should move the consonants to the end and add 'ay'", () => {
  expect(translate("prime")).toEqual("imepray");
});
test("words that start with 2 or more consonants should move the consonants to the end and add 'ay'", () => {
  expect(translate("blue")).toEqual("ueblay");
});
test("words that start with 2 or more consonants should move the consonants to the end and add 'ay'", () => {
  expect(translate("scrap")).toEqual("apscray");
});
test("words that start with 2 or more consonants should move the consonants to the end and add 'ay'", () => {
  expect(translate("scream")).toEqual("eamscray");
});
test("words that start with 2 or more consonants should move the consonants to the end and add 'ay'", () => {
  expect(translate("Shrimp")).toEqual("impshray");
});
test("input that does not contain a vowel should return a request that a word with a vowel be entered", () => {
  expect(translate("wwwwwww")).toEqual("Please enter a word with a vowel");
});
