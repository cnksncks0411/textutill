var language;

const getLanguage = (countryCode) => {
    let jsonData = JSON.parse(JSON.stringify(Language));
    
    if(countryCode == 'ko') {
        language = jsonData.ko;
    }else{
        language = jsonData.en;
    }

    return language;
}

/**
 *  언어 코드로 랭팩 조회
 */
const whereAreYouFrom = () => {
    var lang = navigator.userLanguage;

    if(navigator.appName == "Netscape"){
        lang = navigator.language;
    }

    var countryCode = lang.substr(0, 2).toLowerCase();
    
    language = getLanguage(countryCode);

    setLanguage();
}

/**
 *  언어팩 세팅
 */
const setLanguage = () => {
    document.title = language.replaceContent;
    document.getElementById("contentTitle").textContent = language.replaceContent;
    document.getElementById("feedback").textContent = language.tellMeFeedback;
    document.getElementById("inputTypeLabel").textContent = language.inputType;
    document.getElementById("direct").textContent = language.selfInput;
    document.getElementById("upload").textContent = language.fileUpload;
    document.getElementById("fileInputLabel").textContent = language.fileUpload;
    document.getElementById("textInputLabel").textContent = language.textInput;
    document.getElementById("helpMessage").textContent = language.helpMessage;
    document.getElementsByClassName("targetWordInput").placeholder = language.targetWord;
    document.getElementsByClassName("replacementWordInput").placeholder = language.replaceWord;
    document.getElementsByClassName("deleteButton").textContent = language.delete;
    document.getElementById("addButton").textContent = language.add;
    document.getElementById("downloadLink").textContent = language.download;
}

/**
 *  유형 선택 이벤트
 */
const toggleInputMethod = () => {
    var inputType = document.getElementById('inputType').value;
    var fileUploadSection = document.getElementById('fileUploadSection');
    var textInputSection = document.getElementById('textInputSection');

    if (inputType === 'upload') {
        fileUploadSection.style.display = 'block';
        textInputSection.style.display = 'none';
    } else {
        fileUploadSection.style.display = 'none';
        textInputSection.style.display = 'block';
    }
}

/**
 *  치환 세트 추가 버튼 이벤트
 */
function addReplacementSet() {
    var replacementSet = document.getElementById('replacementSet');

    var newDiv = document.createElement('div');
    newDiv.classList.add('replacementRow');

    var targetWordInput = document.createElement('input');
    targetWordInput.type = 'text';
    targetWordInput.classList.add('targetWordInput');
    targetWordInput.placeholder = language.targetWord;

    var replacementWordIput = document.createElement("input");
    replacementWordIput.type = 'text';
    replacementWordIput.classList.add("replacementWordInput");
    replacementWordIput.placeholder = language.replaceWord;

    var removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.innerHTML = language.delete;

    removeButton.onclick = function () {
        this.parentNode.remove();
    }

    newDiv.appendChild(targetWordInput);
    newDiv.appendChild(replacementWordIput);
    newDiv.appendChild(removeButton);

    replacementSet.appendChild(newDiv);
}

/**
 *  치환 세트 삭제 버튼 이벤트
 */
function removeReplacementSet(button) {
    button.parentNode.remove();
}

/**
 *  치환 함수
 */
function replaceWords() {
    var replacements = document.getElementsByClassName("replacementRow");  // 치환 영역
    var type = document.getElementById("inputType").value;   // 타입
    var result = "";
    var originalContents = "";

    if(type == "upload") {  // 파일 업로드의 경우
        let file = document.getElementById("fileInput").files[0];   // 파일
        
        if(!file) {
            alert(language.fileNull);
            return false;
        }
        var reader = new FileReader();
        var contents = "";

        reader.onload = function (e) {
            contents = e.target.result;
            originalContents = contents;
            contentsLength = contents.length;

            for (var i in replacements) {
                if (replacements[i].nodeType == 1) {
                    var target = replacements[i].querySelector(".targetWordInput").value;
                    var replacement = replacements[i].querySelector(".replacementWordInput").value;
                    contents = contents.replace(new RegExp(target, 'g'), replacement);
                }
            }

            var blob = new Blob([contents], { type: 'text/plain' });
            var url = URL.createObjectURL(blob);

            // 다운로드 링크 설정
            var downloadLink = document.getElementById('downloadLink');
            downloadLink.href = url;
            downloadLink.download = file.name;

            // 다운로드 링크 표시
            downloadLink.style.display = 'block';

            result = contents;

            // 결과 확인 영역 업데이트
            updateResultArea(contentsLength, result);
            saveData(type, originalContents, result);
        };

        reader.readAsText(file);
    }else {     // 직접 입력의 경우
        // 텍스트 입력 처리
        var textContent = document.getElementById("textInput").value;
        originalContents = textContent;
        let textContentLength = textContent.length;

        // 치환 작업 수행
        for (var i in replacements) {
            if (replacements[i].nodeType == 1) {
                var target = replacements[i].querySelector(".targetWordInput").value;
                var replacement = replacements[i].querySelector(".replacementWordInput").value;
                textContent = textContent.replace(new RegExp(target, 'g'), replacement);
            }
        }
        result = textContent;
        
        // 결과 확인 영역 업데이트
        updateResultArea(textContentLength, result);
        saveData(type, originalContents, result);
    }
}

const saveData = (type, originalContents, newContents) => {
    let data = {
        replacement_type : type,
        original_text : originalContents,
        replacement_text : newContents
    };
    
    $.ajax({
        url: "test.php",
        data: data,
        method: "POST",
        error: function(e) {
            console.log(e.status);
        },
        success: function(data) {
            console.log(data);
        }
    });
}
// 치환 후 결과창 업데이트 함수
function updateResultArea(originalSize, result) {
    var resultArea = document.getElementById("resultArea");
    resultArea.style.display = 'block';
    resultArea.innerText = result;
    
    var resultUtil = document.getElementsByClassName("resultUtil");
    while (resultUtil.length > 0) {
        resultUtil[0].parentNode.removeChild(resultUtil[0]);
    }

    let contentLength = '<div class="resultUtil">';
    contentLength +=        '<p>'+language.originalTextLength+' : '+originalSize+'</p>';
    contentLength +=        '<p>'+language.replacementTextLength+' : '+result.length+'</p>';
    // 복사 버튼 생성 및 이벤트 처리 추가
    contentLength +=        '<button type="button" class="copy longButton" onclick="copyToClipboard()">'+language.copyResult+'</button>';
    contentLength +=    '</div>';

    resultArea.insertAdjacentHTML(
        "afterend",
        contentLength
    );
}

// 클립보드 복사 함수
function copyToClipboard() {
    var resultArea = document.getElementById("resultArea");
    /* 클립보드에 결과 복사 */
    if (!navigator.clipboard) { 
        return; 
    } 
    navigator.clipboard.writeText(resultArea.innerText)
    /* 필요한 로직 추가 */

    alert(language.successCopy);
}