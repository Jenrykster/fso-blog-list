const listHelper = require('../utils/list_helper');

const exampleBlog = {
  _id: '5a422aa71b54a676234d17f8',
  title: 'Go To Statement Considered Harmful',
  author: 'Edsger W. Dijkstra',
  url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
  likes: 5,
  __v: 0,
};

test('dummy returns one', () => {
  const blogs = [];

  const result = listHelper.dummy(blogs);
  expect(result).toBe(1);
});

describe('total likes', () => {
  test('of empty list is zero', () => {
    expect(listHelper.totalLikes([])).toBe(0);
  });

  test('when list has only one blog equals the likes of that', () => {
    const listWithOneBlog = [exampleBlog];
    expect(listHelper.totalLikes(listWithOneBlog)).toBe(5);
  });

  test('of a bigger list is calculated correctly', () => {
    const exampleBlog2 = { ...exampleBlog };
    exampleBlog2.likes = 10;
    const biggerList = [exampleBlog, exampleBlog2, exampleBlog2, exampleBlog, exampleBlog2];

    expect(listHelper.totalLikes(biggerList)).toBe(40);
  });
});

describe.only('favorite blog', () => {
  test('of empty list is undefined', () => {
    expect(listHelper.favoriteBlog([])).toBe(undefined);
  });

  test('when list has only one blog is that same blog', () => {
    const expectedAnswer = {
      title: exampleBlog.title,
      author: exampleBlog.author,
      likes: exampleBlog.likes,
    };

    expect(listHelper.favoriteBlog([exampleBlog])).toEqual(expectedAnswer);
  });

  test('of a list with multiple blogs is the one with the most likes', () => {
    const exampleBlog2 = { ...exampleBlog, likes: 20 };
    const exampleBlog3 = { ...exampleBlog, likes: 50 };

    const expectedAnswer = {
      title: exampleBlog3.title,
      author: exampleBlog3.author,
      likes: exampleBlog3.likes,
    };

    expect(listHelper.favoriteBlog([exampleBlog, exampleBlog2, exampleBlog3])).toEqual(
      expectedAnswer,
    );
  });
});
