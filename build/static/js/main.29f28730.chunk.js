(this["webpackJsonpmy-library-app"]=this["webpackJsonpmy-library-app"]||[]).push([[0],{16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),l=a(4),i=a(5),s=a(7),u=a(6),c=a(8),h=a(1),m=a.n(h),p=function(e){var t=e.title,a=void 0===t?"No Title Provided":t,n=e.author,o=void 0===n?"No Author":n,l=e.pages,i=void 0===l?0:l,s=e.release,u=void 0===s?"Unknown":s,c=e.freeBookmark;return r.a.createElement("section",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,"By: ",o),r.a.createElement("p",null,"Pages: ",i," pages"),r.a.createElement("p",null,"Release Date: ",u),r.a.createElement("p",null,"Free Bookmark Today: ",c?"Yes!":"No!"))},d=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"The Library is hiring. Go to www.CantonLibrary.com/jobs for more."))},g=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"The Library is Not hiring. Please check back again later for more info. "))},k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={open:!0,freeBookmark:!0,hiring:!0,data:[],loading:!1},a.toggleOpenClosed=function(){a.setState((function(e){return{open:!e.open}}))},a.toggleFreeBookmark=function(){a.setState((function(e){return{freeBookmark:!e.freeBookmark}}))},a}return Object(c.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),fetch("https://hplussport.com/api/products/order/price/sort/asc/qty/1").then((function(e){return e.json()})).then((function(t){return e.setState({data:t,loading:!1})}))}},{key:"componentDidUpdate",value:function(){console.log("the component just updated")}},{key:"render",value:function(){var e=this;console.log(this.state);var t=this.props.books;return r.a.createElement("div",null,this.state.hiring?r.a.createElement(d,null):r.a.createElement(g,null),this.state.loading?"loading...":r.a.createElement("div",null,this.state.data.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("h3",null,"Library Product of the week!"),r.a.createElement("h4",null,e.name),r.a.createElement("img",{alt:e.name,src:e.image,height:200}))}))),r.a.createElement("h1",null,"Today The Library is  ",this.state.open?"open!":"closed!"," "),r.a.createElement("button",{id:"b1",onClick:this.toggleOpenClosed},"Change Open/Closed"),r.a.createElement("h3",null,"Free Bookmark Today: ",this.state.freeBookmark?"yes!":"no!"),r.a.createElement("button",{id:"b1",onClick:this.toggleFreeBookmark},"Free Bookmark"),t.map((function(t,a){return r.a.createElement(p,{key:a,title:t.title,author:t.author,pages:t.pages,release:t.release,freeBookmark:e.state.freeBookmark})})))}}]),t}(r.a.Component);k.defaultProps={books:[{title:"Tahoe Tales",author:"Chet Whitley",pages:"1000",release:1997}]},p.propTypes={title:m.a.string,author:m.a.string,pages:m.a.number,release:m.a.number,freeBookmark:m.a.bool};var f=k;Object(o.render)(r.a.createElement(f,{books:[{title:"Hunger",author:"Roxane Gay",pages:320,release:2017},{title:"The Sun Also Rises",author:"Ernest Hemingway",pages:260,release:1926},{title:"White Teeth",author:"Zadie Smith",pages:480,release:2001},{title:"Cat's Cradle",author:"Kurt Vonnegut",pages:304,release:1998}]}),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.29f28730.chunk.js.map