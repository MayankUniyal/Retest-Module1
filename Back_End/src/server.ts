import App from './app';
import PostController from './post/post.controller';
 
const app = new App(
  [
    new PostController(),
  ],
  5000,
);
app.listen();