const studentService = require('../service/student');

class StudentController {
    
    async createStudent(req,res) {
        try {
            const student = await studentService.createStudent(req.body);
            console.log(student);
            
            res.status(201).json(student)   
        } catch (error) {
            console.log(error);
            
            res.status(500).json({error})
        }
    }  

   async getAllStudents(req, res) {
       try {
           const students = await studentService.getAllStudents();
            console.log(students);
            
            res.status(200).json(students);   
       } catch (error) {
           console.log(error);

           res.status(500).json({error})
       }
    }

    async getOneStudent(req, res){
        try {
            const student = await studentService.getOneStudent(req?.params);
            console.log(student);
            
            res.status(200).json(student);    
        } catch (error) {
            console.log(error);

            res.status(500).json({error})
        }
        
    }

}

module.exports = new StudentController();
