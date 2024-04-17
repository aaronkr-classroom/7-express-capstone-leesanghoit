// homeController.js
"use strict";

/**
 * Listing 12.5 (p. 178)
 * 홈 컨트롤러로의 라우팅
 */
exports.respondWithName1; // @TODO: 사용자 정의 EJS 뷰를 사용한 응답

/**
 * Listing 12.9 (p. 182)
 * 콘텐츠의 설정과 렌더링된 뷰에 전달
 * 
 * [노트] 뷰 안에서는 offeredCourses라는 변수명을 통해 배열에 접근할 수 있다.
 * 홈 컨트롤러 내에서 이 배열은 courses라는 이름으로 다룬다.
 */
exports.respondWithName = (req, res) => {
    let paramsName = req.params.myName;
    res.render('index', {
        name: paramsName,
        people: {
            first: {
                name: "Mary",
                city: "Jeonju"
            },
            second: {
                name: "Oppenheimer",
                city: "Los Alamos"
            }
        }
    });    
}; // @TODO: 요청 매개변수로 지역 변수 할당. 그다음 렌더링된 뷰로 지역 변수 전달.