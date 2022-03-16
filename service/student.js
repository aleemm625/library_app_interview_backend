const StudentDAO = require('../dao/student');

class StudentSerice{
    async createStudent(studentDto) {
        try {
            const {firstName, lastName} = studentDto;
            const dbStudent = await StudentDAO.getOneStudentByNames(firstName,lastName);
            if(!dbStudent || Object.keys(dbStudent).length === 0){
                return await StudentDAO.createStudent(firstName,lastName);    
            }
            
            return {error:'student alread exists'};    
        } catch (error) {
            return error;
        }
    }

    async getAllStudents(){
        try {
            const students = await StudentDAO.getAllStudents();

            return students;
        } catch (error) {
            return error;
        }
    }

    async getOneStudent(studentDto){
        try {
            const {id} = studentDto;
            const student = await StudentDAO.getOneStudent(id);
            if(!student || Object.keys(student).length === 0){
                return {msg:'student not found'}
            }

            return student;
        } catch (error) {
            return error;
        }
    }
}

module.exports = new StudentSerice();