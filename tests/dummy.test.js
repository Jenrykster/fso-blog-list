const listHelper = require('../utils/list_helper');

test('dummy returns one', () => {
  const blogs = [];

  const result = listHelper.dummy(blogs);
  expect(result).toBe(1);
});

describe('total likes', () => {
  const exampleBlog = {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0,
  };

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