const Books = (title, author) => (
 <div>
 <ul>
   <div className="book flexRow"> <li >title: Book1 Author: CHRIS</li> 
   <button className="remove">remove</button>
   </div>
 </ul>
  
  <div>
    <form className="Form flexColumn">
        <input type="text" id="author" placeholder="Author"/>
        <input type="text" id="title" placeholder="Book Title"/>
        <button type="submit">Submit</button>
    </form>
  </div>
 </div>
 
)

export default Books; 