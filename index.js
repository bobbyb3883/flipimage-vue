var vue = new Vue({
  el: "#app",
  data: {
    appname: "Image Flipper",
    images: [
      "https://images.unsplash.com/photo-1590413332667-433edbbe06a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
      "https://images.unsplash.com/photo-1590396285046-99aad2125229?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=949&q=80",
      "https://images.unsplash.com/photo-1590418606746-018840f9cd0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      "https://images.unsplash.com/photo-1590398874223-e34be697b054?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      "https://images.unsplash.com/photo-1590400088250-0be47f69fe5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2434&q=80",
      "https://images.unsplash.com/photo-1590390057769-0dce1c9db9f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=928&q=80"
    ]
  },
  methods: {
    flipImage: function(img) {
      var imgStyle = document.getElementById(img);
      let rotation = imgStyle.style.transform
      switch (rotation) {
        case 'rotate(0deg)':
          imgStyle.style.transform = "rotate(90deg)";
          break;
        case 'rotate(90deg)':
          imgStyle.style.transform = "rotate(180deg)";
          break;
        case 'rotate(180deg)':
          imgStyle.style.transform = "rotate(270deg)";
          break;
        case 'rotate(270deg)':
          imgStyle.style.transform = "rotate(0deg)";
          break;
        default:
          imgStyle.style.transform = "rotate(90deg)";
      }
    }
  }
});
