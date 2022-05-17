let courses = [
  { name: "Courses in England", prices: [0, 100] }, 
  { name: "Courses in Germany", prices: [500, null] }, 
  { name: "Courses in Italy", prices: [100, 200] }, 
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];


const filtered = (rangeGiven) => (courses.filter(function(course){
    //от 
    if (rangeGiven[1] == null) return course.prices[0]>=rangeGiven[0]||course.prices[1]>=rangeGiven[0];
    //до
    else if (rangeGiven[0] == null) return course.prices[1]<=rangeGiven[1] && course.prices[0] <= rangeGiven[1];
    //в интервале
    else return (course.prices[0]>=rangeGiven[0]||course.prices[1]>=rangeGiven[0])&&(course.prices[1]<=rangeGiven[1] && course.prices[0] <= rangeGiven[1]);
}));


console.log(filtered(requiredRange3));

//console.log(filtered(requiredRange2));