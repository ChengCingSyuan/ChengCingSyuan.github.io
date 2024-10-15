var posts=["2024/10/14/nezha/","2024/10/13/Netcup_Restallation/","2024/10/15/PTbox-Installation/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };