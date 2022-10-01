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

const mostBlogs = (blogs = []) => {
  if (blogs.length === 0) return undefined;

  const authorsWithNumOfBlogs = blogs.reduce((prev, curr) => {
    const existingAuthorIndex = prev.findIndex((item) => item.author === curr.author);

    let newArr = [...prev];

    if (existingAuthorIndex >= 0) newArr[existingAuthorIndex].blogs += 1;
    newArr = prev.concat({
      author: curr.author,
      blogs: 1,
    });

    return newArr;
  }, []);

  console.log(authorsWithNumOfBlogs);

  return authorsWithNumOfBlogs.reduce(
    (prev, curr) => {
      if (prev.blogs > curr.blogs) return prev;
      return curr;
    },
    { blogs: 0 },
  );
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
};
