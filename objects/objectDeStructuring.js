// De-Structuring of object------>

const course={
    courseName:"jsHindi",
    prize:"999",
    courseInstructor:"hem"
}

console.log(course.courseInstructor);

// new method for accessing keys in object--->
// const{key of object to access:name if you want to give }=name of object           
const {courseInstructor:instructor}=course

console.log(instructor);


// how in react object-destructuring looks like ---->

const navbar=({company})=>{

}

navbar(company="hem")