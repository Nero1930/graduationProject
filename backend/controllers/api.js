const products = [{
  name: 'iPhone',
  price: 6999
}, {
  name: 'Kindle',
  price: 999
}];

const comments = [
  {
    id: 0,
    author: 'nero',
    content: 'some comment',
    time: '4/18/2019, 3:53:00 PM',
    videoId: 3
  },
  {
    id: 1,
    author: 'lixiang',
    content: 'test text',
    time: '4/19/2019, 1:53:33 PM',
    videoId: 1
  }
];

const fn_getComment = async (ctx, next) => {
  ctx.response.type = 'application/json';
  ctx.response.body = { comments }
}

const fn_comment = async (ctx, next) => {
  var id = ctx.params.id;
  var data = ctx.request.body;
  data.videoId = id;
  data.id = comments.length;
  comments.push(data);
  ctx.response.type = 'application/json';
  ctx.response.body = {
    comments
  }
}

module.exports = {
  'GET /api/products': async (ctx, next) => {
    // 设置Content-Type:
    ctx.response.type = 'application/json';
    // 设置Response Body:
    ctx.response.body = {
      products: products
    };
  },
  'POST /api/videos/:id/comment': fn_comment,
  'GET /api/comments': fn_getComment
}
