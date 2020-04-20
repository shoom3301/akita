(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(1),o=n(9),r=(n(0),n(184)),i={title:"Entity Store"},c={id:"entities/entity-store",title:"Entity Store",description:"For the most part, the stores you'll require in your applications will be entity stores. You can think of an entity store as a table in a database, where each table represents a flat collection of entities. ",source:"@site/docs/entities/entity-store.mdx",permalink:"/akita/docs/entities/entity-store",editUrl:"https://github.com/datorama/akita/edit/master/docs/docs/entities/entity-store.mdx",sidebar:"docs",previous:{title:"Store Config",permalink:"/akita/docs/config"},next:{title:"Query Entity",permalink:"/akita/docs/entities/query-entity"}},s=[{value:"Extend the Entity Store",id:"extend-the-entity-store",children:[]},{value:"Entity Id",id:"entity-id",children:[]},{value:"API",id:"api",children:[{value:"<code>set()</code>",id:"set",children:[]},{value:"<code>add()</code>",id:"add",children:[]},{value:"<code>update()</code>",id:"update",children:[]},{value:"<code>remove()</code>",id:"remove",children:[]},{value:"<code>upsert()</code>",id:"upsert",children:[]},{value:"<code>upsertMany()</code>",id:"upsertmany",children:[]},{value:"<code>replace()</code>",id:"replace",children:[]},{value:"<code>move()</code>",id:"move",children:[]},{value:"<code>setLoading()</code>",id:"setloading",children:[]},{value:"<code>setError()</code>",id:"seterror",children:[]}]}],d={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"For the most part, the stores you'll require in your applications will be entity stores. You can think of an entity store as a table in a database, where each table represents a flat collection of entities.\nAkita's ",Object(r.b)("inlineCode",{parentName:"p"},"EntityStore")," simplifies the process, giving you everything you need to manage it."),Object(r.b)("p",null,"Let's see how we can use it to create a ",Object(r.b)("inlineCode",{parentName:"p"},"todos")," table, i.e., an ",Object(r.b)("inlineCode",{parentName:"p"},"EntityStore")," managing a ",Object(r.b)("inlineCode",{parentName:"p"},"Todo")," object:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todos.store.ts"',title:'"todos.store.ts"'}),"import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';\nimport { Todo } from './todo.model';\n\nexport interface TodosState extends EntityState<Todo, number> { }\n\n@StoreConfig({ name: 'todos' })\nexport class TodosStore extends EntityStore<TodosState> {\n  constructor() { \n    super() ;\n  }\n}\n")),Object(r.b)("p",null,"First, we need to define the store's interface. In our case, we can make do with extending the ",Object(r.b)("inlineCode",{parentName:"p"},"EntityState")," from Akita, providing it with the ",Object(r.b)("inlineCode",{parentName:"p"},"Todo")," Entity type and the ",Object(r.b)("inlineCode",{parentName:"p"},"id")," type, which in our case is a ",Object(r.b)("inlineCode",{parentName:"p"},"number"),"."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"EntityState")," has the following signature:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export interface EntityState<Entity = any, IDType = any> {\n  entities: HashMap<Entity>;\n  ids: IDType[];\n  loading: boolean;\n  error: any;\n}\n")))),Object(r.b)("h2",{id:"extend-the-entity-store"},"Extend the Entity Store"),Object(r.b)("p",null,"Sometimes it's useful to extend the store and add more properties to it, for example, you might want to save the todos active filter.\nTo do so, first, we need to update our interface with the ",Object(r.b)("inlineCode",{parentName:"p"},"property")," type:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'{5} title="todos.store.ts"',"{5}":!0,title:'"todos.store.ts"'}),"import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';\nimport { Todo } from './todo.model';\n\nexport interface TodosState extends EntityState<Todo, number> {\n  filter: string;\n}\n")),Object(r.b)("p",null,"Next, if we want to pass an initial state for this property, we can do it in the constructor as we did with a Store:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'{11} title="todos.store.ts"',"{11}":!0,title:'"todos.store.ts"'}),"import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';\nimport { Todo } from './todo.model';\n\nexport interface TodosState extends EntityState<Todo, number> {\n  filter: string;\n}\n\n@StoreConfig({ name: 'todos' })\nexport class TodosStore extends EntityStore<TodosState> {\n  constructor() {\n    super({ filter: 'ALL' });\n  }\n}\n")),Object(r.b)("p",null,"Now we can update the property by using the ",Object(r.b)("inlineCode",{parentName:"p"},"update()")," method. For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"store.update({ filter: 'COMPLETED' });\n")),Object(r.b)("h2",{id:"entity-id"},"Entity Id"),Object(r.b)("p",null,"By default, Akita takes the ",Object(r.b)("inlineCode",{parentName:"p"},"id")," key from the entity ",Object(r.b)("inlineCode",{parentName:"p"},"id")," field. To change it, you can pass the ",Object(r.b)("inlineCode",{parentName:"p"},"idKey")," option to the store config:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todos.store.ts"',title:'"todos.store.ts"'}),"export interface TodosState extends EntityState<Todo, number> {}\n\n@StoreConfig({ name: 'todos', idKey: '_id' })\nexport class TodosStore extends EntityStore<TodosState> {\n  constructor() {\n    super();\n  }\n}\n")),Object(r.b)("p",null,"By using this model, you will receive a lot of built-in functionality from Akita:"),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)("h3",{id:"set"},Object(r.b)("inlineCode",{parentName:"h3"},"set()")),Object(r.b)("p",null,"Replace current collection with the provided collection, and ",Object(r.b)("strong",{parentName:"p"},"resets")," the active entity:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// Pass an array\nstore.set([ Entity, Entity ]);\n// Pass an object\nstore.set({ 1: Entity, 2: Entity });\n// Set the active id\nstore.set([ Entity, Entity ], { activeId: 1 });\n")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you pass an object, Akita doesn't guarantee the order of the data received."))),Object(r.b)("h3",{id:"add"},Object(r.b)("inlineCode",{parentName:"h3"},"add()")),Object(r.b)("p",null,"Add an entity or entities to the store:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// Add multiple\nstore.add([Entity, Entity]);\n// Add one \nstore.add(Entity);\n\n// Prepend\nstore.add([Entity, Entity], { prepend: true });\nstore.add(Entity, { prepend: true })\n")),Object(r.b)("h3",{id:"update"},Object(r.b)("inlineCode",{parentName:"h3"},"update()")),Object(r.b)("p",null,"Update an entity or entities in the store:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// Update one\nstore.update(entityId, { name: 'New Name' ));\n\n// Use a predicate function\nstore.update(({ name }) => name === 'John', {\n  name: 'New Name'\n});\n\n// Use a callback function\nstore.update(entityId, entity => {\n  return {\n    config: {\n      ...entity.config,\n      date\n    }\n  }\n});\n\n// Update multiple\nstore.update([id, id, id], { count: 5 });\n\n// Update all\nstore.update(null, { name: 'New Name' });\n")),Object(r.b)("h3",{id:"remove"},Object(r.b)("inlineCode",{parentName:"h3"},"remove()")),Object(r.b)("p",null,"Remove one or more entities from the store:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// Remove one\nstore.remove(5);\n\n// Remove multiple\nstore.remove([1,2,3]);\n\n// Remove by predicate\nstore.remove(({ name }) => name === 'John');\n\n// Remove all\nstore.remove();\n")),Object(r.b)("h3",{id:"upsert"},Object(r.b)("inlineCode",{parentName:"h3"},"upsert()")),Object(r.b)("p",null,"Insert or update an entity. Creates a new entity when no entity matches the ",Object(r.b)("inlineCode",{parentName:"p"},"id"),"; otherwise, it performs an update:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"store.upsert(id, { isOpen: true });\n")),Object(r.b)("h3",{id:"upsertmany"},Object(r.b)("inlineCode",{parentName:"h3"},"upsertMany()")),Object(r.b)("p",null,"Insert or update multiple entities. Creates a new entity when no entity matches the ",Object(r.b)("inlineCode",{parentName:"p"},"id"),"; otherwise, it performs an update:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"store.upsertMany([entity, entity]);\n")),Object(r.b)("h3",{id:"replace"},Object(r.b)("inlineCode",{parentName:"h3"},"replace()")),Object(r.b)("p",null,"Replace an entity (except the ",Object(r.b)("inlineCode",{parentName:"p"},"id"),"):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"store.replace(id, newEntity);\nstore.replace([id, id, id], newEntity);\n")),Object(r.b)("h3",{id:"move"},Object(r.b)("inlineCode",{parentName:"h3"},"move()")),Object(r.b)("p",null,"Move an entity from the current ",Object(r.b)("inlineCode",{parentName:"p"},"index")," to a new ",Object(r.b)("inlineCode",{parentName:"p"},"index"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"store.move(fromIndex, toIndex);\n")),Object(r.b)("h3",{id:"setloading"},Object(r.b)("inlineCode",{parentName:"h3"},"setLoading()")),Object(r.b)("p",null,"Update the store's ",Object(r.b)("inlineCode",{parentName:"p"},"loading")," state. The initial value is set to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," and is switched to ",Object(r.b)("inlineCode",{parentName:"p"},"false")," when you call ",Object(r.b)("inlineCode",{parentName:"p"},"store.set()"),". This can come in handy for indicating ",Object(r.b)("inlineCode",{parentName:"p"},"loading"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"store.setLoading(true);\n")),Object(r.b)("h3",{id:"seterror"},Object(r.b)("inlineCode",{parentName:"h3"},"setError()")),Object(r.b)("p",null,"Update the store's ",Object(r.b)("inlineCode",{parentName:"p"},"error")," state:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"store.setError(error);\n")))}l.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),l=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=l(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,u=p["".concat(i,".").concat(m)]||p[m]||b[m]||r;return n?o.a.createElement(u,c({ref:t},d,{components:n})):o.a.createElement(u,c({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<r;d++)i[d]=n[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);