"use strict"

const courseList =[{
    "name":"COOS-190",
    "chapter_list":["chapter_1", "chapter_2"]
},{
    "name":"COSA-190",
    "chapter_list":["chapter_1"]
}]

let courseSelect = document.getElementById("course_select")
for(let i = 0, len = courseList.length; i < len; i++){
    let option = document.createElement("option")
    let courseObj = courseList[i]
    option.value = courseObj.name
    option.innerText = courseObj.name
    courseSelect.append(option)
}

function getChapterListByCourseName(courseName){
    for(let i = 0, len = courseList.length; i < len; i++){
        let courseObj = courseList[i]
        if(courseObj.name === courseName){
            return courseObj.chapter_list
        }
    }
    return undefined
}

function emptyChapterSelect(){
    let chapterSelect = document.getElementById("chapter_select")
    for(let i = chapterSelect.options.length - 1; i > 0; i--){
        chapterSelect.remove(i)
    }
}

function courseIsSelected(){
    let selectedValue = courseSelect.options[courseSelect.selectedIndex].value
    let chapterList = getChapterListByCourseName(selectedValue)
    emptyChapterSelect()
    if(selectedValue !== ""){
        let chapterSelect = document.getElementById("chapter_select")
        for(let i = 0, len = chapterList.length; i < len; i++){
            let chapterName = chapterList[i]
            let option = document.createElement("option")
            option.value = chapterName
            option.innerText = chapterName
            chapterSelect.append(option)
        }
    }
}

courseSelect.addEventListener("change", courseIsSelected)
