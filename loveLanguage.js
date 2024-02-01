Kakao.init("209de3857b93f2544e92488d7da3b029");
console.log(Kakao.isInitialized());

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
var score =[];
var thu;

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
        $(".question-container").hide();
        sortScore();
        $(".result-container").show();
        $(".title").text("당신의 사랑의 언어는 "+score[0].value+"점을 받은 \""+score[0].name+"\"입니다.");
        $(".subTitle").text("2위 : "+score[1].name+"("+score[1].value+") / "+"3위 : "+score[2].name+"("+score[2].value+") / "+"4위 : "+score[3].name+"("+score[3].value+") / "+"5위 : "+score[4].name+"("+score[4].value+")");
        $("#result").html(score[0].result);
        thu = score[0].img;
    }
});

function sortScore() {
    // 객체 배열 생성
    score = [
        {
            name: '인정하는 말', value: A, img: './agree.png',
            result: "'인정하는 말'이란 칭찬이나 격려의 말을 통해 사랑과 존중을 표현하는 방식을 의미합니다. 이를 선호하는 사람들은 긍정적인 말을 통해 대인 관계에서 가치를 느끼며, 그들에게는 칭찬이나 격려의 말이 가장 큰 사랑의 표현이 될 수 있습니다.</br>예를 들어, 상대방의 노력을 칭찬하는 말(\"오늘 수고했어요, 노력해 줘서 고마워요.\"), 상대방의 능력을 인정하는 말(\"당신의 재능에 놀랐어요, 당신이 해낼 수 있다는 걸 알고 있어요.\"), 상대방을 특별하게 여기는 말(\"당신이 없으면 이 일은 불가능했을 거에요.\") 등은 '인정하는 말'에 속합니다.</br></br>이런 말들을 통해 상대방의 가치를 인정하고, 그들이 중요하다는 사실을 표현해주는 것이 중요합니다. 이러한 표현은 상대방의 자아존중감을 높이고, 그들이 더욱 긍정적인 감정을 느끼게 해줄 수 있습니다. 또한, '인정하는 말'을 통해 상대방의 자신감을 증진시키고, 그들이 더욱 더 행복하고 만족스러운 삶을 살 수 있도록 도와줄 수 있습니다."
        },
        {
            name: '함께하는 시간', value: B, img: './together.png',
            result: "'함께하는 시간'은 집중적인 관심과 함께 보내는 시간을 통해 사랑을 표현하는 방식을 의미합니다. 이를 선호하는 사람들은 함께 보내는 시간을 통해 사랑을 느끼며, 그들에게는 집중적인 시간이 가장 큰 사랑의 표현이 될 수 있습니다.</br></br>예를 들어, 함께 영화를 보거나, 산책을 하거나, 식사를 하는 시간 등이 '함께하는 시간'에 해당합니다. 또한 이런 활동들을 하면서 서로에게 집중하는 시간을 가지는 것이 중요합니다. 즉, 핸드폰을 멀리 두고 서로에게 집중하거나, 서로의 이야기를 경청하는 등의 행동이 필요합니다.</br></br>이러한 시간들은 상대방에게 '당신과 함께하는 시간이 중요해요', '당신에게 집중하고 싶어요'라는 사랑의 메시지를 전달합니다. 이 사랑의 언어를 통해 상대방에게 관심을 보여주고, 그들이 중요하다는 것을 표현하는 것이 중요합니다. 이렇게 함으로써 상대방은 자신이 소중하게 여겨지고, 사랑받고 있다는 것을 느낄 수 있습니다."
        },
        {
            name: '선물', value: C, img: './present.png',
            result: "'선물'은 선물을 통해 사랑을 표현하는 방식을 의미합니다. 이를 선호하는 사람들은 물질적인 선물을 받음으로써 사랑을 느끼며, 그들에게는 선물이 가장 큰 사랑의 표현이 될 수 있습니다.</br></br>선물은 반드시 비싼 것이 아니라, 상대를 생각하는 마음이 담긴 것이면 충분합니다. 예를 들어, 상대방이 좋아하는 음식을 사다주거나, 소소한 기념품을 선물하는 것, 또는 상대가 필요로 하는 물건을 선물하는 것 등이 '선물'에 해당합니다.</br></br>이러한 선물들은 상대방에게 '당신을 생각하고 있어요', '당신을 위해 준비했어요'라는 사랑의 메시지를 전달합니다. 선물을 통해 상대방에게 관심을 보여주고, 그들이 중요하다는 것을 표현하는 것이 중요합니다. 이렇게 함으로써 상대방은 자신이 소중하게 여겨지고, 사랑받고 있다는 것을 느낄 수 있습니다."
        },
        {
            name: '봉사', value: D, img: './service.png',
            result: "'봉사'는 남을 돕는 행동을 통해 사랑을 표현하는 방식을 의미합니다. 이를 선호하는 사람들은 자신을 위해 노력하는 행동을 통해 사랑을 느끼며, 그들에게는 상대방의 봉사 행동이 가장 큰 사랑의 표현이 될 수 있습니다.</br></br>예를 들어, 상대방의 일을 대신 해주는 행동(예: 집안일 돕기, 자동차 수리, 식사 준비 등), 상대방이 힘들어하는 것을 덜어주는 행동(예: 어려운 업무를 대신 처리해주기, 아픈 날 돌봐주기 등), 또는 상대방이 필요로 하는 것을 제공해주는 행동(예: 필요한 물건을 사다주기, 정보를 제공해주기 등)이 '봉사'에 속합니다.</br></br>이러한 행동들은 상대방에게 '당신을 위해 내가 노력할 준비가 되어 있다'는 사랑의 메시지를 전달합니다. 이 사랑의 언어를 통해 상대방의 부담을 덜어주고, 그들이 더욱 편안하고 안정된 상태를 유지할 수 있도록 돕는 것이 중요합니다. 이렇게 함으로써 상대방은 자신이 소중하게 여겨지고, 사랑받고 있다는 것을 느낄 수 있습니다."
        },
        {
            name: '스킨쉽', value: E, img: './skinship.png',
            result: "'스킨쉽'은 신체적인 접촉을 통해 사랑을 표현하는 방식을 의미합니다. 이를 선호하는 사람들은 손을 잡거나 포옹하는 등의 신체적 접촉을 통해 사랑을 느끼며, 그들에게는 이러한 신체적 접촉이 가장 큰 사랑의 표현이 될 수 있습니다.</br></br>예를 들어, 상대방의 손을 잡거나 어깨에 손을 얹는 행동, 포옹하거나 키스하는 행동, 또는 상대방을 두드려주는 행동 등이 '스킨쉽'에 해당합니다. 이런 행동들은 상대방에게 '당신을 사랑하고 있어요', '당신과 가까이 있고 싶어요'라는 사랑의 메시지를 전달합니다.</br></br>스킨쉽은 상대방에게 안전감을 주고, 친밀감을 느끼게 하는 중요한 요소입니다. 따라서 상대방이 편안하게 느낄 수 있는 방식으로 스킨쉽을 표현하는 것이 중요합니다. 이렇게 함으로써 상대방은 자신이 소중하게 여겨지고, 사랑받고 있다는 것을 느낄 수 있습니다."
        },
    ];

    // 객체 배열 정렬 (내림차순)
    score.sort(function (a, b) {
        return b.value - a.value;
    });
}
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
    templateId: 103816,
    templateArgs: {
        'THU': thu
    }
  });