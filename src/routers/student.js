const express = require("express");
const router = new express.Router();
const Student = require("../models/students");

// //define the router
// router.get("/students",(req,res)=>{
//     res.send("good morning")
// })



// app.get("/",(req,res)=>{
//     res.send("hiii how are you")
// })

// create a new student

//using promises
// app.post("/students", (req, res) => {
//   console.log(req.body);
//   const user = new Student(req.body);

  
//   user
//     .save()
//     .then(() => {
//       res.status(201).send(user);
//     })
//     .catch((e) => {
//       res.status(400).send(e);
//     });

//   // res.send("hello");
// });

//using async await
router.post("/students", async (req, res) => {
    try {
      const user = new Student(req.body);
      const createUser = await user.save();
      res.status(201).send(createUser);
  
    } catch (e) {
      res.status(400).send(e);
    }
  });
  
  
  
  //get the data of registered students
  router.get("/students",async (req,res)=>{
  
      try{
          const studentsData = await Student.find();
          res.send(studentsData);
      }catch(e){
          res.send(e);
      }
  })
  
  //get the data of individual student using id
  router.get("/students/:id", async (req,res)=>{
      try{
          const _id = req.params.id;
          const studentData = await Student.findById(_id);
          console.log(studentData);
  
          if(!studentData){
              return res.status(404).send();
          }else{
              res.send(studentData)
          }
  
      }catch(e){
          res.status(500).send(e);
  
      }
  })
  
  
  //update the data of registered students
  
  router.patch("/students/:id",async(req, res)=>{
      try{
          const _id = req.params.id;
          const updateStudents = await Student.findByIdAndUpdate(_id,req.body,{
              new:true
          } );
          res.send(updateStudents);
      }catch(e){
              res.status(404).send(e);
      }
  })
  
  
  //delete the data of registered students
  
  router.delete("/students/:id",async(req,res)=>{
      try{
          //const id = req.params.id;
          const deleteStudent = await Student.findByIdAndDelete(req.params.id)
          if(!req.params.id){
              return res.status(404).send();
          }
          res.send(deleteStudent)
      }catch(e){
          res.status(500).send(e);
      }
  })
  

module.exports = router;