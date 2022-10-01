const dummy = (blogs) => 1;

const totalLikes = (blogs = []) => blogs.reduce((prev, curr) => prev + curr.likes, 0);

const favoriteBlog = (blogs = []) => {
  if (blogs.length === 0) return undefined;

  const initialValue = {
    title: '',
    author: '',
    likes: 0,
  };

  return blogs.reduce((prev, curr) => {
    if (prev.likes > curr.likes) return prev;
    return {
      title: curr.title,
      author: curr.author,
      likes: curr.likes,
    };
  }, initialValue);
};
module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
