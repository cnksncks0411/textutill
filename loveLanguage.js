// 질문과 선택지를 배열에 저장
var choices = [
    [
        {"content": "나는 상대로부터 인정받는 말 듣는 것을 좋아한다.", "code":"A"},
        {"content": "나는 상대가 안아주는 것을 좋아한다.", "code":"E"}
    ],
    [
        {"content": "나는 상대와 단둘이 보내는 시간을 좋아한다.", "code":"B"},
        {"content": "나는 상대가 실질적인 도움을 줄때 사랑을 느낀다.", "code":"D"}
    ],
    [
        {"content": "나는 상대에게 선물 받는 것을 좋아한다.", "code":"C"},
        {"content": "나는 상대와 함께 산책하는 시간을 좋아한다.", "code":"B"}
    ],
    [
        {"content": "나는 상대가 나를 도와 줄때 사랑을 느낀다.", "code":"D"},
        {"content": "나는 상대에게 가벼운 신체 접촉을 받을 때 사랑을 느낀다.", "code":"E"}
    ],
    [
        {"content": "나는 상대가 감싸 안아 줄 때 사랑을 느낀다.", "code":"E"},
        {"content": "나는 상대에게 선물을 받을 때 사랑을 느낀다.", "code":"C"}
    ],
    [
        {"content": "나는 상대와 함께 외출하는 것을 좋아한다.", "code":"B"},
        {"content": "나는 상대와 손잡는 것을 좋아한다.", "code":"E"}
    ],
    [
        {"content": "나는 상대가 나를 인정해 줄 때 사랑을 느낀다.", "code":"A"},
        {"content": "나에게는 눈에 보이는 선물이 매우 의미가 있다.", "code":"C"}
    ],
    [
        {"content": "나는 상대와 함께 붙어 앉는 것을 좋아한다.", "code":"E"},
        {"content": "나는 상대가 나에 대해 매력적이라고 할 때 좋아한다.", "code":"A"}
    ],
    [
        {"content": "나는 상대와 함께 시간 보내는 것을 좋아한다.", "code":"B"},
        {"content": "나는 상대에게 작지만 선물 받는 것을 좋아한다.", "code":"C"}
    ],
    [
        {"content": "나는 상대가 나를 도와 줄때 사랑을 느낀다.", "code":"D"},
        {"content": "나를 이해해 주는 말들이 나에게는 중요하다.", "code":"A"}
    ],
    [
        {"content": "나는 상대와 뭔가 함께 하는 것을 좋아한다.", "code":"B"},
        {"content": "나는 상대가 해주는 친절한 말들을 좋아한다.", "code":"A"}
    ],
    [
        {"content": "나는 상대와 포옹할 때 완전함을 느낀다.", "code":"E"},
        {"content": "나는 상대의 말보다 행동을 볼 때 더 감동한다.", "code":"D"}
    ],
    [
        {"content": "나는 상대의 칭찬을 좋아하고 비판을 회피하는 편이다.", "code":"A"},
        {"content": "나는 커다란 선물보다는 작지만 자주 받는 것을 좋아한다.", "code":"C"}
    ],
    [
        {"content": "나는 상대가 자주 신체접촉해 줄 때 더 친근함을 느낀다.", "code":"E"},
        {"content": "나는 상대와 함께 뭔가 하거나 이야기할 때 친밀함을 느낀다.", "code":"B"}
    ],
    [
        {"content": "나는 상대가 내가 해 낸 일에 대해 칭찬해 주는 것을 좋아한다.", "code":"A"},
        {"content": "나는 상대가 나를 위해 기꺼이 하기 싫은 일을 해 줄때 진정한 사랑을 느낀다.", "code":"D"}
    ],
    [
        {"content": "나는 상대와 걸을 때 손잡아(어깨감싸) 주는 것을 좋아한다.", "code":"E"},
        {"content": "나는 상대가 내 이야기에 공감하면서 들어 주는 것을 좋아한다.", "code":"B"}
    ],
    [
        {"content": "나는 상대에게 선물 받는 것을 정말 즐거워한다.", "code":"C"},
        {"content": "나는 상대가 집안 일을 도와 줄 때 사랑을 느낀다.", "code":"D"}
    ],
    [
        {"content": "나는 상대방이 내 외모에 대해 칭찬해 주는 것을 좋아한다.", "code":"A"},
        {"content": "나는 상대가 내 기분을 이해하기 위해 시간을 내 줄때 사랑을 느낀다.", "code":"B"}
    ],
    [
        {"content": "나는 상대가 나를 어루만져 줄 때 평안함을 느낀다.", "code":"E"},
        {"content": "나는 상대의 수고에 사랑을 느낀다.", "code":"D"}
    ],
    [
        {"content": "나는 나를 위해 수고하는 상대에게 고마움을 느낀다.", "code":"D"},
        {"content": "나는 상대가 만든(준비한)선물 받는 것을 좋아한다.", "code":"C"}
    ],
    [
        {"content": "나는 상대가 나에게 전념(집중)할 때 그 느낌을 굉장히 좋아한다.", "code":"B"},
        {"content": "나는 상대가 나를 위해 실제로 행할 때 느낌을 굉장히 좋아한다.", "code":"D"}
    ],
    [
        {"content": "나는 상대가 선물과 함께 내 생일을 축하해 줄 때 사랑을 느낀다.", "code":"C"},
        {"content": "나는 내 생일 때 의미있는 말(카드에 쓰거나)을 하며 축하해 줄 때 사랑을 느낀다.", "code":"A"}
    ],
    [
        {"content": "나는 상대가 집안일을 도와 줄 때 사랑을 느낀다.", "code":"D"},
        {"content": "나는 상대가 선물을 줄 때 나를 사랑해 주는 것이라고 느낀다.", "code":"C"}
    ],
    [
        {"content": "나는 상대가 선물과 함께 특정한 날을 기억해 줄 때 고마움을 느낀다.", "code":"C"},
        {"content": "나는 상대가 끝까지 인내를 가지고 이야기를 들어 줄때 고마움을 느낀다.", "code":"B"}
    ],
    [
        {"content": "나는 상대와 장기간 여행을 즐긴다(원한다).", "code":"B"},
        {"content": "나는 상대가 내가 하는 일상적인 일에 충분히 관심을 기울여 주기를 바란다.", "code":"D"}
    ],
    [
        {"content": "기대하지 않은 입맞춤이 나를 흥분시킨다.", "code":"E"},
        {"content": "특별하지 않은 때라도 받는 선물은 나를 흥분시킨다.", "code":"C"}
    ],
    [
        {"content": "나는 상대에게 고맙다는 말 듣는 것을 좋아한다.", "code":"A"},
        {"content": "나는 상대가 이야기 하는 동안 나를 바라보는 것을 좋아한다.", "code":"B"}
    ],
    [
        {"content": "나는 상대가 준 선물은 언제나 특별하고 좋다.", "code":"C"},
        {"content": "나는 상대가 가벼운 신체 접촉해 주는 것을 좋아한다.", "code":"E"}
    ],
    [
        {"content": "나는 상대가 얼마나 나에게 고마워하고 있는지 말해 줄 때 사랑을 느낀다.", "code":"A"},
        {"content": "나는 상대가 내가 부탁한 일에 최선을 다해 줄 때 사랑을 느낀다.", "code":"D"}
    ],
    [
        {"content": "나는 매일 가벼운 신체 접촉을 원한다.", "code":"E"},
        {"content": "나는 매일 상대방의 지지하는 말이 필요하다.", "code":"A"}
    ],
];

var A = 0;
var B = 0;
var C = 0;
var D = 0;
var E = 0;

// 현재 질문의 인덱스
var currentQuestionIndex = 0;

$(document).on('click', '.start-button', () => {
    $(".start-button").hide();
    $(".question-container").show();

    showQuestion();
});

// 질문과 선택지를 표시하는 함수
function showQuestion() {
    $("#questionCount").text(currentQuestionIndex+1+"/30");
    var choiceButtons = document.querySelectorAll(".choice");

    for (var i = 0; i < choiceButtons.length; i++) {
        choiceButtons[i].innerText = choices[currentQuestionIndex][i].content;
        $(choiceButtons[i]).attr("code",choices[currentQuestionIndex][i].code);
    }
}

// 선택지를 클릭했을 때 다음 질문과 선택지를 표시하는 이벤트 리스너
$(document).on('click', '.choice', (item) => {
    let code = $(item.target).attr("code");
    countCode(code);

    currentQuestionIndex++;

    if (currentQuestionIndex < 30) {
        showQuestion();
    } else {
        // 모든 질문을 다 했을 때 결과창을 표시
        alert("테스트가 끝났습니다. 결과를 확인하세요.");
    }
});

function countCode(code) {
    switch(code){
        case "A": A++; break;
        case "B": B++; break;
        case "C": C++; break;
        case "D": D++; break;
        case "E": E++; break;
    }
}

function copyUrl() {
    var url = "";
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    url = window.document.location.href;
    textarea.value = url;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("url이 복사되었습니다.🤩");
  }
  
  Kakao.Link.createCustomButton({
    container: "#kakao-link-btn",
    templateId: 55537,
  });