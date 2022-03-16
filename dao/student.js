const db = require('../db/db');

class StudentDAO {
  async createStudent(firstName, lastName) {
    const [student] = await db('student')
      .insert({
        first_name: firstName,
        last_name: lastName,
      })
      .returning(['id','first_name','last_name']);

    return student || {};
  }

  async getAllStudents() {
      const students = await db('student')
      .select('id','first_name', 'last_name')

      return students || [];
    }

    async getOneStudent(id) {
        const [student] = await db('student')
        .select('id','first_name', 'last_name').where({id})

        return student || {};
    }

    async getOneStudentByNames(firstName, lastName) {
        const [student] = await db('student')
        .select('id','first_name', 'last_name').where({first_name: firstName, last_name: lastName})
    
        return student || {};
    }
}

module.exports = new StudentDAO();