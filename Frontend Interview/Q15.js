//Q1 ->  what is use of semantic code

//answer :

// semantic code -> <form> , <section> , <artcile> , <table>

// 1. semantic code describe all the content inside it to browser and developer
// 2. non -semantic code like - <div> , <span> doesnot explain anything.
// 3. it is use to understand to user.
// 4. It is the best way for accesibility and seo

//Q -> async and defer attribute

//answer :

/*

  we use to import js file 3 ways

  <script src='' />
  <script async src='' />
  <script defer src='' />

  1. for the normal script :

   parsing html -> download js and excuting js (stop parsing html) -> resume parsing html

   for async and defer :

   it gives the js file lower piority without interupting html parsing.

 2 . = aysnc vs defer =

  async : parsing html ( paralally download js) -> excuting js (block parsing ) -> resume parsing
  defer : parsing whole html ( paralally download js ) -> excuting js

 3 . Async and defer only works with external js file , cannot use with internal js file

 4. async download with be not in sequential order but defer will be on sequential order.
*/
