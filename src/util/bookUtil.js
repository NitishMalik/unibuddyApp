import { data as globalData } from "./data";
import { getTitleById } from "./titleUtil";

const getBookData = id => {
  //get author
  const author = globalData.authors.filter(author => {
    if (author.book_id === id) return author.author;
  })[0];
  const title = getTitleById(id);
  const summary = globalData.summaries.filter(summary => {
    if (summary.id === id) return summary.summary;
  })[0];
  return {
    id: id,
    author: author.author,
    title: title,
    summary: summary.summary
  };
};

export { getBookData as GetBookData };
