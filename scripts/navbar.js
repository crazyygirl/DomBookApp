let navbar = ()=>{
 let navCard = `<div id="navcontainer">
      <div id="nav-links">
        <a href="index.html">Home</a>

         <a href="books.html">Books</a>
         <a href="admin.html">Admin</a>

      </div>
    </div>`;
 document.getElementById("nav").innerHTML = navCard;
}
navbar()