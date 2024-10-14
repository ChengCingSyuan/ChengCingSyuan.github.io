var posts=["2024/09/24/test-new/","2024/09/24/nezha/","2024/10/14/new-page/","2024/09/24/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };