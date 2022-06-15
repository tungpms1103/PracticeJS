
var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);


const list_courses = $('.list-course')

var displayList = {
    course: [
        {
            course:'Kiến thức nền tảng',
            description:'kiến thức nhập môn IT',
            status:'done',
            path:'https://fullstack.edu.vn/courses/lessons-for-newbie',
            image:'./Asset/image/course-1.jpg'
        },
        {
            course:'HTML, CSS',
            description:'HTML, CSS từ Zero đến Hero',
            status:'done',
            path:'https://fullstack.edu.vn/courses/html-css',
            image:'./Asset/image/course-2.jpg'
        },
        {
            course:'responsive',
            description:'Responsive với grid System',
            status:'done',
            path:'https://fullstack.edu.vn/courses/responsive-web-design',
            image:'./Asset/image/course-3.jpg'
        },
        {
            course:'JavaScript cơ bản',
            description:'lập trình javaScript cơ bản',
            status:'done',
            path:'https://fullstack.edu.vn/courses/javascript-co-ban',
            image:'./Asset/image/course-4.jpg'
        },
        {
            course:'JavaScript nâng cao',
            description:'lập trình javaScript nâng cao',
            status:'learning',
            path:'https://fullstack.edu.vn/courses/javascript-nang-cao',
            image:'./Asset/image/course-5.jpg'
        },
        {
            course:'WSL, ubuntu',
            description:'làm việc với terminal và ubuntu',
            status:'waiting',
            path:'https://fullstack.edu.vn/courses/windows-terminal-wsl',
            image:'./Asset/image/course-6.jpg'
        },
        {
            course:'react JS',
            description:'Xây Dựng Website với ReactJS',
            status:'waiting',
            path:'https://fullstack.edu.vn/courses/reactjs',
            image:'./Asset/image/course-7.jpg'
        },
        {
            course:'Node & ExpressJS',
            description:'Node & ExpressJS',
            status:'waiting',
            path:'https://fullstack.edu.vn/courses/nodejs',
            image:'./Asset/image/course-8.jpg'
        },
    ],

    renderCourse: function(){
        // console.log(list_courses);

       var htmls = this.course.map(function(course,index){
            return`
            <div class="course">
                <div class="wrapper" style="background-image: url('${course.image}');">
                    <h2>${course.course}</h2>
                    <a href="${course.path}" target="_blank">
                        <button class="btn-learn">
                        ${course.status === "done" ? 'Re-Learn' : course.status === "learning" ? 'Continue' : 'Learn'}
                        </button>
                    </a>
                    <div class="blur-course"></div>
                </div>
                <div class="description ${course.status === 'done' ? 'done' : course.status === 'learning' ? 'learning' : 'waiting'}">
                    <h2>${course.description}</h2>
                    <p>Status: 
                    <span>${course.status}</span>
                    <i class="fa-solid fa-circle-check status-done"></i>
                    <i class="fa-solid fa-stopwatch status-waiting"></i>
                    <i class="fa-brands fa-leanpub status-learning"></i>
                     </p>
                </div>
             </div>
            `
        });

        list_courses.innerHTML = htmls.join('');
      
    },

    start: function(){
        this.renderCourse();
    }


}

displayList.start();