import getListStudents from "./0-get_list_students.js";
test("should return an empty array if no students are available", () => {
    const students = getListStudents();
    expect(students).toEqual([
        { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
        { id: 2, firstName: 'James', location: 'Columbia' },
        { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ]);
});
