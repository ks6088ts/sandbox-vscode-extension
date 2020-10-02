import * as assert from "assert";
import { getDateFormat } from "../../dateformat";

suite("dateformat Test Suite", () => {
  test("dateformat test", () => {
    let testDateString = "2020-1-1";
    let testDate: Date = new Date(testDateString);
    assert.equal(testDateString, getDateFormat(testDate));
  });
});
