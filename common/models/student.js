'use strict';

module.exports = function(Student) {
    
    //list students
    Student.listStudents = function(cb) {
        Student.find({
            fields: {
                name: false
            }
        }, cb);
    };
    Student.remoteMethod('listStudents', {
        returns: {arg: 'students', type: 'array'},
        http: {path:'/list-students', verb: 'get'}
    });

};
