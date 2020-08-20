const assert = require('assert');

const {
  concat,
  map,
  filter,
  find,
  pipe
} = require('../../lib/index');

describe('Tests', function () {

  it('test concat', function () {

    try {
      const arr1 = ["spray", "limit", "scale", "Javascript"];
      const arr2 = ["1", "2", "3", "4"];
      assert.equal(concat(arr1, arr2), [
        "spray", "limit", "scale", "Javascript", "1", "2", "3", "4"
      ])
    } catch (error) {
      global.console.error(error);
    }


  });

  it('test map', function () {
    try {
      const arr = ["spray", "limit", "elite", "Javascript"];
      assert.equal(
        map(arr, (item, index) => ({
          id: index,
          name: item
        })),
        [{
            id: 0,
            name: "spray"
          },
          {
            id: 1,
            name: "limit"
          },
          {
            id: 2,
            name: "elite"
          },
          {
            id: 3,
            name: "Javascript"
          },
        ]
      );
    } catch (error) {
      global.console.error(error);
    }
  });

  it('test filter', function () {
    try {
      const arr = [
        "spray",
        "limit",
        "elite",
        "exuberant",
        "destruction",
        "present",
      ];
      assert.equal(
        filter(arr, (element) => element.length > 6),
        ["exuberant", "destruction", "present"]
      );
    } catch (error) {
      global.console.error(error);
    }
  });

  it("Test Find", function () {
    try {
      const arr = [{
          id: 0,
          name: "spray"
        },
        {
          id: 1,
          name: "limit"
        },
      ];
      const id = 1;
      assert.equal(
        find(arr, (element) => element.id === id), {
          id: 1,
          name: "limit"
        }
      );
    } catch (error) {
      global.console.error(error);
    }
  });

  it('test pipe', function () {
    try {
      const arr = ["spray", "limit", "elite", "exuberant", "destruction"];

      assert.equal(
        pipe(arr, [
          filter((item) => item.length > 6),
          map((item, index) => ({
            id: index,
            name: item
          })),
        ]),
        [{
            id: 0,
            name: "exuberant"
          },
          {
            id: 1,
            name: "destruction"
          },
        ]
      );
    } catch (error) {
      global.console.error(error);
    }
  });
});